function find_a(string) {
    if (typeof string != 'string') {
        return false;
    }
    for (let i = 0; i < string.length; i++) {
        const s = string[i];
        if (s == 'a') {
            return i;
        }
    }
    return false;
}
// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”
function find_ab(string) {
    if (typeof string != 'string') {
        return false;
    }
    for (let i = 0; i < string.length; i++) {
        const s = string[i];
        if (s == 'a' && i + 1 < string.length && string[i + 1] == 'b') {
            return [i, i + 1];
        }
    }
    return false;
}
console.log(find_ab('sdfsdffabsasdafsdf'));