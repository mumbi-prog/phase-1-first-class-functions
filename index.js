//Task1 
function receivesAFunction(functionToBeReceived){
    functionToBeReceived();
}

//Task2
function returnsANamedFunction() {
    let myFunction = function() { };
    return myFunction;
}

//Task3
const returnsAnAnonymousFunction = () => {
    return function(){ };
}
