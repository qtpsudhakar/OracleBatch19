console.log("start");

setTimeout(() => {
    console.log("executing after 3 seconds");
}, 3000);

console.log("after 3 seconds");

setTimeout(() => {
    console.log("executing after 2 seconds");
}, 2000);

console.log("after 2 seconds");