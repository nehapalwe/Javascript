function removeDuplicates(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

const input1 = "abbaca";
console.log(removeDuplicates(input1)); 

const input2 = "azxxzy";
console.log(removeDuplicates(input2));
