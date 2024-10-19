function lengthOfLongestSubstring(s) {

    let maxLength = 0; 
    for (let i = 0; i < s.length; i++) {
        let currentSubstring = ''; 
        for (let j = i; j < s.length; j++) {
            const currentChar = s[j];
            if (currentSubstring.includes(currentChar)) {
                break;
            }
            currentSubstring += currentChar;
            maxLength = Math.max(maxLength, currentSubstring.length);
        }
    }
    return maxLength; 
}
console.log(lengthOfLongestSubstring("pwwkew"));   
console.log(lengthOfLongestSubstring(""));         
