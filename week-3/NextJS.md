# NextJS Course

# Overview

- Styling: The different ways to style your application in Next.js.
- Optimizations: How to optimize images, links and fonts.
- Routing: How to create nested layouts and pages using file-system routing.
- Data Fetching: How to set up a Postgres database on Vercel, and best practices for fetching and streaming.
- Search and Pagination: How to implement search and pagination using URL search params.
- Mutating data: How to mutate data using React Server Actions, and revalidate the Next.js cache.
- Error Handing: How to handle general and **404** not found errors.
- Form validation and accessibility: How to do server-side form validation and tips for improving accessibility.
- Authentication: How to add authentication to your application using **NextAuth.js** and Middleware.
- Metadata: How to add metedata and prepare your application for social sharing.


## React Core Concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. There are:
- Components
  - UI can be broken down into smaller building blocks called **Components**
  - Create components:
  ```js
  // header called a component.
    function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
    }
    
    const root = ReactDOM.createRoot(app);
    root.render(<Header />);
  ``` 
  - To get this to work, there are two things you have to do:
    - First, React comonents should be capitalized to distinguish them from plain HTML and Javascript.
    - Second, you use React components the same way you'd use to regular HTML tags, with angle brackets **< />**.
  - Nesting Component (Nesting function).
  - Compnents tree (DOM tree)
- Props
  - You can pass pieces of information as properties to React components. These are called **props**.
  - Props is a object({"key": "value"},...).
  - Using props
  ```js
    function HomePage() {
        return (
            <div>
            <Header title="React" />
            </div>
        );
    }
  ```
  - Using variables in JSX
  ```js
    function Header({ title }) {
        console.log(title);
        return <h1>{title}</h1>;
    }
  ```
  - You can add any **JS expression** (something that evaluates to a single value) inside curly braces **{}**.
  - Iterating through lists
    ```js
    function HomePage() {
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
        
        return (
            <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                <li>{name}</li>
                ))}
            </ul>
            </div>
        );
    }
    ```
    - If you run this code, React will give us a warning about a missing **key** prop. This is because React needs something to uniquely identify items in an array so it knows which elements to update in the DOM.
    ```js
    function HomePage() {
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
        
        return (
            <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                <li key={name}>{name}</li>
                ))}
            </ul>
            </div>
        );
    }
    ```
- State: Adding Interactivity with State
  - Listening to events: To make the button to do something when clicked, you can use the **onclick** event.
  - Handling Event: You can define a function to "handle" events whenever they are triggered.
  - State and Hooks: Functions starting wiht **use** are called Hooks.
    - Hooks allow you to add additional logic such as **state** to your components.
    ```js
    function HomePage() {
        // ...
        const [likes, setLikes] = React.useState(0);
        
        function handleClick() {
            setLikes(likes + 1);
        }
        
        return (
            <div>
            {/* ... */}
            <button onClick={handleClick}>Likes ({likes})</button>
            </div>
        );
    }
    ```

## NextJS 
- Installing NextJS
  - When you use Next.js in your projects, you do not need to load the **react** and **react-dom** scripts from [unpkg.com](http://unpkg.com/) anymore. 
  - In your **terminal**, run the following command in the root of your project:
  ```terminal
  npm install react@latest react-dom@latest next@latest 
  ```

## Clients and Servers Components

To understand how Server and Client Components work, it's helpful to be familiar with two foundational web concepts:
- The **evironments** your applications code can be executed in: The server and client 
- The **network boundary** that separates server and client code.


# App Router

## 
Createting a new project:
- Recommend using **pnpm** as your package manager, as it's faster and more efficent than **npm** or **yarn**.
- Install **pnpm** 
  ```bash
  npm install -g pnpm
  ```
  
- Create project
  ```bash
  npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
  ```

