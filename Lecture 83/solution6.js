/*
The Vowel Counter:
   You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/

const countVow = (str) => {
    let count = 0;
    let temp = str.toLowerCase();
    for (const ch of temp) {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVow("BhavyaAA"));