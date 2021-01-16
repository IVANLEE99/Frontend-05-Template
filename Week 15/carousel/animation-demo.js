import { Timeline, Animation } from './animation.js'

let tl = new Timeline();
let animation = new Animation(document.querySelector('#el').style, 'transform', 0, 500, 5000, 0, null, v => `translateX(${v}px)`);
tl.addAnimation(animation);
tl.start()

document.querySelector('#pause-btn').addEventListener('click',()=>tl.pause())
document.querySelector('#resume-btn').addEventListener('click',()=>tl.resume())

