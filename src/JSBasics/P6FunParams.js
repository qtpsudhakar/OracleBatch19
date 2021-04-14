function demoadd(a,b) {
    console.log(a+b);
}

function demoadd(a,b,c) { //this definition will override existing
    console.log(a+b+c);
}


demoadd(2,3) //nan
demoadd(2,3,4) //9

function demoaddall(...numbers) { //rest parameter
    console.log(numbers);
}

demoaddall(1,20,30,40,50,[10,20,30],6,7,8)