function compressString(str) {

    let compressedStr = '';
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++; 
        } else {
            compressedStr += str[i - 1] + count;
            count = 1; 
        }
    }
    compressedStr += str[str.length - 1] + count;

    return compressedStr;
}

console.log(compressString("aabcccccaaa"));
