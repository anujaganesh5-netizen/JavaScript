// Object and array destructing

// Destructing converting something complex
// into simple variables\

const person = {
  firstName: "James",
  lastName: "Bond",
  age: 32,
  gender: "male"
};

let {firstName: lname} = person


console.log(lname)


let marks = [63, 83, 76, 54, 90]

let [eng, tam, math, sci, social] = marks

console.log(eng, tam, social)

const obj = { a: 1, b: { c: 2 } };
const { a, b:{c:d}} = obj;

console.log(a, d)

let student = {name: "Visalini", 
    address : {streetName: "Pilayar koil st",
        city:"Thirupathur"
    },
    age: 18,
    score: 70
}

let {name, address:{streetName:sName}, age:lage, score} = student

console.log(name, sName, lage, score)