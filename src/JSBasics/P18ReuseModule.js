let {x,demomaths} = require('./P17ModuleSample1');
let ms1 = require('./P17ModuleSample1');

console.log(x);
let dm = new demomaths();
console.log(dm.demoadd(2,3));

console.log(ms1.x);
let dm2 = new ms1.demomaths();
console.log(dm2.demomul(2,3));