const TICK = Symbol('tick');
const TICK_HANDLER = Symbol("tick-handler");
const ANIMATIONS = Symbol("animations");
export class Timeline {
    constructor() {

        //确保唯一性，防止别人调用
        this[ANIMATIONS] = new Set();
    }
    start() {
        let startTime = Date.now();
        this[TICK] = () => {
            let t = Date.now() - startTime;
            for (const animation of this[ANIMATIONS]) {
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
    addAnimation(a) {
        this[ANIMATIONS].add(a);
    }
}
export class Animation {
    constructor(object, property, startValue, endValue, duration, timingFunction) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
    }
    receive(time) {
        let range = (this.endValue - this.startValue);
        this.object[this.property] = this.startValue + range * time / this.duration;
        console.log(this.object[this.property]);
    }
}