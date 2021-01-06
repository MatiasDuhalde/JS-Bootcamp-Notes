/*
ARRAYS
- declared like in Python (brackets)
- also can be declared with new Array(1,2,3,4,...)
- arrays ARE mutable (unlike strings)
ARRAY METHODS
- array.length()
- array.push(newValue) also returns the new length of the array
- array.pop() also returns the popped object
- array.unshift(newValue) adds to start
- array.shift() removes from start
- array.concat() merge two or more arrays (returns new copy)
- array.includes(value, [searchFrom]) returns true if value in array
- array.indexOf(value, [searchFrom]) returns index of first occurrence of value
- array.join(string) turns an array intro an string with the argument as sep
- array.reverse() reverses array in-place
- array.slice(a, b) similar to a string slice. Negative numbers count from end
- array.splice(n, k, object) removes k elements from nth element in-place, and
                             inserts object in the nth position
- array.sort(func) sorts array in-place according to func (default is alph.)
*/

/*
Referencing works similarly to Python.
Primitive types get copied when cross referencing, but for complex
types (arrays for example), only the address is copied.
When defining array variables, const is often used. It allows to mutate arrays,
but not changing the pointer (address).
*/