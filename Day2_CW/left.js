let n = 5;
for (let i = 1; i <= n; i++) {
	let str = "";
	
    for (let j = 1; j <= n-i; j++) {
		str += " ";
	}
    let count = 1; 
	for (let k = n; k >=n-i+1; k--) {
		str = str + count.toString() + " " ;
		count += 1;
	}
	
	console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
	let str = "";
	
    for (let j = 1; j <= n-i; j++) {
		str += " ";
	}
    let count = 1;
	for (let k = n; k >=n-i+1; k--) {
		str = str + count.toString() + " ";
		count += 1;
	}
	
	
	console.log(str);
};