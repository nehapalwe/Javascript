function decodeString(s) {
    let stack = [];
    let currentString = "";
    let currentNum = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === "[") {
            stack.push(currentString);
            stack.push(currentNum);
            currentString = "";
            currentNum = 0;
        } else if (char === "]") {
            let num = stack.pop();
            let prevString = stack.pop();

            let tempString = "";
            for (let i = 0; i < num; i++) {
                tempString += currentString;
            }

            currentString = prevString + tempString;
        } else {
            currentString += char;
        }
    }

    return currentString;
}
console.log(decodeString("3[a]2[bc]"));     
console.log(decodeString("3[a2[c]]"));      
console.log(decodeString("2[abc]3[cd]ef")); 
