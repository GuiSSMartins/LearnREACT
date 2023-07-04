## Coisas mais importantes de REACT

### (Também são coisas que vou apanhando da formção na IT Sector)

React - Open Source view library - created and maintained by Facebook (META) - render User Interface (UI) of web applications

uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript


CSS - style of the web page
Java/Typescript - interactivity
HTML - markdown


#### (Named & Default) Exports 

Default	| export default function Button() {}	| import Button from './Button.js';
Named	| export function Button() {}	| import { Button } from './Button.js';


import Banana from './Button.js' -> if it was a default export.
Otherwise, we couldn't do that (that's why it's called '_named export_').


The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript:

But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.

Keeping a button’s rendering logic and markup together ensures that they stay in sync with each other on every edit. Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own.


__NOTE__ : JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

In React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead.

The Rules of JSX 
1. Return a single root element 
2. Close all the tags
3. camelCase all most of the things! 

Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.

You can only use curly braces in two ways inside JSX:

As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".

The next time you see {{ and }} in JSX, know that it’s nothing more than an object inside the JSX curlies!

Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:

function Avatar({ person, size }) {
  // ...
}

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.

let itemContent = name;
Use an if statement to reassign a JSX expression to itemContent if isPacked is true:

if (isPacked) {
  itemContent = name + " ✔";
}

Curly braces open the “window into JavaScript”. Embed the variable with curly braces in the returned JSX tree, nesting the previously calculated expression inside of JSX:

<li className="item">
  {itemContent}
</li>

Here’s a short example of how to generate a list of items from an array:

1. Move the data into an array:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

2. Map the people members into a new array of JSX nodes, listItems:
const listItems = people.map(person => <li>{person}</li>);

3. Return listItems from your component wrapped in a <ul>:
return <ul>{listItems}</ul>;

JSX elements directly inside a map() call always need keys!

```

```

Como construir a 1ª pasta (neste caso, o nome da app é 'my-react-app'):

```
sudo npx create-react-app my-react-app --template typescript
npx create-react-app react-type --template typescript
npx create-react-app tic-tac-toe --template typescript
```

Como compilar (dentro da pasta do projeto):

```
cd my-react-app
sudo npm run build
serve -s build
```

OU 

```
cd my-react-app
sudo npm start
```

e seguir as instruções pedidas (principalmente sobre o que escrever no chrome do servidor localhost).