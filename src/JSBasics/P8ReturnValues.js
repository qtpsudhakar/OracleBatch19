//write a function to return odd numbers between 10 and 30
function getOddNumbers(rStart,rEnd) {
    let arr=[];

    for(let n=rStart;n<rEnd;n++){
        if (n%2==1) {
            arr.push(n);
        }
    }

    return arr;
}

let odd = getOddNumbers(10,30)
console.log(odd);

function isOdd(n) {
    if (n%2==1) {
        return true
    }else{
        return false
    }
}