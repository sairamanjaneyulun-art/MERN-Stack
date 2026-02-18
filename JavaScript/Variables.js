/*
Variables = Data Containers
JavaScript variables are containers for data.

JavaScript variables can be declared in 4 ways:

Modern JavaScript:                    Older JavaScript:
Using 'let'                           Using 'var' (Not Recommended)
Using 'const'                         Automatically (Not Recommended)
*/

/*
JavaScript Identifiers
Variables are identified with unique names called identifiers.

Names can be short like x, y, z.

Names can be descriptive age, sum, carName.

The rules for constructing names (identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter, a $ sign or an underscore (_).
Names are case sensitive (X is different from x).
Reserved words (JavaScript keywords) cannot be used as names.
*/

// Example using 'let' keyword.
// JavaScript treats underscore(_) as a letter.

let _fName = 'Sourya Rama Asura'
let _age = 21

document.writeln("<b>JavaScript treats underscore(_) as a letter.</b><br>")
document.writeln(_fName + " & " + _age)
// A convention among professional programmers is to start a name with underscore for "private" variables.

// Example using 'const' keyword.
// JavaScript treats Dollor sign($) as a letter.

const $fName = 'Sourya Rama Asura'
const $age = 21

document.writeln('<br><br>')
document.writeln("<b>JavaScript treats Dollor sign($) as a letter.</b><br>")
document.writeln($fName + " & " + $age)
// Using the $ is not very common in JavaScript, but professional programmers often use it as an alias for the main function in JavaScript libraries.

/*
Declaring JavaScript Variables

Creating a Variable in JavaScript is called Declaring a Variable.

You declare a JavaScript variable with the 'let' & 'const' keywords
*/

// Declaring a variables using 'let' keyword
let carName = 'BMW'

document.writeln('<br><br>')
document.writeln("<b>Declaring a variables using 'let' keyword.</b><br>")
document.writeln(carName)

// Declaring a variables using 'const' keyword
// Always use const if the value should not be changed

const num1 = 4
const num2 = 6
let sum = num1 + num2

document.writeln('<br><br>')
document.writeln("<b>Declaring a variables using 'const' keyword.</b><br>")
document.writeln(sum)
/*
The two variables num1 and num2 are declared with the 'const' keyword.

The values of num1 and num2 cannot be changed.

The variable sum is declared with the 'let' keyword.

The value of sum can be changed.
*/

/*
When to Use var, let, or const?
1. Always declare variables

2. Always use 'const' if the value should not be changed

3. Always use 'const' if the type should not be changed (Arrays and Objects)

4. Only use 'let' if you cannot use 'const'

5. Never use 'var' if you can use 'let' or 'const'.
*/

/*
JavaScript Data Types
JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.

Strings are text written inside quotes.

Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.
*/
const pi = 3.14;
let person = 'Sourya Rama Asura';
let answer = "Yes, I am!";
let numLikeString = "100" + 100;

document.writeln('<br><br>')
document.writeln("<b>JavaScript Data Types</b><br>")
document.writeln(typeof(pi)+ ": " + pi + "<br>" +
                typeof(person) +": " + person + "<br>" +
                typeof(answer) +": " + answer + "<br>" + typeof(numLikeString) + ": " + numLikeString);

/*
One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with 'let' or 'const' and separate the variables by comma:
*/
let _name = 'Sourya Rama Asura', _carName = 'BMW M4', _price = '10L';

document.writeln('<br><br>')
document.writeln('<b>One Statement, Many Variables</b><br>')
document.writeln('The Owner of ' + _carName + ' is ' + _name + " & It's cost is " + _price)

// A declaration can span multiple lines:
let $name = 'N Sai Ramanjaneyulu',
$carName = 'Audi A4',
$price = '8L';

document.writeln('<br><br>')
document.writeln('<b>One Statement, Many Variables. A declaration can span multiple lines:</b><br>')
document.writeln('The Owner of ' + $carName + ' is ' + $name + " & It's cost is " + $price)

// JavaScript Operators
/*
In JavaScript, the equal sign (=) is an assignment operator, not an equal to operator.

This is different from algebra. The following does not make sense in algebra:
*/
{
    let x = 10;

    document.write('<br><br>')
    document.writeln('<b>JavaScript Operators</b><br>')
    document.writeln(x = x + 5)
}

/*
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

Note:
The equal to operator is written like this (==) in JavaScript.
*/

// JavaScript Arithmetic

{
    // As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:
    let x = 5 + 2 + 3;
    
    document.write('<br><br>')
    document.writeln(x);

    // You can also add strings, but strings will be concatenated:
    let fname = "Sourya" + " " + "Rama" + " " + "Asura"

    document.write('<br><br>')
    document.write("Myself " + fname)
}

/*
Note:
If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
*/

/*
JavaScript 'let'
The 'let' keyword was introduced in ES6 (2015)

Variables declared with 'let' have Block Scope
In above Examples, We have written code in a curly brackets{}, It is called block scope

Variables declared with 'let' must be Declared before use

Variables declared with 'let' cannot be Redeclared in the same scope
*/