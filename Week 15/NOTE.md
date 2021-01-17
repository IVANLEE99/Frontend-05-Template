##学习笔记
 <!-- type = 'moule' -->
## cubic-bezier 曲线
https://cubic-bezier.com

## 鼠标的event.button 和 event.buttons

## 鼠标禁用右键
    window.document.oncontextmenu = function(){ return false;}

## 10. 手势与动画 | 派发事件

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

    document.documentElement.addEventListener('tap',()=>{
            console.log('tap event trigger')
    })




