function arrayIntersection(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                console.log(arr1[i]); 
                arr2.splice(j, 1); 
                break; 
            }
        }
    }
}

arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4]); 
