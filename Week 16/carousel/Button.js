import { Component, createElement, STATE, ATTRIBUTE } from './framework.js'
import { enableGesture } from '../GESTURE/gesture.js'
import { Timeline, Animation } from './animation.js'
import { ease, easeIn } from './TimingFun.js'
export { STATE, ATTRIBUTE } from './framework.js'
export class Button extends Component {
    constructor() {
        super();
    }
    render() {
        this.childContainer = <span></span>;
        this.root = (<div>{this.childContainer}</div>).render();
        return this.root;
    }
    appendChild(child) {
        if (!this.childContainer) {
            this.render();
        }
        this.childContainer.appendChild(child);
    }
}