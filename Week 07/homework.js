// 完成 StringToNumber 和 NumberToString 两个函数
// StringToNumber new Number()->parsetFloat
//  和 
// NumberToString number-》对象-》toString()

function StringToNumber(str) {
    let num = new Number(str);
    return num;
}
function NumberToString(_num,radix) {
    let num = new Number(_num);
    return num.toString(radix)
}

console.log(StringToNumber(555))
console.log(NumberToString(10,2))