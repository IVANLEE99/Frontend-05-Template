1. JS表达式 | 运算符和表达式
 2. JS表达式 | 类型转换
 3. == 基本都是转成nunber再做比较
   
        number 的先调用valueof方法
        字符串的先调用 toString（）方法


4、装箱操作
5、表达式

    Call 优先级低于new，也低于Member运算
    foo()
    super()
    foo()['b']
    foo().b
    foo()abc 如果在call expressions里有用到Member表达式，则都统一降级为call expressions级别
    Example: new a()['b'] ---> 先是new a()（Member），然后是new运算后的结果再接上['b']

    总结来说，就是为了解决()跟谁先结合的问题，才有了Member、New、Call Expressions的优先级

6、微任务和宏任务

    宏任务（传给js引擎的任务）
    微任务（es2020中，只有Promise产生微任务，js引擎内部的任务）
    函数调用（Execution Context）
    语句/声明（Completion Record）
    表达式（Reference）
    直接量/变量/this...

7、Uncaught TypeError: n.addEdge is not a function #1239

    https://github.com/antvis/G6/issues/1239