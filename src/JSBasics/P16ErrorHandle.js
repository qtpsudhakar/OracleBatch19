// ReferenceError
// SyntaxError
// TypeError
// URIError

try{
    // console.log(x); //ReferenceError
    let x = 10
    console.log(x.toLowerCase()); //type error
    // console.log(x.toFixed(200)); //RangeError

}catch(e){
    console.log(e.message);
    console.log(e.constructor.name);
    if (e instanceof TypeError) {
        console.log("Failed because type error");
    }
    throw e;
}finally{
    console.log("this is a post condition for try block");
}

console.log("this is end of program");