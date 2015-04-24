// {
//     let a = 'I am declared inside an anonymous block';
// }

function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

const obj = {
    a: 2
};

const bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
exports = b; // 5