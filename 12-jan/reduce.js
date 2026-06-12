// Sum
let a=[10,98,46,89];
res=a.reduce((sum,num)=>sum+num,0);
console.log(res)

// product
result=a.reduce((pro,num)=>pro*num,1);
console.log(result)


// maximum
c=a.reduce((max,num)=>max<num &&num||max,a[0]);
console.log(c);
