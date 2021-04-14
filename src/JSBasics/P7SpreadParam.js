function demoadd(x,y) {
    console.log(x+y);
}

let data = [10,20];

demoadd(10,20);
demoadd(data[0],data[1]);
demoadd(...data) //spread 