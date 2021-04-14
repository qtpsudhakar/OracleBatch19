let x =100;

function demomaths() {
    this.demoadd = function (x,y) {
        return x+y;
    }
    this.demomul = function (x,y) {
        return x*y;
    }
}

module.exports = {x,demomaths}