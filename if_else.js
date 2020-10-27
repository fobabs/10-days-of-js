function getGrade(score) {
  let grade;
  // write your code here
  if (score > 25 && score <= 30)
    grade = 'A';
  else if (score > 20 && score <= 25)
    grade = 'B';
  else if (score > 15 && score <= 20)
    grade = 'C';
  else if (score > 10 && score <= 15)
    grade = 'D';
  else if (score > 5 && score <= 10)
    grade = 'E';
  else {
    grade = 'F';
  }
  return grade;
}


// Switch method

function getGrade2(score) {
  let grade;

   // write your code here
 switch(true) {
  case (score > 25 && score <= 30):
    grade = 'A';
    break;
  case (score > 20 && score <= 25):
    grade = 'B';
    break;
  case (score > 15 && score <= 20):
    grade = 'C';
    break;
  case (score > 10 && score <= 15):
    grade = 'D';
    break;
  case (score > 5 && score <= 10):
    grade = 'E';
    break;
  case (score < 5):
    grade = 'F'
    break;
  }
return grade;

}
 
var p = getGrade2(26);
console.log(p);