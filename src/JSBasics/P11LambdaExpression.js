//Fat Arrow Functions =>

// short form for anonymous function: ()=>{}
// () is optional for defining single parameter function
// {} is optional for defining single statement function
// for single statement don't use return statement
// whatever that statement returns will become default return value

// ()=>{}
let demoadd = (a,b)=>a+b;

// let demoadd = function (a,b) {
//     return a+b;
// }

let data = [10,20,30];
data.forEach(v =>console.log(v));


function calculator(x,y,act) { //call back
    return act(x,y);
}

console.log(calculator(10,20, (a,b)=> a+b));

console.log(calculator(10,20, (a,b)=> a*b));
