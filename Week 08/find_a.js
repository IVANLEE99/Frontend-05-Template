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

// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”
function find_abcdef(string) {
    if (typeof string != 'string') {
        return false;
    }
    if (string.length < 'abcdef'.length) {
        return false;
    }
    for (let i = 0; i < string.length; i++) {
        const s = string[i];
        if (s == 'a'
            && (i + 1 < string.length && string[i + 1] == 'b')
            && (i + 2 < string.length && string[i + 2] == 'c')
            && (i + 3 < string.length && string[i + 3] == 'd')
            && (i + 4 < string.length && string[i + 4] == 'e')
            && (i + 5 < string.length && string[i + 5] == 'f')) {
            return true;
        }
    }
    return false;
}
console.log(find_abcdef('sdfsabcdefdffabsasdafsdf'));
