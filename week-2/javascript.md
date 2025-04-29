# Javascript

- [Javascript](#javascript)
  - [Why study Javascript?](#why-study-javascript)
  - [Core Javascript Fundamentals.](#core-javascript-fundamentals)
    - [Syntax and Basics.](#syntax-and-basics)
    - [Scope and Closures](#scope-and-closures)
    - [JS Hoisting](#js-hoisting)
    - [JS Data Structures](#js-data-structures)
    - [Error Handling.](#error-handling)
  - [Asynchronous Javascript.](#asynchronous-javascript)
    - [Callbacks:](#callbacks)
    - [Promises](#promises)
    - [](#)
  - [References](#references)


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


JS Operators
- JS operators are used to perform different types of mathematical and logical computations.
- Examples:
  - The **Assignment Operator** = assigns values.
  - The **Addtion Operator** + adds values.
  - The **Multiplication Operator** * multiplies values.
  - The **Comparison Operator** > compares values.
- Types of JS operators.
  - There are different types of javascript operators:
    - Arithmetic Operators.
    ![Arithmetic Operators](./../images/week-2/arithmetic-opterators.png)
    - Assignment Operators.
    ![Assignment Operators](./../images/week-2/assignment-operators.png)
    - Comparison Operators.
    ![Comparison Operators](./../images/week-2/comparison-operators.png)
    - String Operators.
    - Logical Operators.
    ![Logical Operators](./../images/week-2/logical-operators.png)
    - Bitwise Operators.
    ![Bitwise Operators](./../images/week-2/bitwise-operators.png)
    - Ternary Operators.
    - Type Operators.
    ![Type Operators](./../images/week-2/type-operators.png)
  - Adding Strings and Numbers.
    - Adding two numbers, will return the sum as the numbers like 5 + 5 = 10.
    - Adding a number and a string, will return the sum as the concatenated string like 5 + "5" = 55.

JS Control Structures
- JS If Else Swtich.
  - Conditional statements are used to perform different actions based on differents conditions.
  - In JS we have the following conditional statements:
    - Use **if** to specify a block of code to be excuted, if a specified condition is true.
    - Use **else** to specify a block of code to be excuted, if the same condition is false.
    - Use **else if** to specify a new condition to test, if the first condition is false.
    - Use **switch** to specify many alternatives blocks of code to be executed.
  - Example for **if**, **else**:
  ```js
  if (condition) {
    /* code block */
  }
  else if (condition) {
    /* code block */
  }
  else {
    /* code block */
  }
  ```
  - Example for **switch**:
  ```js
  switch (expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      //code block
  }
  ```
  - The **break** keyword:
    - When JS reaches a **break** keyword, it breaks out of the code block.

- JS Loop
  - Loops are handy, if you want to run the same code over and over again, each time with a different value.
  - Different kinds of Loops
    - **for** - loops through a block of code a number of times.
    ```js
    for (let i = 0, i < 1000, i++) {
      // code block
    }
    ```
    - **for/in** - loops through the properties of an object.
    ```js
    for (key in object) {
      // code block
    }
    ```
    - **for/of** - loops through the values of an iterable object. 
    ```js
    for (variables in iterable) {
      // code block
    }
    ```
    - **while** - loops through a block of code while a specified condition a true.
    ```js
    while (condition) {
      // code block
    }
    ```
    - **do/while** - also loops through a block of code while a specified condition is true.
    ```js
    do {
      // code block
    }
    while (condition)
    ```

JS Function 
- JS function syntax:
  - A javascript function is defined with the **function** keyword, followed by a name, followed by parenthese **()**.
  - Function names same rules as variables.
  - Example:
  ```js
  function name (parameter 1, parameter 2, ...) {
    // code block
  }
  ``` 
  - Function Invocation
    - When an event occurs (when a user click a button).
    - when it is invoked (called) from js code.
    - Automatically (self invoked).
  - Functions used as Variable Values.
  - Local variables: variables declared within a javascript function, become **LOCAL** to the function.

### Scope and Closures
- Scope
  - Global scope: variables declared outside any function or block are accessible everywhere.
  - Function scope: variables declared inside a function are only accessible inside that function.
  - Block scope (let, const): Variables exist only within the **{}** block where they are defined. 
  - Automatically global: If you assign a value to a variable that has not been declared, it will automaticlly become a **GLOBAL** variable. 
- Lexical Scope
  - When a function is defined, it remembers the environment where it was created.
  - A function can always access variables from where it was written, not where it was called.
- Closure
  - A closure happens when a function remembers variables from its outer (enclosing) scope even after that outer function has finished executing.
  - Closures are extremely useful: for caching, private variables, event handling, etc...
  - Example:
  ```js
  function createCounter() {
    let count = 0;
    
    return function() {
      count++;
      console.log(count);
    }
  }

  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  ```
### JS Hoisting 
- Javascript declarations are hoisted.
  - In JS, a variable can be declared after it has been used.
  - In other words; a variable can be used before it has been declared.
- Hoistint is Javascript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

### JS Data Structures
- Objects: 
  - Objects are variables too. But objects can contain many values.
  - This code assign many values to an object.
  - JS Object definition:
    - Using an object literal.
      - An object literal is a list of **name:value** pairs inside curly braces **{}**.
      ```js
      {firstName: "John", lastName: "Doe", age: 50, eyecolor: "blue"};
      ```
    - Using the **new** Keyword.
      - Using **new Object()**, then adds properties:
      ```js
      // Create an Object
      const person = new Object();

      // Add Properties
      person.firstName = "John";
      person.lastName = "Doe";
      person.age = 50;
      person.eyeColor = "blue";
      ```
    - Using an object Constructor.
  - Accessing Object Properties.
    - You can access object properties in two ways:
    ```js
    objectName.propertyName;
    objectName["propertyName"];
    ```
  - JS Object methods: methods are **function definitions** stored as **property values**.
  ```js
  const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
    }
  };
  ```
  - **this** refer to the **person object**.
  - In JS, Objects are King. If you Understand objects, you understand JS.
    - **Objects** are containers for **Properites** and **Methods**.
    - **Properities** are named Values.
    - **Methods** are **Functions** stored as **Properities**.
    - **Properities** can be primitive values, functions, or even other objects.
  - JS Objects are Mutable:
    - They are addressed by reference, not by value.
  - Display JS Objects
    - Displaying the object Properities by name.
    - Displaying the object Properities in a loop.
    - Displaying the object using Object.values().
    - Displaying the object uisng JSON.stringify().

### Error Handling.
- Throw, and Try...Catch...Finally
  - The **try** statement defines a code block to run(to try).
  - The **catch** statement defines a code block to handle any error.
  - The **finally** statement defines a code block to run regardless of the result.
  - The **throw** statement defines a custom error.
- Errors will happen!
  - When executing JS code, different errors occur.
  - Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things
  - Example: In this example we misspelled "alert" as " addlert" to deliberately produce an error:
  ```js
  <p id="demo"></p>

  <script>
  try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  }
  </script> 
  ```
- JS **try** and **catch** 
  - The **try** allows you to define a block of code to be tested for errors while it is being executed.
  - The **catch** allows you to define a block of code to be executed, if an error occurs in the try block.
  ```js
  try {
    // block of code to try
  }
  catch(err) {
    // block of code to handle errors.
  }

- JS throw errors.
  - The **throw** allows you to define a block of code to be create a custom error. -> Throw an exception.
  ```js
  throw "Too big";  // throw a text
  throw 500;        // throw a number
  ```
- Example: 
```js
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>
```
- The **finally** statement
  - The **finally** statement lets you execute code, after try and catch, regarless of the result.
  ```js
  try {
    // Block of code to try
  }
  catch(err) {
    // Block of code to handle errors
  }
  finally {
    // Block of code to be executed regardless of the try / catch result
  }
  ```
- The Errors Object
  - JS has a built in error object that provides error informantion when an error occurs.
  - The error object provides two useful properties: name ad message.

## Asynchronous Javascript.

### Callbacks:
- Using a callback, you could call the calculator function (**myCalculator**) with a callback (**myCallback**), and let the calculator function run the callback after the calculation is finished.
- Example:
  - In example, **myDisplayer** is callback function.
  - It is passed to **myCalculator()** as an argument.
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

### Promises
- "Producing code" is code that can thake some time.
- "Consuming code" is code that must wait for the result.
- A Promisesis an Object that links Producing code and Consuming code.
- JS Promises Object.
  - Syntax
  ```js
  let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
  });

  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
  ```
  - Properties.
    - A JS promise object can be:
      - Pending
      - Fulfilled
      - Rejected
    - The promise object supports two properties: **state** and **result**.
      - While a promise object is "pending" (working), the result is undefined.
      - When a promise object is "fulilled", the result is a value.
      - When a promise object is "rejected", the result is an error object.
  - Example:
  ```js
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0

    // The producing code (this may take some time)
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  ```
###


## References
[w3school.com](https://www.w3schools.com/js/js_syntax.asp)

