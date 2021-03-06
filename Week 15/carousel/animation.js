const TICK = Symbol('tick');
const TICK_HANDLER = Symbol("tick-handler");
const ANIMATIONS = Symbol("animations");
const START_TIME = Symbol("start-time");
const PAUSE_TIME = Symbol("pause-time");
const PAUSE_START = Symbol("pause-start");

export class Timeline {
    constructor() {
        this.state = 'Inited';

        //确保唯一性，防止别人调用
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
    }
    start() {
        if (this.state !== 'Inited') {
            return;
        }
        this.state = 'started';
        let startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[TICK] = () => {
            let now = Date.now();
            for (const animation of this[ANIMATIONS]) {
                let t;
                // debugger;
                //Timeline启动后添加的动画
                if (this[START_TIME].get(animation) < startTime) {
                    t = now - startTime - this[PAUSE_TIME] - animation.delay;
                } else {
                    //Timeline已经启动，后再添加的动画
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;
                }
                if (t > animation.duration) {
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }
                if (t > 0) {
                    animation.receive(t);
                }
            }
            this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
        }
        this[TICK]();
    }

    pause() {
        if (this.state !== 'started') {
            return;
        }
        this.state = 'paused';
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLER]);
    }

    resume() {
        if (this.state !== 'paused') {
            return;
        }
        this.state = 'started';
        this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
        this[TICK]();
    }
    reset() {
        this.pause();
        this.state = 'Inited';
        let startTime = Date.now();
        this.[PAUSE_TIME] = 0;
        this[ANIMATIONS] = new Set();
        this[START_TIME] = 0;
        this[TICK_HANDLER] = null;
    }
    addAnimation(a, startTime) {
        if (arguments.length < 2) {
            startTime = Date.now();
        }
        this[ANIMATIONS].add(a);
        this[START_TIME].set(a, startTime);
    }
}
export class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        timingFunction = timingFunction || (v => v);
        // timingFunction =  (v => v);
        template = template || (v => v);
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
        this.template = template;
    }
    receive(time) {
        let range = (this.endValue - this.startValue);
        let progress = this.timingFunction(time / this.duration);
        this.object[this.property] = this.template(this.startValue + range * progress);
        // console.log(this.object[this.property]);
    }
}