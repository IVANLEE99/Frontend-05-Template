# 学习笔记

# [html 状态](https://html.spec.whatwg.org/multipage/)

# HTML解析 | 用token构建DOM树

    1、从标签构建DOM树的基本技巧是使用栈
    2、遇到开始标签时创建元素并入栈，遇到结束标签时出栈
    3、自封闭节点可视为入栈后立刻出栈
    4、任何元素的父元素是它入栈前的栈顶

# HTML解析 | 将文本节点加到DOM树
    1、文本节点与自封闭标签处理类似
    2、多个文本节点需要合并

# CSS计算 | 收集CSS规则

    1、遇到style 标签时候，把css规则保存起来
    2、通过css parser来分析css 规则

#  CSS计算 | 添加调用
    1、创建一个元素后，立即计算css
    2、理论上，当我们分析一个元素的时候，所有的css规则已经收集完毕；
    3、在真是的浏览器钟可能遇到写在body的style标签，需要重新css计算
# CSS计算 | 获取父元素序列
    1、在computeCSS函数中，我们必须知道元素的所有父元素才能判断元素与规则是否匹配
    2、在stack中可以获取本元素所有的父元素
    3、因为我偶们获取的是当前元素，所以我们获取和计算父元素匹配的混徐是从内向外的  div div #myid
    4、var element = stack.slice().reverse();

# CSS计算 | 选择器与元素的匹配
    1、选择器也要从当前元素向外排列
    2、复杂选择去拆成针对当个元素的选择器，用循环匹配父元素队列
# CSS计算 | 计算选择器与元素匹配
    1、根据选择器的类型和元素属性，计算是否与当前元素匹配
    2、只实现了class id 标签 三种基本选择器

#  CSS计算 | specificity的计算逻辑
    1、css 规则根据specificity和后来优先规则覆盖
    2、specificity是一个四元组越左边权重约高
        div div #id
        [0,    1,   0,    2]
        inline id   class tag
    3、一个css规则的specificity根据包哦含的简单选择器相加而成