
function waitForTime(mSec) {

    return new Promise(function (resolved,rejected) {
    
        setTimeout(() => {
            console.log("executing after "+mSec+" milli seconds");
            resolved();
        }, mSec);
    });
    
}

waitForTime(2000).then(function () {
    console.log("promise success");
    waitForTime(4000).then(function () {
        console.log("executing after 4 seconds");
    });
}).catch(function () {
    console.log("promise failed");
});

//iif  (function(){})();


(async function () {
    await waitForTime(2000);
    await waitForTime(3000);
    await waitForTime(5000);
})().catch(()=>{

});