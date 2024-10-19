function printPattern(n) {
  let num = 1;       
  let spaces = 8;    

  for (let i = 1; i <= n; i++) {
      let result = '';

      for (let j = 1; j <= spaces; j++) {
          result += ' ';
      }

      for (let k = 1; k <= (i * 2 - 1); k++) {
          result += num + ' ';
          num++;  
      }

      console.log(result); 

      num = 1;    
      spaces -= 2;  
  }
}

let n = 5;
printPattern(n);
