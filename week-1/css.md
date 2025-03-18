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
    - [Selector Lists](#selector-lists)
    - [The Universal Selector](#the-universal-selector)
    - [References](#references-2)
  - [Attribute Selectors](#attribute-selectors)
    - [Presence and Value selectors](#presence-and-value-selectors)
    - [Substring matching selectors](#substring-matching-selectors)
    - [References](#references-3)
  - [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
    - [What is pseudo-classes?](#what-is-pseudo-classes)
    - [What is pseudo-elements?](#what-is-pseudo-elements)
    - [References](#references-4)


## What is CSS? 

### CSS Syntax Basic
CSS is a rule-based language - you define rules by specifying groups of styles that should be applied to particular or groups of elements on your web page.

For example:
```css
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
```css
p {
  color: green;
}
```
- Adding a class: "."\<class_name>
  - Example
```css
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

### Selector Lists

### The Universal Selector
The universal selector is indicated by an asterisk(*).
- For example, 
```css
p * {
    /* selects all the nested elements inside the <p> element */ 
}
```

### References
[Basic Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## Attribute Selectors

### Presence and Value selectors
These selectors enable the selection of an element based on the presenece of an attribute alone (for example href), or on various defferent matches against the value of the attribute.
- For example:
```css
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

### Substring matching selectors
These selectors allow for more advanced matching of substrings inside the value of your attribute.
- For example:
```css
body {
  font-family: sans-serif;
}
li[class^="a"] {
  /* This is class begin with a */
  font-size: 120%;
}

li[class$="a"] {
  /* This is class end with a*/
  background-color: yellow;
}

li[class*="a"] {
  /* This is class contain a */
  color: red;
}
```

### References
[Attribute Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)

## Pseudo-classes and Pseudo-elements

### What is pseudo-classes?
A pseudo-classes is a selector that selects element that are in a specific state, e.g.
A pseudo-classes are keywords that start with a colon(:). For example, **:hover** is a pseudo-class.

### What is pseudo-elements?
Pseudo-elements behave in a similar way. However, they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements.
Pseudo-element start with a double colon **::**. For example, **::before** is a pseudo-element.



### References
[Pseudo](http://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)