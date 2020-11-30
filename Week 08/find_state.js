function match(string) {
    let state = start;
    for (const c of string) {
        state = state(c)
    }
    return state === end;

}
function start(c) {
    if (c === 'a') {
        return foundA;
    } else {
        return start;
    }
}
function end(c) {
    return end;
}

function foundA(c) {
    if (c === 'b') {
        return foundB;
    } else {
        return start(c);
    }
}
function foundB(c) {
    if (c === 'c') {
        return foundC;
    }{
        return start(c);
    }
}
function foundB2(c) {
 if (c === 'x') {
        return end;
    } {
        return foundB(c);
    }
}
function foundC(c) {
    if (c === 'a') {
        return foundA2;
    } else {
        return start(c);
    }
}
function foundA2(c) {
    if (c === 'b') {
        return foundB2;
    } else {
        return start(c);
    }
}
// function foundD(c) {
//     if (c === 'e') {
//         return end;
//     } else {
//         return start(c);
//     }
// }

// 用状态机实现：字符串“abcabx”的解析

console.log(match('youngs abcdfdfabcabx'));

// console.log(match('youngs abcdabcdefg'));