function findPairWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == targetSum) {
                return [arr[i], arr[j]]; 
            }
        }
    }
    return null; 
}

console.log(findPairWithSum([1, 2, 3, 4, 5], 6)); 
