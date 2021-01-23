import { Component, createElement, STATE, ATTRIBUTE } from './framework.js'
import { enableGesture } from '../GESTURE/gesture.js'
import { Timeline, Animation } from './animation.js'
import { ease, easeIn } from './TimingFun.js'
export { STATE, ATTRIBUTE } from './framework.js'
export class Carousel extends Component {
    constructor() {
        super();
    }
    render() {
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for (const record of this[ATTRIBUTE].src) {
            let child = document.createElement('div');
            child.style.backgroundImage = `url('${record.img}')`
            this.root.appendChild(child);
        }
        enableGesture(this.root);
        let timeline = new Timeline;
        timeline.start();
        let children = this.root.children;
        this[STATE].position = 0;

        let handler = null; //自动播放定时器
        let t = 0;
        let ax = 0;//拖曳偏移量
        this.root.addEventListener('start', event => {
            timeline.pause();
            clearInterval(handler);
            let progress = (Date.now() - t) / 500;
            ax = ease(progress) * 500 - 500 || 0;
            console.log('ax--------');
            console.log(progress, ax);
        })
        this.root.addEventListener('tap', event => {
            this.triggerEvent("Click", {
                data: this[ATTRIBUTE].src[this[STATE].position],
                position: this[STATE].position
            });
        })
        this.root.addEventListener('pan', event => {
            console.log('pan');
            let x = event.clientX - event.startX - ax;
            let current = this[STATE].position - ((x - x % 500) / 500);
            for (const offset of [-1, 0, 1]) {
                let pos = current + offset;
                pos = (pos % children.length + children.length) % children.length;
                console.log('===pos=');
                console.log(pos);
                children[pos].style.transition = 'none';
                children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`
            }
        })
        this.root.addEventListener('end', event => {
            console.log('end');
            timeline.reset();
            timeline.start();
            handler = setInterval(nextPicture, 3000);


            let x = event.clientX - event.startX - ax;
            let current = this[STATE].position - ((x - x % 500) / 500);

            for (const offset of [-1, 0, 1]) {
                let pos = current + offset;
                pos = (pos % children.length + children.length) % children.length;

                let direction = Math.round((x % 500) / 500);

                if (event.isFlick) {
                    if (event.isFlick < 0) {
                        direction = Math.ceil((x % 500) / 500);
                    } else {
                        direction = Math.floor((x % 500) / 500);
                    }
                }

                children[pos].style.transition = 'none';
                timeline.addAnimation(new Animation(children[pos].style, 'transform', -pos * 500 + offset * 500 + x % 500, -pos * 500 + offset * 500 + direction * 500, 500, 0, ease, v => `translateX(${v}px)`))
                this[STATE].position = this[STATE].position - ((x - x % 500) / 500) - direction;
                this[STATE].position = (this[STATE].position % children.length + children.length) % children.length;
                this.triggerEvent("Change", { position: this[STATE].position })
            }
        })
        let nextPicture = () => {
            let children = this.root.children;
            let nextIndex = (this[STATE].position + 1) % children.length;
            let current = children[this[STATE].position];
            let next = children[nextIndex];

            t = Date.now();//动画开始时间

            timeline.addAnimation(new Animation(current.style, 'transform', -this[STATE].position * 500, -500 - this[STATE].position * 500, 500, 0, ease, v => `translateX(${v}px)`))

            timeline.addAnimation(new Animation(next.style, 'transform', 500 - nextIndex * 500, - nextIndex * 500, 500, 0, ease, v => `translateX(${v}px)`))
            this[STATE].position = nextIndex;
            this.triggerEvent("Change", { position: this[STATE].position })
        }
        handler = setInterval(nextPicture, 3000);
    
        return this.root;
    }
}