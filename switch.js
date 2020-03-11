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

function getLeter(s) {
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