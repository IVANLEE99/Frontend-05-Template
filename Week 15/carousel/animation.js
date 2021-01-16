const TICK = Symbol('tick');
const TICK_HANDLER = Symbol("tick-handler");
const ANIMATIONS = Symbol("animations");
const START_TIME = Symbol("start-time");
export class Timeline {
    constructor() {

        //确保唯一性，防止别人调用
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
    }
    start() {
        let startTime = Date.now();
        this[TICK] = () => {
            let now = Date.now();
            for (const animation of this[ANIMATIONS]) {
                let t;
                //Timeline启动后添加的动画
                if (this[START_TIME].get(animation) < startTime) {
                    t = now - startTime;
                } else {
                    //Timeline已经启动，后再添加的动画
                    t = now - this[START_TIME].get(animation);
                }
                if (t > animation.duration) {
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }
                // console.log(t);
                animation.receive(t);
            }
            requestAnimationFrame(this[TICK]);
        }
        this[TICK]();
    }

    pause() {

    }

    resume() {

    }
    reset() {

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
    constructor(object, property, startValue, endValue, duration, delay, timingFunction) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
    }
    receive(time) {
        let range = (this.endValue - this.startValue);
        this.object[this.property] = this.startValue + range * time / this.duration;
        // console.log(this.object[this.property]);
    }
}