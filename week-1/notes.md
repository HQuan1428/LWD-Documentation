# Foundations of web development

## Introductions of Web

## HTML Basic

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
 
