function kmp(source, pattern) {
    //计算table
    let table = new Array(pattern.length).fill(0);
    //abcdabcd
    {
        let i = 1, j = 0;
        while (i < pattern.length) {
            if (pattern[i] == pattern[j]) {
                ++j; ++i;
                table[i] = j;
            } else {
                if (j > 0) {
                    j = table[j]
                } else {
                    ++i;
                }
            }
        }
    }
    console.log(table);
    {
        let i = 0, j = 0;
        while (i < source.length) {
            if (pattern[j] == source[i]) {
                ++i; ++j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }
            if (j === pattern.length) {
                return true
            }
        }
        return false;
    }
    //匹配
}
// kmp('aabaaac', 'aabaaac')
// kmp('', 'abcdabce')
console.log('test');
console.log( kmp('aabaaac', 'aabaaac'));
console.log(kmp('hello', 'll'));