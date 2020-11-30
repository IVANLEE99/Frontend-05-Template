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

console.log(find_a('sdfsdffsasdafsdf'));