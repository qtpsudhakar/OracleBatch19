// var variables are hoisted
// var variables can be redeclared
// var variables are not block scopped in loops
// let cannot be redeclared, is block scopped

console.log(x); //no error because it is declared using var
var x = 10;
// console.log(y); //throws error
let y = 20;

var x = 100; //no error because it is declared using var
// let y= 200; //error

for(let i=1;i<=10;i++){
    console.log(i);
}

//console.log(i); //error

for(var j=1;j<=10;j++){
    console.log(j);
}

console.log(j); //no error because it is declared with var

function demo(){
    let f1 = 100;
    var f2 = 200;
    f3 = 300; //created as global variable
}

demo()
// console.log(f1); //block scope
// console.log(f2); //block scope
console.log(f3);
