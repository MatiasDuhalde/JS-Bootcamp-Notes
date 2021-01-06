// Function console.log(a) prints the argument in the console
console.log("Hello World!");

/*
COMPARISONS
- Operators correspond to Python
- equal to (==), lesser than (<), etc...
- JS uses another comparison operator, triple equals (===) and related
- double equals does not take type into account
- Example: "23" ==  23 -> true
           "23" === 23 -> false
- It is a common practice to always use triple equals
- For not equals, JS has the operator != and !==
*/

/*
CONDITIONAL STATEMENTS
JS uses if statements, which look like this

if (condition) {
    do_this()
}

*/

// Example 1
let one = 1;
if (one === 1) {
    console.log("It's True!");
}

// Example 2
let rating = 3;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!")
}

// Example 3
let num = 37;

if (num % 2 !== 0) {
    console.log("ODD NUMBER!");
}


// JS also has else and else if statements

// Example 1
rating = 1

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
else {
    console.log("WTF!")
}

// Example 2
let highScore = 1430;
let userScore = 1200;
if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}


/*
LOGICAL OPERATORS
- !  NOT
- && AND
- || OR
The precedence follows the previous order. Parenthesis are allowed.
*/

/*
SWITCH STATEMENT
Unlike Python, JS does have switch statements. Yay!
Once a condition is met, all the cases below that are gonna run, unless the 
break statement is added (used to exit scopes).
*/

// Example
let day = 1;

switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    default:
        console.log("Some other day");
}

// You can do stuff like
let number = 23;

switch (number) {
    case 43:
    case 23:
        console.log("Number 43 or 23");
        break;
    default:
        console.log("Some other number");
}

/*
TERNARY OPERATOR
usage: condition ? expIfTrue: expIfFalse
*/
// Example
let myNumber = 7;
myNumber === 7 ? console.log('lucky!'): console.log('unlucky!')
