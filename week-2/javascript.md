# Javascript

## Why study Javascript? 
For me, It is a progamming language for web development. Anyone who wants to become a web developer starts with it and I am no exception ^_^.

For technique, **JS** to program the behavior of web pages.

## Core Javascript Fundamentals.

### Syntax and Basics.

Variables(**let, const, var**)
- JS variables can be declared in 4 ways:
  - Automaticlly.
  - Using **var**
  - Using **let**
  - Using **const**
- Example:
```js
x = 5 // Automaticlly
var y = 6 // Using var
let z = 7 // Using let
const t = 8 // Using const
```
- When to use **var, const, let**?
    1. Always declare variables.
    2. Always use **const** if they value should not be changed.
    3. Always use **const** if the type should not be changed (Arrays or Objects)
    4. Only use **let** if you can't use **const**.
    5. Only use **var** if you MUST support older browsers.
- The general rules for constructing names for variables(unique identifiers) are:
  - Names can contain letters, digits, underscores, and dollar signs.
  - Names must begin with a letter.
  - Name can also begin with $ and _.
  - Names are case sensitve (y ane Y are different variables).  
  - Reserved words (like JS keywords) cannot be used as usual.


Data types:
- Javascripts has eight Datatypes:
  - String
  - Number
  - Bigint
  - Boolean
  - Undefined
  - Null
  - Symbol
  - Object
- The Object Datatype 
  - The object data type can contain both built-in objects, and **user defined objects:
  - Built-in objects type can be:
    - objects, array, dates, maps, sets,....
- Javascript Types are Dynamic.
  - Javascript has dynamic types. This means that the same variable can be used to hold different data types:
```js
let x;      // Now is a undefined
x = 5;      // Now is a Number
x = "John"; // Now is a string
```
- JS Arrays
  - JS arrays are written with square brackets('[]')
  - Array items are separated by commans.
```js
const cars = ["Saab", "Volvo", "BMW"];
```
- JS Objects
  - JS objects are written with curly braces {}.
  - Object properties are written as name: value pairs, separated by commans.
```js
const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "Blue"};
```
- The typeof Operator.
  - You can use the JS **typeof** operator to find the type of a javascript variable.

- Empty values has nothing to do with **undefined**.



## References
[w3school.com](https://www.w3schools.com/js/js_syntax.asp)

