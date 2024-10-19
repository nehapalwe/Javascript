function reorganizeString(s) {
    const freq = new Array(26).fill(0);
    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const maxFreq = Math.max(...freq);
    if (maxFreq > Math.ceil(s.length / 2)) {
        return ""; 
    }

    let result = [];
    let index = 0;
    while (index < s.length) {
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0 && index < s.length) {
                result[index] = String.fromCharCode(i + 'a'.charCodeAt(0));
                index++;
                freq[i]--; 
            }
        }
    }
    return result.join('');
}

console.log(reorganizeString("aab"));  
console.log(reorganizeString("aaab"));  
