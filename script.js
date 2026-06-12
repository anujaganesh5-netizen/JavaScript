class Student {
constructor(name, age, marks) {
this.name = name;
this.age = age;
this.marks = marks; 
}

displayDetails() {
console.log("Student Details");
console.log("Name :", this.name); 
console.log("Age :", this.age);
console.log("Marks:", this.marks);
}


setAverageMarks() {
let total = 0;

for (let i = 0; i < this.marks.length; i++) {
total += this.marks[i];
}

let average = total / this.marks.length;
console.log("Average Marks :", average);
}6
}

5  

let student1 = new Student("Anuja", 18, [90, 70, 100, 75]);
let student2= new Student("Anu", 18,[90,87,34,67]);


student1.displayDetails();
student1.setAverageMarks();

student2.displayDetails();
student2.setAverageMarks();