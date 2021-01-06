// This is a comment

console.log("This is not a comment.");

/* 
This is a big comment
*/

/*
PRIMITIVE TYPES
- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- Big Int
*/

/*
let declares into local scope
var defines into global scope
const defines a constant (can't be changed once set)

var is generally outdated, it still works, but does not comply with ES2020

Variables CAN change type (unlike C), although is not recommended to do so.
TypeScript strictly forbids this.

doing
a = 23;
is the same as
var a = 23;
*/

let someName = 23;
someName

/*
NUMBERS
- Integer (positive, negative and zero)
- Negative zero does exist (-0)
- Infinity and -Infinity (yielded by something/0)
- NaN is actually a number (yielded by 0/0)
*/

/*
BOOLEANS
- true (value of 1, or any other non-zero value)
- false (value of 0)
*/

/*
STRINGS
- Can be delimited by single quotes ('') or double quotes("")
- However, they can't be mixed
- Consistency is adviced throughout a project
- Strings are indexed, starting from 0 through string.length - 1
- Strings are immutable, something like string[2] = "x" is not possible

BUILT-IN METHODS
*methods are called like this: object.method(arguments)*
- length
- toUpperCase
- toLowerCase
- trim, equivalent to Python's strip method
- indexOf(index)
- slice(a, b), similar to Python string[a:b] slicing
- replace(match, newString), only replaces first occurrence

ESCAPE SEQUENCES
- Similar to Python's
- most important ones:
    - "\" -> \\
    - newline -> \n
    - tab -> \t

TEMPLATE LITERALS
- Delimited by backticks (``)
- Useful to insert expressions inside a string without concatenating
- Similar to Python's f strings
*/

// Template Literals examples
let firstName = "Trace";
let pricePerItem = 23;
`I have ${2+3} pets at home`;
`My friends call me ${firstName}`;
`You bought 5 items. Your total is $${5*pricePerItem}`;

/*
NULL
- Primitive type
- must be asigned
- Represents the absence of any value
*/
null;

/*
UNDEFINED
- Primitive type
- It indicates a variable doesn't have an assigned value
*/
undefined;

/*
Math object
- Comparable to Python's math module
- Contains useful methods and constants
- Examples
    - Math.PI
    - Math.E
    - Math.abs(n)
    - Math.round(n)
    - Math.pow(a, b)
    - Math.random(), equivalent to Python's random.random
*/
// Example to get a random integer between 1 an 10
Math.floor(Math.random() * 10) + 1;
// You can also use Math.ceil and skip the "+ 1"

/* 
TYPEOF OPERATOR
- It might be thought of as a function, but it works as a unary operator
- Similar output to Python's type() built-in function

PARSEINT
- Turns a string into an integer number
- usage: parseInt(string)

PARSEFLOAT
- Turns a string into an floating point number
- usage: parseFloat(string)
*/
// Examples
parseInt("23"); // 23
parseInt("33.5"); // 33
parseFloat("0.1223"); // 0.1223
parseFloat("2.3somethingsomething"); // 2.3
parseInt("$2"); // NaN
