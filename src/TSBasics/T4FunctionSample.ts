
function DemoAdd(x:number,y:number,z:number=10,d?:number):number {
    
    //z : default parameter
    //d : optional parameter

    if(d==undefined){
        return x+y+z;
    }else{
        return x+y+z+d
    }
}

console.log(DemoAdd(2,3));
console.log(DemoAdd(2,3,4));
console.log(DemoAdd(2,3,4,5));
console.log(DemoAdd(2,3,undefined,5));

