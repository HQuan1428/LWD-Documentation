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
  - [Combinations](#combinations)
    - [Descendant combinator](#descendant-combinator)
    - [Child combinator](#child-combinator)
    - [Next-sibling combinator](#next-sibling-combinator)
    - [Subsequent-sibling combinator](#subsequent-sibling-combinator)
    - [Creating complex selectors with nesting](#creating-complex-selectors-with-nesting)
    - [References](#references-5)
  - [Box Model](#box-model)
    - [What is the CSS box model ?](#what-is-the-css-box-model-)
    - [Margins, paddings, and borders](#margins-paddings-and-borders)
      - [Margin](#margin)
    - [Borders](#borders)
      - [Padding](#padding)
    - [References](#references-6)
  - [Handling conflicts](#handling-conflicts)
    - [Controlling inheritance](#controlling-inheritance)
    - [Refereces](#refereces)
  - [Value and Units](#value-and-units)
    - [References](#references-7)
  - [Sizing](#sizing)
    - [References](#references-8)
  - [Background and borders](#background-and-borders)
    - [References](#references-9)
  - [Overflow](#overflow)
    - [References](#references-10)
  - [Image, audio, form](#image-audio-form)
    - [References](#references-11)
  - [Styling Tables](#styling-tables)
    - [References](#references-12)
  - [Text and font fundamental](#text-and-font-fundamental)
    - [References](#references-13)
  - [Styling lists](#styling-lists)
    - [References](#references-14)
  - [Styling Links](#styling-links)
    - [References](#references-15)
  - [Web Font](#web-font)
    - [References](#references-16)
  - [Web Layout](#web-layout)
    - [References](#references-17)
  - [Float](#float)
    - [References](#references-18)
  - [Positioning](#positioning)
    - [References](#references-19)
  - [FLexbox](#flexbox)
    - [Why flexbox?](#why-flexbox)
    - [References](#references-20)
  - [Grid](#grid)
    - [References](#references-21)
  - [Responsive Design](#responsive-design)
    - [References](#references-22)
  - [Media queries](#media-queries)
    - [References](#references-23)


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

## Combinations

### Descendant combinator
The descentant combinator - typical represented by single space ( ) character.

### Child combinator
The child combinator (>) is placed between two CSS selectors.

### Next-sibling combinator
The next-sibling combinator (+) is placed between two CSS selectors.

### Subsequent-sibling combinator
If you want to select siblings of an element even if they are not directly adjacent, then you can use the subsequent-sibling combinator(~)

### Creating complex selectors with nesting


### References
[Combinations](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinatorso)

## Box Model

### What is the CSS box model ?
The CSS box model as a whole applies to block boxes and defines how the different parts of a box - margin, border, padding and conten - work together to create a box that you can see your page

Part of the box:
- Content box: The area where your content is displayed.
- Padding box: The padding sits around the content as white spaces
- Border box: The border box wraps the content and any padding
- Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements.

The below diagram shows these layers:
![These is the diagram for the css box model](../images/week-1/diagram-cssBoxModel.png)

### Margins, paddings, and borders
You're already seen the **margin, padding, border** properties at work in the example above. 
#### Margin
The margin is an invisible space around your box. 
We can control all margins of an element at once using the **margin** property, or each side individually using the equivalent longhand properties: **margin-top, -right, -left, -bottom**

### Borders
The border is drawn between the margin ad the padding of a box. If you are using the standard box model, the size of the border is added to the **width** and **height** of the content box. 
For styling borders, there are a large number of properties - there are four borders, and each border has a style, width, and color that we might want to manipulate.

#### Padding
The padding sits between the border and the content area and it used to push the content away for the border.


### References 
[Box Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)

## Handling conflicts 

### Controlling inheritance 
CSS provides five special universal propety values of controlling inheritance.
- **inherit**: Sets the property value applied to a selected element to be the same as that of its parent element.
- **initial**: Sets the property value applied to selected element to the initial value of that property.
- **revert**: Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that property.
- **revert-layer**: Resets the property value applied to selected element to the value established in a previous cascade layer.
- **unset**: Resets the property to its natural value, which means that if the property is naturally inherited it acts like **inherit**, otherwise it acts like **initial**.



### Refereces
[Handling conflicts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

## Value and Units


### References
[Value and Units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

## Sizing

### References
[Sizing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)

## Background and borders


### References
[Background and borders](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## Overflow

### References
[Overflow](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)

## Image, audio, form

### References
[Image, audio, form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)

## Styling Tables

### References
[Styling Tables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)

## Text and font fundamental

### References
[Text and font](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)

## Styling lists

### References
[Styling lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_lists)

## Styling Links

### References
[Styling links](http://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links)

## Web Font

### References
[web font](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts)

## Web Layout

### References
[Web layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)

## Float

### References
[Web layout float](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Floats)

## Positioning 

### References
[Web layout positioning](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)

## FLexbox

### Why flexbox?
CSS flexible box layout enables you to:
- Vertically center a block of content inside its parent.
- Make all children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Make all columns in a mutiple-column layout adopt the same height even if they contain a different amout of content.



### References
[Web layout flebox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)

## Grid

CSS grid is a two-dimensional layout system for the web.

Flex grid with the **fr** unit



### References
[Web layout grid](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)

## Responsive Design

Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability.

### References
[Web responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

## Media queries

### References
[Web media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries)





