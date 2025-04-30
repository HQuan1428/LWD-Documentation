# ES6 - Modern Javascripts

## Table of Contents 
- [ES6 - Modern Javascripts](#es6---modern-javascripts)
  - [Table of Contents](#table-of-contents)
  - [Arrow functions](#arrow-functions)
  - [Template Literals.](#template-literals)
  - [Destructuring](#destructuring)
  - [Spread / Rest Operators (...)](#spread--rest-operators-)
  - [Modules (import/export)](#modules-importexport)
  - [Class, Inheritance, and **super**](#class-inheritance-and-super)
  - [Generators](#generators)
  - [Iterators](#iterators)
  - [Symbols](#symbols)
  - [Proxies](#proxies)
  - [Reflect API](#reflect-api)
  - [Optional chaining (?.)](#optional-chaining-)
  - [Nulish Coalescing (??)](#nulish-coalescing-)
  - [typeof](#typeof)
  - [instanceof](#instanceof)
  - [Truthy / Falsy Values](#truthy--falsy-values)

## Arrow functions
```js
const add = (a, b) => {
    return a + b;
};
```
## Template Literals.
```js
const name = 'Alice';
console.log(`hello, ${name}`);
```
## Destructuring 
```js
const [x, y] = [1, 2];  // x = 1, y = 2
const {name, age} = {name: "Bob", age: 30};
```
## Spread / Rest Operators (...)
- Spread: Split elements of array/object.
```js
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
```
- Rest: Gather the rest into an array
```js
const sum = (...nums) => nums.reduce((a, b) => a + b);
```
## Modules (import/export)
```js
// file math.js
export const add = (a, b) => a + b;

// file main.js
import {add} from './math.js'
```
## Class, Inheritance, and **super**
- This is oop syntax in js.
```js
class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} makes a sound`);}
}

class Dog extends Animal {
    speak() {
        super.speak(); // call method in base class
        console.log(`${this.name} barks`);
    }
}
```
## Generators
Functions can be paused and resumed.
```js
function* gen() {
  yield 1;
  yield 2;
}
const it = gen();
console.log(it.next().value); // 1
```

## Iterators
Interface for sequential browsing.
```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
};
for (const val of myIterable) console.log(val);
```

## Symbols
Primitive data type, guaranteed unique.
```js
const sym = Symbol('desc');
```

## Proxies
Create custom objects that behave when accessed, assigned, deleted,...
```js
const obj = new Proxy({}, {
  get: (target, prop) => `Property ${prop} accessed!`
});
console.log(obj.test); // Property test accessed!
```

## Reflect API
Provides reflection functions like get, set, compatible with Proxy.
```js
Reflect.set(obj, 'x', 42);
```

## Optional chaining (?.)
Deep access to object without error if null/undefined.
```js
const user = {};
console.log(user.profile?.name); // undefined 
```

## Nulish Coalescing (??)
Return the right value if the left is null or undefined.
```js
const name = null ?? 'Anonymous'; // Anonymous
```

## typeof 
Return data type
```js
typeof 123; // 'number'
typeof null; // 'object' (a older error of js)
```

## instanceof
Check if an object is an instance of a constructor.
```js
[] instanceof Array; // true
```

## Truthy / Falsy Values
- Falsy: false, 0, "", null, undefined, NaN.
- All other values are truthy.
