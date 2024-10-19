function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 == sortedStr2;
}

if (areAnagrams("Listen", "Silent")) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
