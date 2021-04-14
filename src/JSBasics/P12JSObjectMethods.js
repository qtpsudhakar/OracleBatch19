
let tool = {
    name:"selenium",
    version:4,
    languages:["java","c#","javascript","python","ruby"],
    start:function () {
        console.log(this.name+" is started");
    },
    stop:function () {
        console.log(this.name+" is stopped");
    }
}

tool.start()
tool.stop()

tool.type = "automation";

console.log(tool["type"]);