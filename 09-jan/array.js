// 1. Basic Array Creation  
//    Create an array of 5 numbers and print the array.

myArray=[7,19,14,16,25]
console.log(myArray)


//2.  Accessing Array Elements  
//    Create an array of 4 strings. Print the 2nd and 4th elements.

a=["apple","orange","grapes","mango","pineapple"]
console.log(a[2],a[4])


// 3. Modifying Array Elements  
//    Create an array of 3 elements. Change the 2nd element to "modified" and print the array.

b=["Gum","Tap","Bottle","Pen","Pencil"]
b.splice(2,1, "modified")
console.log(b)


// 4. Array Length  
//    Write a program to print the length of an array containing 7 elements.

c=["apple","orange","grapes","mango","pineapple","Gum","Tap"]
console.log(c.length)


// 5. Iterating with a `for` loop  
//    Write a program that iterates over an array of numbers and prints each element.


d=["apple","orange","grapes","mango","pineapple"]
for(let i=0;i<d.length;i++){
    console.log(d[i])
}

// 6. Summing Array Elements  
//    Write a program to sum all elements of an array of numbers and print the result.
let  k=[20,8,6,50,37,90,69]
sum=0;
results=[]
for(let i=0;i<k.length;i++){
    if (k[i]>0){
        sum+=k[i]
        results.push(sum)
    }
console.log(results)
}     