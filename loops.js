/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
var s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) > -1) {
            console.log(s[i]);
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (vowels.indexOf(s[j]) < 0) {
            console.log(s[j]);
        }
    }
}



// for of method

function vowelsAndConsonants1(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (const cur of s) {
        if (vowels.indexOf(cur) > -1) {
            console.log(cur);
        }
    }

    for (const cur of s) {
        if (vowels.indexOf(cur) < 0) {
            console.log(cur);
        }
    }
}



vowelsAndConsonants1(s);