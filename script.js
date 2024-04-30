function inputGrade(exameNumber){
  let grade = prompt("Please Enter Grade For Exam " + exameNumber + ":");
  return Number(grade);
}

let grades = [];

//Input exam grades and then return the number that is entered by the user.
grades.push(inputGrade(1)); 
grades.push(inputGrade(2));
grades.push(inputGrade(3));
grades.push(inputGrade(4));

// Drop the lowest grade.
grades.sort(function(a,b){
  return a-b;
});
let finalGrades = grades.slice(1);
let average = (finalGrades[0] + finalGrades[1] + finalGrades[2]) / 3;
//console.log(finalGrades);
alert("The final grade is " + average);