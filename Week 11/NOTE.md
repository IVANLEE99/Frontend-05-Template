# 学习笔记

#  CSS计算 | specificity的计算逻辑
    1、css 规则根据specificity和后来优先规则覆盖
    2、specificity是一个四元组越左边权重约高
        div div #id
        [0,    1,   0,    2]
        inline id   class tag
    3、一个css规则的specificity根据包哦含的简单选择器相加而成


    请写出下面选择器的优先级： div#a.b .c[id=x]    0 1 3 1 
    #a:not(#b)          0 2 0 0 
    *.a                 0 0 1 0 
    div.a               0 0 1 1

    【：not】否定伪类在优先级计算中不会被看做是伪类，但是，会把:not里面的选择器当普通选择器计数。这句话有点不好理解，其实就是忽略掉:not，其他伪类(如:hover)参与CSS优先级的计算，但是「:not」不参与计算。

## 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？（提交至 GitHub）

    float会触发重绘和重排
    因为first-letter是针对字的样式不用关心变化布局所带来的影响，而first-line时必须是布局计算完成才能确定首行，
    如果first-line支持改变大小或display，那么布局又需要重新计算首行很影响性能。
    first-line
    无法一开始就确定第一行所包含的内容，第一行的内容会在渲染最后才确定

## 编写一个 match 函数。它接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

    个人实现方法
    1、selector根据空格切割成基本选择器数组arr（后面需要增加> ~ + 等切割符的适配），翻转一下
    let arr = selector.split(' ').reverse();
    ["#input.input", "#test", "div.container.container2"]

    2、记录当前元素的所有父元素parents
            let parents = [element];
            let _parent = element;
            while (_parent.parentNode) {
                parents.push(_parent.parentNode);
                _parent = _parent.parentNode;
            }
    3、循环择器数组arr,得到 "#input.input"，然后每一将# . [ 前面插入空格，然后根据空格 切成数组

                let _a = a.replace(/#/g, ' #').replace(/\./g, ' .').replace(/\[/g, ' [');
                console.log(_a);
                let __arr = _a.split(' ');
                // #input .input [type=text]
    4、调用统一的_match函数匹配
            function _match(element, selector) {
            if (!selector || !element.attributes) {
                return false;
            }
            if (selector.charAt(0) == "#") {
                var attr = element.attributes.id;
                if (attr && attr.value === selector.replace("#", "")) {
                    return true;
                }
            } else if (selector.charAt(0) == ".") {
                var attr = element.attributes.class;
                var _s = selector.replace(".", "")
                var _v = attr && attr.value || ''
                _v = _v.split(' ');
                for (let i = 0; i < _v.length; i++) {
                    const e = _v[i];
                    if (e === _s) {
                        return true;
                    }
                }

            } else {
                //要转大写
                if (element.tagName === (selector && selector.toUpperCase())) {
                    return true;
                }
            }
            return false;
        }
    5、判断逻辑

    第一个元素找不到返回false
    父元素找不到，接着用下一个父元素比对，比对不成功的父元素就删除，保持最新的父元素
    知道所有的父元素都比对成功，则返回false

    6、需要优化的地方
    子孙选择器
    属性选择器
    
