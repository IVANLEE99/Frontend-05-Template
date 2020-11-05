#学习笔记

## proxy 的文档

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## reactive 原理

    effect(callback) 调用一次callback-> callback 触发poxy的getter->proxy中里的getter中收集到依赖[obj,prop]放入到 usedReactivties[]中->