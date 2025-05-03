# F8-Course : RecactJS

## SPA / MPA

## Import/Export in JS Module

In HTML, if you want to usa a file as a module, you must add (type="module") to the script element tag.
```html
<script type="module" src="./app.js"> </script>
```

## Add RecatJS in index.html file
```html
  <script crossorigin src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"></script>
```

## React elements
**React elements** are the smallest unit when working with reactjs.
```js
const h1React = React.createElement('h1', {
    properties,....
}, 'content of tag');
// React.createElement(type, props, children, n);
//  children is also props
```

## React-DOM
```js
ReactDOM.render(ReactElements, Root);
```

## JSX, Componenets, Props
