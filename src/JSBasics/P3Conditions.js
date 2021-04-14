//find odd number

console.log(10 % 2);
console.log(10 % 2 == 1);

let n = 11
if (n % 2 == 1) {
    console.log(n + " is odd number");
} else {
    console.log(n + " is even number");
}

//find which number is bigger
let x = 20;
let y = 20;
if (x > y) {
    console.log("x is bigger");
} else if (y > x) {
    console.log("y is bigger");
} else {
    console.log("both are equal");
}


let country = "ind";

if (country=="UK") {
    console.log(44);
}else if (country=="US") {
    console.log(1);
}else if (country=="ind") {
    console.log(91);
}else{
    console.log("country not found");
}

let cCode = "ind";
switch (cCode.toLowerCase()) {
    case "uk":
        console.log(44);
        break;
    case "us":
        console.log(1);
        break;
    case "ind":
        console.log(91);
        break;    
    default:
        console.log("country not found");
        break;
}



// + : addition
// - : sub
// * : mul
// / : div
// % : mod
// < : Lessthan
// > : greater
// = : assignment
// == : data comparision
// === : data and type comparision