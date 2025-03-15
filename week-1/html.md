
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
## What's the head? Webpage metadata

### What is the HTML head?
```html
    <!doctype html>
    <html lang="en-US">
    <head>
        <meta charset="utf-8" />
        <title>My test page</title>
    </head>
    <body>
        <p>This is my page</p>
    </body>
</html>
```
The head's content is not displayed on the page when loaded in a browser, the head's jog is to contain **metadata** about the document
- In the above example, the head is quite small. In larger pages however, the head can get quite large

### Adding the title
\<title> tag - This can be used to add a title to the document.
\<h1> tag - This can be used to add a title to the page.
The difference between \<title> and \<h1> is that:
- The **h1** element appears on the page when loaded in the browser.
- The **title** element is metadata that represents the title of the overall HTML document(not the document's content).

### Metadata: The \<meta> element
Metadata is data that describes data, and HTML has an "offical" way of adding metadata to a document - the **\<metadata>** element. Of course, The other stuff we are talking about in this article could also be thought of as metadata too. 
There are a lot of different types of **\<meta>** elements that can be included in your page's \<head> 

I'll explaina few things that you might commonly see.
- Specifying your document's character encoding.
    - In the example we saw above, This line was included:
    ```html
        <meta charset="utf-8" />
    ```
    - This element specifies the document's character encoding - the character set that the document is permitted to use **utf-8** is a universal character set that includes pretty much any character from human language. This means that your web page will be able to handle displaying any language; it's therefore a good idea to set this on every web page you create!. For example, your page could handle English and Japanese just like:
    ![metadata example: character set utf-8](../images/week-1/metadata-example.png)
- Adding an author and description
    - Many **\<meta>** elements include **name** and **content** attributes:
        - **name** specifies the type of meta element it is; what type of information it contains.
        - **content** specifies the actual meta content.

    - Two such meta elements that use useful to include on your page define the author of the page, and provide a concise description of the page. Let's lock at an example:
    ```html
        <meta name="author" content="Chris Mills" />
        <meta
        name="description"
        content="The MDN Web Docs Learning Area aims to provide
        complete beginners to the Web with all they need to know to get
        started with developing websites and applications." />
    ```
    - Specifying an author is beneficial in many ways: it is useful to be able to understand who wrote the page, if you have any questions about the content and you would like to contact them. Some content management systems have facilities to automatically extract page author information and make it available for such purpose.
    - Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines (such activites are termed [Search Engine Optimization](https://developer.mozilla.org/en-US/docs/Glossary/SEO), [SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO))
- Other types of metadata
    - As your travel around the web, you'll find other types of metadata, too. Many of the features you'll see on websites are proprietary creations designed to provide certain sites (such as social networking sites) with specific information they can use
    - For example, [Open Graph Data](https://ogp.me/) is a metadata protocol that Facebook invented to provide richer metadata for websites

### Adding custom icons to your site
To further enrich you site design, you can add references to custom icons in your metadata, and these will displayed in certain contexts. The most commonly used of these is the favicon (short for "Favorites icon", refering to its use in the "favorites" or "bookmarks" lists in browsers).
Favicon displayed in the browser tab containing each open page, and next to bookmarked pages in the bookmarks pannel.
A favicon can be added to your page by:
    1. Saving it in the same directory as the site's index page, saved in **.ico** format (most also support favicons in more common formats like **.gif** or **.png**)
    2. Adding the following line into your HTML's \<head> block to reference it:
    ```html
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
    ```

### Applying CSS and JS to HTML
These are most commonly applied to a web page using the \<link> element and the \<script> element, respectively.
- The **\<link>** element should always go inside the head of your document. This takes two attributes, **rel="stylesheet"**, which indicates that it is the document's stylesheet, and href, which contains the path to he stylesheet file:
    ```html
        <link rel="stylesheet" href="style.css" />
    ```
- The **\<script>** element should also go into the head, and should include a **src** attribute containing the path to the JS you want to load, and **defer**(a boolean attribute), which instructs the browser to load the JS after the page has finished parsing the HTML. The **defer** attribute is useful as it guarantees the HTML is all loaded before the JS runs so that you don't get errors due to JS trying to access and HTML element that doesn't exist on the page yet.
```html
    <script src="script.js" defer></script>
``` 




## Creating fist HTML document
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
    

