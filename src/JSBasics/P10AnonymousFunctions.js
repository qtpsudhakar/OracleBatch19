//functions are hoisted
//we can call any where in file
//anonymous function can be called only after creation

//these are created with function expression without having any name
//we use these functions to pass as parameter values

demo()
function demo() {
    console.log("demo called");
}


let dm =function () {
    console.log("anonymous called");
}
dm()

function calculator(x,y,act) { //call back
    act(x,y);
}


calculator(10,20,function (a,b) {
    console.log(a+b);
});

calculator(10,20,function (a,b) {
    console.log(a*b);
});

let data = [10,20,30];
data.forEach(function (v) {
    console.log(v);
});