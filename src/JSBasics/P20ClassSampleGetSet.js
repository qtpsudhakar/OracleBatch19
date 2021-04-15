class Employee {
     #age=30; //20-60 //# represent private member
     
     get Age(){ //getter
        return this.#age;
    }

     set Age(age){
        if (age>60) {
            console.log("Employee age must be less than or equal 60");
        }else if (age<20) {
            console.log("Employee age must be greater than or equal 20");
        }else{
            this.#age = age;
            console.log("Employee updated:" +this.#age);            
        }
    }
}

let emp1 = new Employee();
console.log(emp1.Age);
emp1.Age=61;
console.log(emp1.Age);
emp1.Age=19;
console.log(emp1.Age);
emp1.Age=35;
console.log(emp1.Age);

