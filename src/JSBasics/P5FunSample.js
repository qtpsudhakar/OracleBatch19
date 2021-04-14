function demo() {
    console.log("demo called");
}

demo()

function demoAdd(x,y) {
    console.log(x+y);
}

demoAdd(10,20)
demoAdd(10,20,30,40)
demoAdd()

function demoMul(x,y) {
    return x*y;
}

let r = demoMul(10,20);
console.log(r);