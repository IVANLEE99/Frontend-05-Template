// 将字符串格式化为UTF8编码的字节
// https://www.cnblogs.com/doublenet/p/5616451.html
// Node.js Buffer(缓冲区)
var utf8_encoding = function (str, isGetBytes) {
    var back = [];
    var byteSize = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {
            byteSize += 1;
            back.push(code);
        } else if (0x80 <= code && code <= 0x7ff) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)))
        } else if ((0x800 <= code && code <= 0xd7ff)
            || (0xe000 <= code && code <= 0xffff)) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)))
        }
    }
    for (i = 0; i < back.length; i++) {
        back[i] &= 0xff;
    }
    if (isGetBytes) {
        return back
    }
    if (byteSize <= 0xff) {
        return [0, byteSize].concat(back);
    } else {
        return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
}

// utf8_encoding('中'); // =>  [0, 3, 228, 184, 173]
console.log(utf8_encoding('abc是中国人'));
console.log('----');
// 前两位表示后面utf8字节的长度。因为长度为3，所以前两个字节为`0，3`
// 内容为`228, 184, 173`转成16进制就是`0xE4 0xB8 0xAD`



function utf8_encoding2(str) {
    const buf = Buffer.from(str);
    // console.log(buf)
    console.log(buf.toString());
    return buf;
}
console.log(utf8_encoding2('abc是中国人'));
