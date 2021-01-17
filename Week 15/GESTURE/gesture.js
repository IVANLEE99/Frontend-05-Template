let element = document.documentElement;
// window.document.oncontextmenu = function(e){ return false;}
window.document.oncontextmenu = function (e) { e.preventDefault(); }
let isListeningMouse = false;
element.addEventListener('mousedown', event => {
    let context = Object.create(null);
    contexts.set("mouse" + (1 << event.button), context);

    console.log('start', (1 << event.button));
    start(event, context);
    let mousemove = event => {
        let button = 1;
        console.log('move', event.buttons);
        while (button <= event.buttons) {
            if (button & event.buttons) {
                console.log(button & event.buttons);
                let key;
                if (button === 2) {
                    key = 4;
                } else if (button === 4) {
                    key = 2;
                } else {
                    key = button;
                }
                let context = contexts.get('mouse' + key);
                move(event, context);
            }
            button = button << 1;
        }
    }
    let mouseup = event => {
        let context = contexts.get('mouse' + (1 << event.button));
        end(event, context);
        contexts.delete('mouse' + (1 << event.button));
        if (event.buttonss === 0) {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            isListeningMouse = false;
        }
    }
    if (!isListeningMouse) {
        document.addEventListener('mousemove', mousemove);
        document.addEventListener("mouseup", mouseup);
        isListeningMouse = true;
    }

})

let contexts = new Map();
element.addEventListener('touchstart', event => {
    for (const touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context)
    }
})
element.addEventListener('touchmove', event => {
    for (const touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        move(touch, context)
    }
})
element.addEventListener('touchend', event => {
    for (const touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier)
    }
})
element.addEventListener('touchcancel', event => {
    for (const touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        cancel(touch, context);
        contexts.delete(touch.identifier)
    }
})

// let startX, startY;
// let isPan = false, isTap = true, isPress = false;
// let handler;
let start = (point, context) => {
    // console.log('start', point.clientX, point.clientY);
    context.startX = point.clientX, context.startY = point.clientY;
    context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    }]
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;
    context.isFlick = false;
    //开始0.5s视为按压
    context.handler = setTimeout(() => {
        context.isTap = false;
        context.isPan = false;
        context.isPress = true;
        context.handler = null;
        console.log('press');
    }, 500)
}
let move = (point, context) => {
    // console.log('move', point.clientX, point.clientY);

    let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
    //不是平移状态的时候移动超过10px 就先当有于平移开始 panstart，取消越来的press监听
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isTap = false;
        context.isPress = false;
        context.isPan = true;
        console.log('panstart');
        clearTimeout(context.handler);
    }
    if (context.isPan) {
        //平移
        console.log(dx, dy);
        console.log('pan');
    }

    context.points = context.points.filter(point => Date.now() - point.t < 500)
    context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    })
}
let end = (point, context) => {
    // console.log('end', point.clientX, point.clientY);
    if (context.isTap) {
        // console.log('tap');
        dispatch("tap", {})
        clearTimeout(context.handler);
    }
    if (context.isPan) {
        console.log('panend');
    }
    if (context.isPress) {
        console.log('pressend');
    }
    context.points = context.points.filter(point => Date.now() - point.t < 500)
    let d, v;
    if (!context.points.length) {
        v = 0;
    } else {
        d = Math.sqrt((point.clientX - context.points[0].x) ** 2 + (point.clientY - context.points[0].y) ** 2)
        v = d / (Date.now() - context.points[0].t)
    }

    if (v > 1.5) {
        console.log('flick');
        context.isFlick = true;
    } else {
        context.isFlick = false;
    }
    console.log('end', point.clientX, point.clientY);
}
let cancel = (point, context) => {
    console.log('cancel', point.clientX, point.clientY);
}

function dispatch(type, properties) {
    let event = new Event(type);
    for (const key in properties) {
        if (properties.hasOwnProperty(key)) {
            const value = properties[key];
            event[key] = value;
        }
    }
    element.dispatchEvent(event);
}