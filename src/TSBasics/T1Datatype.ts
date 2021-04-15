let x:number=10;
let y=20;
let z:number=x+y;
console.log(z);

let a: number;
// a="100"; // error

//number, string, boolean, undefined, null
// let variable:typename=value;

//union type
let id:number|string = "abcd";
console.log(id);
id = 1234
console.log(id);

// any
let data:any = "hello";
console.log((data as string).length);
console.log((<string>data).length);

//declaring multiple variables

let [b,c] = [10,20];
[b,c] = [c,b];


export{}
