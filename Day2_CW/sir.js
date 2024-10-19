let n=5;
//upper traingle
for(let i=0; i<n; i++){
    let str='';
    //space
    for(let j=0; j<n-i-1; j++){
        str += ' ';
    }
    //number
    for(let j=0; j<=i; j++){
        str += j+1+' ';
    }

    console.log(str);

}

for(let i=0; i<n-1; i++){
    let str='';
    //space
    for(let j=0; j<=i; j++){
        str += ' ';
    }
    //number
    for(let j=0; j<n-i-1; j++){
        str += j+1+' ';
    }

    console.log(str);

}

