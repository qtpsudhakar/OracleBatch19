type demo = { //custome type
    name:string,
    age:number
};

let x:demo = {
    name:"selenium",
    age:15
};

let user:"sudhakar"|"selenium"|"js"; //literal type

user = "selenium";
console.log(user);

user = "sudhakar";
console.log(user);

// user = "webdriver"; //error
// user= "js";


