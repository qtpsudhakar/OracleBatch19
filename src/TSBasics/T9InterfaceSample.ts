type userTemplate = {
    name: string
}

interface userData{
    name:string,
    age:number,
    sal?:number
}

CreateUser({name:"selenium",age:16});

function CreateUser(ud:userData) {
    console.log(ud);    
}


interface userActions{
    dance():void;
}
let user1:userData={
    name:"sudhakar",
    age:36
}

class User implements userData, userActions{
    dance(): void {
        console.log(this.name+" is dancing");        
    }
    age: number
    sal?: number
    name: string
}