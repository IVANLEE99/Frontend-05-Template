# 学习笔记

## 标签tag 元素element  盒box

    HTML代码中可以书写开始__标签__，结束_标签___ ，和自封闭__标签__ 。

    一对起止_标签___ ，表示一个__元素__ 。

    DOM树中存储的是_元素___和其它类型的节点（Node）。

    CSS选择器选中的是__元素或者伪元素__ 。

    CSS选择器选中的__元素__ ，在排版时可能产生多个___盒_ 。

    排版和渲染的基本单位是__盒__ 。

# 对盒模型的理解

        在css3中新增了box-sizing，包含两个属性content-box和border-box。

        （1） content-box 元素的width = content

        （2）border-box 元素的width = border + padding + content

# 正常流排版

    • 收集盒进行
    • 计算盒在行中的排布
    • 计算行的排布

    line-box------  ifc
    block-level-box------ bfc
# float clear

    float 浮动
    clear 清除浮动，相当于找到一块干净的区域靠

# margin collapse 边距堆叠 只会发生在bfc中

# bfc合并

    Block Container：里面有BFC的
    • 能容纳正常流的盒，里面就有BFC，
    • block
    • inline-block
    • table-cell
    • flex item
    • grid cell
    • table-caption
    Block-level Box：外面有BFC的
    Block Box = Block Container + Block-level Box：
    里外都有BFC的


    设立BFC
    • floats
    • absolutely positioned elements
    • block containers (such as inline-blocks, table-cells, and table-captions)
    that are not block boxes,
    • flex items
    • grid cell
    • ......
    • and block boxes with 'overflow' other than 'visible'

    BFC合并
    • block box && overflow:visible
    • BFC合并与float
    • BFC合并与边距折叠

# Flex排版

    • 收集盒进行
    • 计算盒在主轴方向的排布
    • 计算盒在交叉轴方向的排布
# 应用技巧

    data uri + svg
    • data:image/svg+xml,<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg"><ellipse cx="300" cy="150"
    rx="200" ry="80" style="fill:rgb(200,100,50);
    stroke:rgb(0,0,100);stroke-width:2"/> </svg>