//print hello for 5 times

//let i=1 : initialization
// i<=5 ; condition
// i++ : incrementation

for(let i=1;i<=5;i++){
    console.log("hello");
}
//print values from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
}

//print values from 10 to 1
for(let i=10;i>=1;i--){
    console.log(i);
}

//print odd numbers between 10 and 30
for(let i=11;i<=30;i+=2){
    console.log(i);
}

for(let i=10;i<=30;i++){
    if(i%2==1)console.log(i);
}

//print data of an array
let data = [10,20,30];

for(let i=0;i<data.length;i++){
    console.log(data[i]);
}

//extended for loop
for (let v of data) {
    console.log(v);
}

//for in loop : designed js objects

let msgExist = false;
while(!msgExist){

    console.log("message is not displayed");

    msgExist = true
}
//while executes block zero or more times until condition fail
//while executes block one or more times until condition fail

do{
    console.log("message is not displayed");
}while(!msgExist)