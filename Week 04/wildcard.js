function find(source, pattern) {
    let startCount = 0;
    //找有多少个*
    for (let i = 0; i < pattern.length; i++) {
        const s = pattern[i];
        if (s === '*') {
            startCount++;
        }
    }
    //如果没有* 的处理
    if (startCount === 0) {
        for (let i = 0; i < pattern.length; i++) {
            const s = pattern[i];
            const ss = source[i];
            if (s !== ss && s !== '?') {
                return false;
            }
        }
    }

    let i = 0;
    let lastIndex = 0;
    for (i = 0; pattern[i] !== '*'; i++) {
        const p = pattern[i];
        if (p !== source[i] && pattern[i] !== '?') {
            return false;
        }
    }
    lastIndex = i;

    for (let p = 0; p < startCount - 1; p++) {
        i++;
        let subPattern = '';
        while (pattern[i] !== "*") {
            subPattern += pattern[i];
            i++;
        }
        let reg = new RegExp(subPattern.replace(/\?/g, '[\\s\\S]', 'g'));
        reg.lastIndex = lastIndex;
        let result = reg.exec(source);
        console.log(result);
        if (!result) {
            return false;
        }
        lastIndex = reg.lastIndex;
    }

    //最后一个*
    for (let j = 0; j < source.length - lastIndex && pattern[pattern.length - j] != '*'; j++) {
        if (pattern[pattern.length - j] !== source[source.length - j]) {
            return false;
        }

    }
    return true;
}
let result = find('abcabcabxaac', 'a*b*bx*c')
console.log(result);
let result2 = find('abcabcabxaac', 'a*b*b?x*c')
console.log(result2);
