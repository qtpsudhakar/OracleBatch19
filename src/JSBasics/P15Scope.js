function init(){ //closure

    let x=1;
    return function counter() {
        return x++;
    }
}

let counter1 = init()
let counter2 = init()
console.log(counter1); // counter function
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());