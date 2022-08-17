function receivesAFunction(get) {
    return get();
}; 
function get() {
        console.log("anything");
        return "anything";
    };
 
function returnsANamedFunction(anything) {
     return ( function anything() {
        return ("stuff")
     });
    };
function returnsAnAnonymousFunction() {
    return function() {
        return ("whatever")
    }
}    
