function reverse_String(n){
    str = '';
    for(let i=n.length-1; i>=0; i--){
        str = str + n.charAt(i);
    }
    return str;
}
console.log(reverse_String("Geekster"));
