class Google {
    
    search(){
        console.log("Searching in google");        
    }
    
}
class Alphabet {
    
}
class Gmail extends Google{
    search(keyword?:string){ //over riding and over loading
        if (keyword==undefined) {
            super.search()
        }else{
            console.log("Searching in gmail using keyword:"+keyword);
        }        
    }
}

let gm1:Gmail = new Gmail();
gm1.search();
gm1.search("selenium");
