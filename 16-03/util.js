// math.js
// TODO: Add divide and power functions. 

export function add(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}

export function multiply(a, b) {
    return a * b;
}
export function divide(a,b){
    return a /b
}
export function power(a,b){
    return a ** b
}

// exercise toCamelCase(s) in util.js
// if it takes any name 
// jEeva, Jeeva
// kaviArasan, Kaviarasan

export function toCamelCase(name){
    let res=""
   for (let i=0; i < name.length;i++){
    if (i===0){
        res+=name[i].toUpperCase()
    }
    else{
        res+=name[i].toLowerCase()
    }
   }
   return res
}