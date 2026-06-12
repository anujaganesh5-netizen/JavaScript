// grade function

// nameed function
function get_grade(mark) {

// anonymous function 
// let get_grade = (mark) => {

  // negative invalid
  if (mark < 0) {
    return "Invalid Input";
  }

  // if marks is  90 or above
  else if (mark >= 90) {
    // grade A
    return "A";
  }

  // if marks above 80 and below 90 
  else if (mark >= 80 && mark < 90) {
    // grade B
    return "B";
  }

  // if marks betweeen 70 and 80 
  else if (mark >= 70 && mark < 80) {
    // grade C
    return "C";
  }

  // if marks between 60 and 70
  else if (mark >= 60 && mark < 70) {
    // grade D
    return "D";
  }
  // grade E 50 and60
  else if (mark >= 50 && mark < 60) {
    // grade E
    return "E";
  } else {
    return "F";
  }
}

let grade = get_grade(67);
console.log(grade);








