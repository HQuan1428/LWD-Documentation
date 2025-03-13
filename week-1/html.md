
# HTML (HyperText Markup Language)

## HTML Foundations 

### What is the HTML?
- **HTML** (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. 
- HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. 
- HTML lives inside text file called **HTML Documents**, or just **documents**, with a **.html** file extension.

### Anatomy of an HTML element 
Let's further explore our paragraph element from the previous section:
```html
    <p> This is a content of web </p>
```
The anatomu of our element is:
- \<p> \- The opening tag : This consists of the name of the element (in this example, p for paragraph)
- "This is a content of web" \- The content : This is the content of the element. 
- \</p> \- The closing tag : This is the same as the opening tag, except that it includes a forward slash before the element name.

### Nesting elements
Elements can be placed within other elements. This is called nesting. 
- Example: 
```html
    <p> This is a example of <strong>nesting elements</strong> </p>
```
- We should close the **strong** element first, before closing the **p**
### Void elements
Some elements consist of a single tag, which is typically used to insert/embed something in the document. Such elements are called **void elements**
- Example:
```html
<img src="images" alt="description of image">
```

### Attributes
Elements can also have attributes. For example, the **href** attribute in the **\<img>** tag
Attributes contain extra information about the element that won't appear in the content. 
An attribute should have:
- A space between it and the element name. (For an element with more than one attribute, the attributes should be separated by spaces too)
- The attribute name, followed by an equal sign.
- An attribute value, wrapped with opening and closing quote marks.

### Boolean attributes
Sometimes you will see attributes written without values. This is entirely acceptable. These are called **Boolean attributes** 
When a boolean attribute is written without a value, or with any value, even like "false", the boolean attribute is always set to true. Otherwise, if the attribute is not written in an HTML tab, the attribute is always set to false.
For example, consider the **disabled** attribute, which you can assign to form input elements
```html
    <input type="text" disabled="disabled" />
```

### Whitespace in HTML
No matter how much whitespace you use inside HTML element content(which can include one or more space characters, but also line breaks) 

### Characters references: including special characters in HTML
In HTML, the character **<, >, ", ' and &** are special characters. They are parts of the HTML syntax itself. So how do you include one of these special characters in your text? 
- You do this with [character references](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference "The list characters reference"). These are special codes that represent characters, to be used in these exact circumstances. Each character reference starts with an ampersand(&), and ends with a semicolon(;).

|Literal character | Charater reference equivalent |
|------------------|-------------------------------|
|< | \&lt;|
|> | \&gt;|
|" | \&quot;|
|' | \&apos;|
|& | &amp;|

### HTML comments
HTML has a mechanism to write comments in the code. Browsers ignore comments, effectively marking comments invisible to the user. The purpose of comments is to allow you to include notes in the code to explain your logic or coding. This is very useful if you return to a code base after being away for long enough that you don't completely remember it. Likewise, comments are invaluable as different people are making changes and updates.
To write a html comment, wrap it in the special markers **\<!-- -->**. For example:
```html
    <!-- This is a example comment -->
```



### Creating fist HTML document
```html
   <!doctype html>
    <html lang="en-US">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>My test page</title>
    </head>
    <body>
        <img src="" alt="My test image" />
    </body>
    </html> 
```
Here, we have the following:
- \<!doctype html> : doctype were meant to act as link to a set of rules that the html page had to be considered good HTML, which could mean automatic error checking and orther useful things.
- \<html></html> : This element wraps all the content on the entire page and is sometimes known as the root element. It also includes the <lang="en-US"> attribute
- \<head></head> : This elemnt acts as a contains for all the stuff you want to include on the HTML page. That contents are no display.
- In \<head> tag \<meta/> list:
    - \<meta charset="utf-8" /> : This element sets the characters set your document should use UTF-8 most characters from the vast majority of written languages.
    - \<meta name="viewport" content="width=device-width" /> : This **viewport element** ensures the page renders at the viewport.
- \<title></title> : This sets the title of page, which in the title that appears in the browser tab the page is loaded in.
- \<body></body> : This contains all the contents that you want to show to web users when they visit your page.
 
### Images

Let's turn our attention to the \<img> element:
```html
<img src="" alt="My test image" />
```
- This embeds an image into our page in the position it appears. It does this via the **src**(sourse) attribute, which contains the path to our image file.
- In the **alt** attribute, you specify description text for users who cannot see the image, possibly because of the following reasons:
    - They are visually impaired. User with significant visual impairments often use tools called screen readers to read out the alt text to them
    - Something has gone wrong causing the image not to display. If the **src** attribute does not contain a valid path to an image, the alt text will be displayed instead.

### Marking up text
#### Headings
- Heading elements allow you to specify that certain of your content are headings \- or subheadings. 
- HTML contains 6 heading levels, \<h1> \- \<h6> although you'll commonly only use 3 to 4 at most:

#### Paragraphs
- As explained above, \<p> elements are for containing paragraphs of text, you'll use these frequently when marking up regular text content

#### Lists
- A lot of the web's content is lists and HTML has special elements for these. Marking up list always consists of at least 2 elements. The most common list types are ordered list and unordered list:
    1. Unordered list are for lists where the order of the items doesn't matter, such as a shopping list. There are wrapped in a \<ul> element.
    2. Ordered list are for lists where the order of the items does matter, such as a list of cooking instructions in a recipe. There are wrapped in a \<ol> element.
- Each items inside the lists is put inside an \<li> (list item) element.

#### Links
- Links are very important \- they are what makes the web a web!. To add a link, we need to use a specific element \- \<a>
- \<a> \- being the short from for "anchor" 
- To make text within your paragraph into a link, follow these steps:
    1. Choose some text. 
    2. Wrap the text in an \<a> element
    ```html
        <a> This is a web </a>
    ```
    3. Give the \<a> element an **href** attribute
    ```html
        <a href=""> This ia a web </a>
    ```
    4. Fill in the value of this attribute with the web address that you want the link to point to:
    ```html
        <a href="https://www.example.com//this-is-a-web"> This is a web </a>
    ```
    

