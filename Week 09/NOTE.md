# 学习笔记

# [html 状态](https://html.spec.whatwg.org/multipage/)

# HTML解析 | 用token构建DOM树

    1、从标签构建DOM树的基本技巧是使用栈
    2、遇到开始标签时创建元素并入栈，遇到结束标签时出栈
    3、自封闭节点可视为入栈后立刻出栈
    4、任何元素的父元素是它入栈前的栈顶