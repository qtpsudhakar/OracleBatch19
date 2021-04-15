export class Employee {
    private age:number=30; //20-60

    constructor() {
        
    }

    public getAge():number{ //getter
        return this.age;
    }

    public setAge(age:number):void{
        if (age>60) {
            console.log("Employee age must be less than or equal 60");
        }else if (age<20) {
            console.log("Employee age must be greater than or equal 20");
        }else{
            this.age = age;
            console.log("Employee updated:" +this.age);            
        }
    }
}

let emp1 = new Employee();
console.log(emp1.getAge());
emp1.setAge(61);
console.log(emp1.getAge());
emp1.setAge(19);
console.log(emp1.getAge());
emp1.setAge(35);
console.log(emp1.getAge());

