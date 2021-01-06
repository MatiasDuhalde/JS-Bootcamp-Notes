/*
OBJECTS
Data structures with named properties.
Properties correspond to pairs of information (key : value), similarly to
Python's dictionaries. Keys are unique, values not.
Objects can be nested.
Object equality works like in Python. It compares reference, not data.
*/

// Empty Object:
// {}
Object()

// Example of object definition

const simpleObject = {
    firstProperty   : 23,
    thisIsAKey      : "this is a value",
    myArray         : [1, 2, 3, 4, "five"],
    as4asd          : "sixteen",
    // Next line works, but has problems when invoking the property
    42              : "four and two",
    // Next line won't run
    // 4chan           : "Rule 1",
    // Next line will
    "4chan dot org" : "i like pepe"
};

// Accessing data...
simpleObject.firstProperty;
simpleObject.myArray;
// Next line will raise an error
// simpleObject.42

simpleObject["firstProperty"];
// Next line DOES work unlike previous method
simpleObject["42"];
simpleObject["4chan dot org"];

// ADDING OR MODIFYING PROPERTIES
simpleObject['newProperty'] = "this is another property"
simpleObject.newArray = ["a", "b", "c"]
simpleObject.firstProperty += -58

// To get an arrays of keys
simpleObject.keys()
// To get an arrays of values
simpleObject.values()