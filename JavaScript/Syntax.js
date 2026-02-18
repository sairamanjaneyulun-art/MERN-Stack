// Syntax Rules
// Syntax are the rules how the programs must be constructed

// How to Declare a Variable:
let x = 11
let y = 10

// How to compute values:
let z = x + y

// How to display output of the value
document.writeln(z)

/*
JavaScript has 2 types of values:
i. Literals (Fixed Values)
ii. Variables (Variable values)
*/


// JavaScript Literals
// The most important syntax rules for literals(Fixed Values) are:
// Numbers are written with or without decimals. Example:
let num1 = 100
let num2 = 100.1001000

document.writeln('<br><br>Numbers are written with or without decimals: ')
document.writeln(num1 + " & " + num2)

// Strings are text, Written with double or single quotes:
let name1 = "N Sai Ramanjaneyulu"
let name2 = 'Sourya Rama Asura'

document.writeln('<br><br>Strings are text, Written with double or single quotes: ')
document.writeln(name1 + " & " + name2)

// JavaScript Keywords
// JavaScript keywords are used to defines the action to be performed
// The 'let' and 'const' keywords create variables:
let age = 21;
const fullName = 'Sourya Rama Asura'

document.writeln('<br><br>')
document.writeln('Myself ' + fullName + " & I'm " + age + ' years old')

// JavaScript keywords are Case-sensitive
// JavaScript Script Does not interpret 'LET' & 'Let' as the keyword 'let'.
// JavaScript Identifiers are case sensitive
// The Variables 'fullName' & 'FullName', are different variables

// Small Examples of JavaScript Operators
// JavaScript Assignment Operators (=) is used assign the values to variables
{
    let x = 6
    let y = 5

    let z = x + y
    document.writeln('<br><br>')
    document.writeln(z)
}

// JavaScript Arithmetic Operators (+, -, *, /) to compute values
document.writeln('<br><br>')
document.writeln(33 + 54)

// JavaScript Expressions
// An Expression is a combination of Values, Variables, & Operators
{
    document.writeln('<br><br>')
    document.writeln((4 * 3) - 5) // evaluates to 7

    let x = 3
    document.writeln(x - 5) // Expression can also contain variables

    document.writeln('Sourya' + ' ' + 'Rama' + ' ' + 'Asura') // Evaluates to Sourya Rama Asura
}

/*
JavaScript Keyword
Keyword	              Description

var	                  Declares a variable
let	                  Declares a block variable
const	              Declares a block constant
if	                  Marks a block of statements to be executed on a condition
switch	              Marks a block of statements to be executed in different cases
for	                  Marks a block of statements to be executed in a loop
function	          Declares a function
return	              Exits a function
try	                  Implements error handling to a block of statements
*/