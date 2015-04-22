function foo() {    // Function definition doesn't create a `this`
    var bob = 7;
    console.log(
        this.bob,   // => 2       Implicit binding means `this.bob` is the `bob` from within `obj`
        bob,        // => 7       `bob` is only local to foo
        this.thing  // => 'stuff' Again, foo is called in obj giving it access to local `thing`
    );
}

var obj = {
    bob: 2,
    thing: 'stuff',
    foo: foo        // This is where obj.foo() gets called from and `this` is bound
};

obj.foo(); // 2 7 'stuff'