function CreateTool(name,version,languages) {
    
    this.name = name;
    this.version = version;
    this.languages = languages;

    this.start= ()=> {
        console.log(this.name+" is started");
    }
    this.stop= function() {
        console.log(this.name+" is stopped");
    }
}

let tool1 = new CreateTool("selenium",4,["java","c#","javascript","python","ruby"]);
let tool2 = new CreateTool("playwright",1,["java","c#","javascript","python"]);

tool1.start()
tool2.start()

tool1.stop()
tool2.stop()

CreateTool.prototype.type = "opensource" //can be assigned with values using prototype
console.log(tool1.type);
console.log(tool2.type);//???

console.log(CreateTool.prototype);

let data = [10,20,30,40];
Array.prototype.print=function(){
    console.log(this);
}
data.print()

