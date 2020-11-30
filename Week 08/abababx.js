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
    if (c === 'a') {
        return foundA2;
    } {
        return start(c);
    }
}
function foundA2(c) {
    if (c === 'b') {
        return foundB2;
    } else {
        return foundB(c);
    }
}
function foundB2(c) {
    if (c === 'a') {
        return foundA3;
    } else {
        return foundA(c);
    }
}
function foundA3(c) {
    if (c === 'b') {
        return foundB3;
    } else {
        return foundB2(c);
    }
}

function foundB3(c) {
    if (c === 'x') {
        return end;
    } else {
        return foundB2(c);
    }
}

// 作业：使用状态机完成”abababx”的处理。

console.log(match('youngs ababababxbabx'));
console.log(match('youngs abababx'));

// console.log(match('youngs abcdabcdefg'));