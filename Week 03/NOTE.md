# 学习笔记
AST

## LL算法和LR算法

## 四则运算

    1、TokenNumber:0123456789.的组合
    2、Operator: +-*/ 之一
    3、Whitespace:<SP>
    4、LineTerminator:<LF><CR>

## 四则运算词法定义

    <Expression>::=<AdditiveExpression><EOF>

    <AdditiveExpression>::=<MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><ltiplicativeExpression>

    <MultiplicativeExpression>::=<Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>

## LL语法分析

    <AdditiveExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
## 其他
    https://juejin.im/post/6844904202121003021