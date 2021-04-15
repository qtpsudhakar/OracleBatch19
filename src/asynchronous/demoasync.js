
function waitForTime(mSec) {

    return new Promise(function (resolved,rejected) {
    
        setTimeout(() => {
            console.log("executing after "+mSec+" milli seconds");
            resolved("sample error");
        }, mSec);
    });
    
}

// waitForTime(2000).then(function () {
//     console.log("promise success");
//     waitForTime(4000).then(function () {
//         console.log("executing after 4 seconds");
//     });
// }).catch(function (msg) {
//     console.log(msg);
//     console.log("promise failed");
// });

//iif  (function(){})();

async function execute1() {
    await waitForTime(2000);
    await waitForTime(3000);
}

async function execute2() {
    await waitForTime(2000);
    await waitForTime(3000);
}

(async function () {

    await waitForTime(2000);
    // await waitForTime(3000);
    // await waitForTime(5000);

    await Promise.all([
        waitForTime(3000),
        waitForTime(4000),
    ]);
    // await execute1();
    // await execute2();
})().catch(()=>{

});