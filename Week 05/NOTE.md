#学习笔记

## proxy 的文档

    https://es6.ruanyifeng.com/#docs/proxy

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## reactive 原理

    1、effect(callback) 调用一次callback-> 
    2、callback 触发poxy的getter->
    3、proxy中里的getter中收集到依赖[obj,prop]放入到 usedReactivties[]中->


## dragable 原理

    1、监听鼠标mousedow mousemove 和mouseup事件
    2、根据鼠标的clientX和clientY改变div的transform：translate

## range 和 cssom

    https://developer.mozilla.org/zh-CN/docs/Web/API/Range

    1、根据文本长度创建range   document.createRange(); range.setStart(e, i); range.setEnd(e, i);
    2、根据鼠标的位置获取最近的range   range.getBoundingClientRect
    3、将div插入最近的range位置     range.insertNode(dragable);