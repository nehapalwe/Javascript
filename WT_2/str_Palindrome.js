function isPalindrome(str) {

    let normalizedStr = '';
    let sortedStr = str.toLowerCase(); 

    for (let i = 0; i < sortedStr.length; i++) {
        const word = sortedStr.charAt(i); 
        if ((word >= 'a' && word <= 'z') || (word >= '0' && word <= '9')) {
            normalizedStr += word; 
        }
    }

    let left = 0; 
    let right = normalizedStr.length - 1; 

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false; 
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car")); 
console.log(isPalindrome("No 'x' in Nixon")); 
