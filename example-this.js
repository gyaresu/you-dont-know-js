function identify() {
    // console.log(this);
    return this.name.toUpperCase();
}

function speak() {
    // console.log('This is this: ', this);
    var greeting = "Hello, I'm " + identify.call( this );
    // console.log( greeting );
}

var me = {
    name: "Kyle",
    age: 30
};

var you = {
    name: "Reader",
    age: 100
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER
