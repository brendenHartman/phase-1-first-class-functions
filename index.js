function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction() {
    return function doThings() {};
}

function returnsAnAnonymousFunction() {
    return function () {console.log("HI")};
}