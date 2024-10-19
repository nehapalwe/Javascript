function rotateArray(arr, k) {

    const n = arr.length;
    k = k % n; 
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotatedArray; 
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
