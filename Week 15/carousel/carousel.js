import { Component,createElement  } from './framework.js'
export class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for (const record of this.attributes.src) {
            let child = document.createElement('div');
            child.style.backgroundImage = `url('${record}')`
            this.root.appendChild(child);
        }
        /* let currentIndex = 0;
        setInterval(() => {
            let children = this.root.children;
            let nextIndex = (currentIndex + 1) % children.length;
            let current = children[currentIndex];
            let next = children[nextIndex];

            next.style.transition = 'none';
            next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

            //16 一帧的时间
            setTimeout(() => {
                next.style.transition = '';
                current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
                next.style.transform = `translateX(${-nextIndex * 100}%)`

                currentIndex = nextIndex;
            }, 16);
        }, 3000)*/
        let position = 0;
        this.root.addEventListener("mousedown", event => {
            let children = this.root.children;
            let startX = event.clientX;
            let move = (e) => {
                console.log('mousemove');
                let x = e.clientX - startX;
                // let  _position = (position - Math.round(x / 500)+children.length)%children.length;
                // console.log('---_position-');
                // console.log(_position);                
                // console.log(position);                
                // for (let i = 0; i < children.length; i++) {
                //     const child = children[i];
                //     child.style.transition = 'none';
                //     // child.style.transform = `translateX(${(-position+i) * 500 + x}px)`
                //     child.style.transform = `translateX(${ -position*500+ x}px)`
                // }

                let current = position - ((x - x % 500) / 500);
                for (const offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = 'none';
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`
                }
            }

            let up = (e) => {
                console.log('mouseup');

                let x = e.clientX - startX;
                /*position = (position - Math.round(x / 500) + children.length) % children.length;

                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    child.style.transition = '';
                    // child.style.transform = `translateX(${(-position+i) * 500 + x}px)`
                    child.style.transform = `translateX(${-position * 500}px)`
                }*/
                // position = position - Math.round(x / 500);
                position = (position - Math.round(x / 500) + children.length) % children.length;
                for (const offset of [0, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = '';
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`

                }
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            console.log('down');
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        })
        return this.root;
    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }
}