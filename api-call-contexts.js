function foo(el) {
    console.log( el, this[el] );
}

var obj = {
    first: "awesome",
    second: "wooble",
    third: "ptang"
};

// use `obj` as `this` for `foo(..)` calls
['first', 'second', 'third'].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome