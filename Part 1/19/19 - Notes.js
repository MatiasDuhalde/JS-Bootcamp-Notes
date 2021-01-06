/*
PROTOTYPES, CLASSES, AND NEW KEYWORD

JS is a prototype-based language. Still, it is completely possible to
do OOP in JS.
We can simply replace prototypes by making factory functions
that return the desired object, without the need of the new keyword.
However, this is not the preferred method, and using prototypes
leaves a code better organized.
Also, seemingly prototypes are more efficient memory-wise
A prototype is some sort of "template" for objects.
When we create an object using the new keyword, we are making
an instance based on the prototype.

*/

// Constructor function
function MyColor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

// Adding methods
MyColor.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`
}

MyColor.prototype.hex = function() {
    const {r, g, b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

MyColor.prototype.rgba = function(a=1.0) {
    const {r, g, b} = this
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

// Creating instances
const myColor1 = new MyColor(40, 50, 60);
const myColor2 = new MyColor(0, 0, 0);


// JS later adopted the class keyword, which just acts as syntactic
// sugar for a prototype definition
// Note the class keyword before the class name
// Also note that the constructor now is explicitly stated

class Color {
    constructor(r, g, b, name="") {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
    rgb() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    hex() {
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    rgba(a=1.0) {
        const {r, g, b} = this
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }
}

const color1 = new Color(255, 67, 89, "tomato")

// INHERITANCE
// Class inheritance is possible in JS using the keywords
// extends and super.

class Pet{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() { 
        return `${this.name} is eating!`
    }
}

class Dog extends Pet {
    bark() {
        return "WOOF!"
    }
}


class Cat extends Pet {
    meow() {
        return "MEOW!"
    }
}

class Rock extends Pet {
    // JS allows overloading
    constructor(name, age, type) {
        super(name, age);
        this.type = type;
    }

    // JS allows overriding
    eat() {
        return "Pet rocks don't need to eat!"
    }
}

