# CSS (Cascading Style Sheets)

## Table of contents
- [CSS (Cascading Style Sheets)](#css-cascading-style-sheets)
  - [Table of contents](#table-of-contents)
  - [What is CSS?](#what-is-css)
    - [CSS Syntax Basic](#css-syntax-basic)
    - [References](#references)
  - [Getting Started with CSS](#getting-started-with-css)
    - [Adding CSS to our document](#adding-css-to-our-document)
    - [Using Common Selectors](#using-common-selectors)
    - [Other CSS syntax features](#other-css-syntax-features)
    - [References](#references-1)
  - [Basic CSS Selectors](#basic-css-selectors)
    - [Class Selectors](#class-selectors)
    - [ID Selectors](#id-selectors)
    - [How do ID, class, and element selectors compare in terms of specificity and reusability?](#how-do-id-class-and-element-selectors-compare-in-terms-of-specificity-and-reusability)
    - [References](#references-2)


## What is CSS? 

### CSS Syntax Basic
CSS is a rule-based language - you define rules by specifying groups of styles that should be applied to particular or groups of elements on your web page.

For example:
```html
h1 {
  color: red;
  font-size: 2.5em;
}
```
### References
[CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)

## Getting Started with CSS

### Adding CSS to our document
External stylesheets
- Create a file in the same folder as your HTML document and save it as **style.css**
- To link **style.css** to **index.html**, add the following line somewhere inside the \<head> of the HTML document
- For example:
```html
<link rel="stylesheet" href="styles.css" />
```
Locating stylesheets in different places
- Here are three examples:
```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```
Internal stylesheets
- Internal stylesheets are contained within \<style> elements, which go inside the HTML \<head>. 
- For example:
```html
<style>
  p {
    color: purple;
  }
</style>
```
Inline Styles
- Inline styles are CSS declarations that affect a single HTML elemet, contained within a **style** attribute. 
- For example:
```html
<span style="color: purple; font-weight: bold">span element</span>
```

### Using Common Selectors
In this section we will take a brief tour though some of the more common types of selector you will encounter
- Selecting HTML element: \<element_name>{} 
  - Example
```html
p {
  color: green;
}
```
- Adding a class: "."\<class_name>
  - Example
```html
.special {
  color: orange;
  font-weight: bold;
}
```

### Other CSS syntax features

- Functions: while most value are relatively simple keyworks or numeric values, there are some values that take the form of a function.
- CSS Comment: /* This is a comment in CSS */

### References
[CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)

## Basic CSS Selectors

### Class Selectors
The case-sensitive class selector starts with a dot(.) character. 
- Target classes on particular elements: \<element-name>.\<class-name>
- Target an element if it has more than one class applied: .\<class-name>.\<class-name>

### ID Selectors
The case-sensitive ID selectore starts with a hash(#) rather than a dot character. 

### How do ID, class, and element selectors compare in terms of specificity and reusability?
|Selector|Specificity|Reusability|When to use?|
|--------|-----------|-----------|------------|
|#id|Highest|Not reusable|when a unique element needs specific styling|
|.class|Medium|Reusable|when multiple elements need the same styling|
|element|lowest|Applies globally|when applying general styles to all element of the same type|



### References
[Basic Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

