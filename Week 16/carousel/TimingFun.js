import CubicBezier from './CubicBezier.js'

export let linear = v => v;

// {"ease":".25,.1,.25,1","linear":"0,0,1,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"}
export let ease = v => {
    var cubicBezier = new CubicBezier('cubic-bezier(.25,.1,.25,1)');
    let p = cubicBezier.getPoint(v);
    let w = cubicBezier.getY(v);
    console.log(w);
    return w;
}
export let easeIn = v => {
    var cubicBezier = new CubicBezier('cubic-bezier(.42,0,1,1)');
    let p = cubicBezier.getPoint(v);
    let w = cubicBezier.getY(v);
    console.log(w);
    return w;
}
export let easeOut = v => {
    var cubicBezier = new CubicBezier('cubic-bezier(0,0,.58,1)');
    let p = cubicBezier.getPoint(v);
    let w = cubicBezier.getY(v);
    console.log(w);
    return w;
}
export let easeIntOut = v => {
    var cubicBezier = new CubicBezier('cubic-bezier(.42,0,.58,1)');
    let p = cubicBezier.getPoint(v);
    let w = cubicBezier.getY(v);
    console.log(w);
    return w;
}
// var cubicBezier = new CubicBezier('cubic-bezier(.175, .885,.32,1.275)');
// cubicBezier.getPoint(t);