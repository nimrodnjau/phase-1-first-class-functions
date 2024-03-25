function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(){
    return function sport() {
        console.log("I like Football!")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I hate going to the field!")
    }
}