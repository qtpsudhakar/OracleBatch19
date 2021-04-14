let tooldata = {
    name:"selenium",
    version:4,
    languages:["java","c#","javascript","python","ruby"]
}
let allTools = {
    tool1:tooldata
}
console.log(tooldata["name"]);
console.log(tooldata.version);
console.log(tooldata["languages"]);

console.log(allTools.tool1.name);

for (let key in tooldata) {
    console.log(key+":"+tooldata[key]);
}
