function receivesAFunction(Jenn) {
    Jenn();

}

function returnsANamedFunction() {
    return function jenn() {
    console.log('before all');
    };
}

function returnsAnAnonymousFunction(){
    return () =>
        console.log("before all");
    };

