import { Component, createElement, STATE, ATTRIBUTE } from './framework.js'
import { enableGesture } from '../GESTURE/gesture.js'
import { Timeline, Animation } from './animation.js'
import { ease, easeIn } from './TimingFun.js'
export { STATE, ATTRIBUTE } from './framework.js'
export class List extends Component {
    constructor() {
        super();
    }
    render() {
        this.children = this[ATTRIBUTE].data.map(this.template);
        console.log('-------------');
        console.log(this[ATTRIBUTE]);
        console.log(this.children);
        this.root = (<div>{this.children}</div>).render();
        debugger;
        return this.root;
    }
    appendChild(child) {
        this.template = (child);
        // this.render();
    }
}