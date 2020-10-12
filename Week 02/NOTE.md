# 学习笔记

## 编程实践

1、 localStorage['map'] 代替 localStorage.getItem("map")
2、初始化数组   Array(10000).fill(0);
3、cell.classList.add('cell'); 给元素添加class  ;e.classList.remove("light"); 元素移除class；
cell.style.backgroundColor = "";给元素设置背景颜色
4、队列 先进先出  push  shift; 栈 先进后出  push pop
5、不建议使用childNodes方法。硬要使用这个方法，可以通过nodeType来判断是哪种类型的节点，只有当nodeType==1时才是元素节点，2是属性节点，3是文本节点。因此我们可以通过这样判断：

        if (nodes.childNodes[i].nodeType == 1) {
            // nodes.childNodes[i] 是元素节点
        }

        2、使用children方法时，不要使用注释。
        3、推荐使用：
                var arr = nodes.getElementsByTagName("li");
                arr[ i ].xxx