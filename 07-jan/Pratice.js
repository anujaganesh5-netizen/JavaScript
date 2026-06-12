// 1: Parameter-less Function with No Return Type
// Write a function called greet that takes no parameters and simply logs "Hello, world!" to the console.  
// - Call the function to see the output in the console.
// Hint: This function doesn't need to return anything, just output to the console.

// function greet(){
//     console.log("Hello, world!")
// }
// greet()


// 2: Parameter-less Function with a Return Type
// Create a function named getRandomNumber that takes no parameters and returns a random number between 0 and 1.  
// - Call the function and store the result in a variable, then log that variable to the console.

// Hint: You can use JavaScript's built-in Math.random() function.


// function getRandomNumber() {
//   return Math.random();
// }
// const result = getRandomNumber();
// console.log(result);


// 3: Parameterized Function with No Return Type
// Write a function called displayGreeting that takes a `name` as a parameter and logs a greeting message like "Hello, [name]!" to the console.  
// - Call the function with different names to display personalized greetings.

// Hint: How can you insert the name variable into a string?
function displayGreeting(name){
    res= "Hello," +(name)+ "!";
    console.log(res)
}
displayGreeting("Anuja")





// 6: Function to Check if a Person is an Adult
// Create a function named isAdult that takes age as a parameter and returns true if the age is 18 or older, and false otherwise.  
// - Test the function with different age values to see if it works as expected.

// Hint: Think about how conditionals can help you check the age.

function isAdult(age){
    let isAdult=(age) => age < 18 
}
let a = isAdult(16)
console.log(a)