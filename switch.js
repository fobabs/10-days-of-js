function getLetter(s) {
    let letter;
    // write your code here
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
}

// OR

function getLetter(s) {
    let letter;
    // write your code here
    switch (s.charAt(0)) {
        case ("a" || "e" || "i" || "o" || "u"):
            letter = "A";
            break;
        case ("b" || "c" || "d" || "f" || "g"):
            letter = "B";
            break;
        case ("h" || "j" || "k" || "l" || "m"):
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
}


// ES6 for of / if Method using slice
function getLetter1(s) {
    let letter;
    let sample = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];

    // write your code here
    for (const cur of sample.slice(0, 5)) {
        if (s[0] == cur)
            letter = "A";
    }


    for (const cur of sample.slice(5, 10)) {
        if (s[0] == cur)
            letter = "B";
    }


    for (const cur of sample.slice(10)) {
        if (s[0] == cur)
            letter = "C";
    }

    if (letter == undefined) {
        letter = 'D';
    }

    return letter;

};






// ES6 for of / if Method
function getLetter1(s) {
    let letter;
    let sample

    // write your code here
    sample1 = ['a', 'e', 'i', 'o', 'u'];
    for (const cur of sample) {
        if (s[0] == cur)
            letter = "A";
    }

    sample2 = ['b', 'c', 'd', 'f', 'g'];
    for (const cur of sample2) {
        if (s[0] == cur)
            letter = "B";
    }

    sample3 = ['h', 'j', 'k', 'l', 'm'];
    for (const cur of sample.slice(10)) {
        if (s[0] == cur)
            letter = "C";
    }

    if (letter == undefined) {
        letter = 'D';
    }

    return letter;

};