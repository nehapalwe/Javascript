let n = 5;
for (let i = 1; i <= n; i++) {
	let str = "";
	let count = 1; 
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
	let str = "";
	let count = 1;
	
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
};
