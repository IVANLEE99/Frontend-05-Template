学习笔记

## 知识点

1、for-in/of 对象遍历的区别

        for  in
        用于对象的可访问属性的遍历，for-in 读取键名，适合处理对象

            遍历数字键，也会遍历非数字键或其他属性

            返回key在迭代中不保证返回顺序

        

        for of
        用于读取可迭代属性的value，for-of 读取键值

            数据结构有Symbol.iterator属性，表示有 iterator 接口，可以使用 for-of 循环

        for-of 内部调用数据结构的Symbol.iterator方法

            直接取值简洁高效

            和forEach不同，可以使用continue  break   return

            可以遍历大部分的数据结构，可以处理【类数组】

2、String.fromCharCode(Math.random() * 26 + 'a'.charCodeAt(0))

    fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
    String.fromCharCode(72,69,76,76,79)//HELLO


    charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。

    方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。

## 学习笔记

    字典树还可以一次就理解，然而kmp算法和wildcard算法看三四次才有一点点眉目，怎么回事，算法思维和抽象思维不够呀，得去leetcode刷题提高提高才行~也只有这样了
