function foo() {
    console.log( this.a );
}

var a = 2;

console.log(foo()); // 2