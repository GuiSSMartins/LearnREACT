## Coisas mais importantes de REACT

### (Também são coisas que vou apanhando da formção na IT Sector)

React - Open Source view library - created and maintained by Facebook (META) - render User Interface (UI) of web applications

uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript


CSS - style of the web page
Java/Typescript - interactivity
HTML - markdown

```
interface UserData {
  username: string;
  password: string;
  prevState: null
}

//...
const [user, setUser] = useState<UserData | null>(null);
```

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


--------------------------

const es = {largura : 200, altura : 200};
const styles = {largura : 50, comprimento : 50};

console.log("1", es);
console.log("2", {...es,...styles});
console.log("3", {...styles,...es});

(Impresso no ecrã)

1 { largura: 200, altura: 200 }
2 { largura: 50, altura: 200, comprimento: 50 }
3 { largura: 200, comprimento: 50, altura: 200 }

--------------------------------------

#### Definida função dentro de código Typescript/HTML mistrurado

onPlayMovie={() => alert('Playing!')}

-------------------------------------

#### Lógica simples dos botões

export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

OU

<button onClick={function handleClick() {
  alert('You clicked me!');
}}>

OU

<button onClick={() => {
  alert('You clicked me!');
}}>

Functions passed to event handlers must be passed, not called. For example:

 passing a function (correct)	 |  calling a function (incorrect)
<button onClick={handleClick}> | <button onClick={handleClick()}>

<button onClick={() => alert('You clicked me!')}>

In both cases, what you want to pass is a function:

<button onClick={handleClick}> passes the handleClick function.
<button onClick={() => alert('...')}> passes the () => alert('...') function.


By convention, event handler props should start with on, followed by a capital letter.

For example, the Button component’s onClick prop could have been called onSmash.

Make sure that you use the appropriate HTML tags for your event handlers. For example, to handle clicks, use <button onClick={handleClick}> instead of <div onClick={handleClick}>.

e -> event
If you want to prevent an event from reaching parent components, you need to call e.stopPropagation()

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

Since the propagation was stopped, the parent <div>’s onClick handler does not run.
As a result of e.stopPropagation(), clicking on the buttons now only shows a single alert (from the <button>) rather than the two of them (from the <button> and the parent toolbar <div>).



__BUT__ (in rare cases) you might need to catch all events on child elements, even if they stopped propagation. You can do this by adding Capture at the end of the event name:

<div onClickCapture={() => { /* this runs first */ }}>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>

Each event propagates in three phases:

1. It travels down, calling all onClickCapture handlers.
2. It runs the clicked element’s onClick handler.
3. It travels upwards, calling all onClick handlers.

Capture events are useful for code like routers or analytics, but you probably won’t use them in app code.

Don’t confuse e.stopPropagation() and e.preventDefault(). They are both useful, but are unrelated:

e.stopPropagation() stops the event handlers attached to the tags above from firing.
e.preventDefault() prevents the default browser behavior for the few events that have it.

Event handlers are the best place for side effects.
You can handle events by passing a function as a prop to an element like <button>.
Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.

The useState Hook provides those two things:

- A state variable to retain the data between renders.
- A state setter function to update the variable and trigger React to render the component again.

__const [index, setIndex] = useState(0);__  0 -> initial value of index 
(useState() - Hook example)  In this case, you want React to remember index.

~~let index = 0;~~ Be Careful!!!

function handleClick() {
  setIndex(index + 1);
}

The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.

It’s important that all calls to Hooks happen before the first return.

A snapshot is the __state__ of a system at a particular point in time.

----------------------------------------------------

setNumber(n => n + 1): n => n + 1

queued update	| n	| returns
n => n + 1	| 0	| 0 + 1 = 1
n => n + 1	| 1	| 1 + 1 = 2


setNumber(number + 5);
setNumber(n => n + 1);
setNumber(42);

queued update	| n	| returns
“replace with 5”	| 0 (unused) |	5
n => n + 1	| 5	| 5 + 1 = 6
“replace with 42”	| 6 (unused) |	42

To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.

You can store any kind of JavaScript value in state.
const [x, setX] = useState(0);

These kinds of JavaScript values are “immutable”, meaning unchangeable or “read-only”. You can trigger a re-render to replace a value: setX(5);


const [position, setPosition] = useState({ x: 0, y: 0 });

position.x = 5;


Mutation is only a problem when you change existing objects that are already in state. Mutating an object you’ve just created is okay because no other code references it yet.


-------------------------------------------------------------


setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email
});

You can use the ... object spread syntax so that you don’t need to copy every property separately.

setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});

-----------------------------------

Better way to change values

```
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);~

// OU como uma única função

setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});

```

~~person.artwork.city = 'New Delhi';~~ (as estruturas são __imutaveis__!)

let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

If you were to mutate obj3.artwork.city, it would affect both obj2.artwork.city and obj1.city. This is because obj3.artwork, obj2.artwork, and obj1 are the same object. This is difficult to see when you think of objects as “nested”. Instead, they are separate objects “pointing” at each other with properties.

! Treat all state in React as __immutable__ !

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

	          avoid (mutates the array)	          prefer (returns a new array)
adding	    push, unshift	                      concat, [...arr] spread syntax (example)
removing	  pop, shift, splice	                filter, slice (example)
replacing	  splice, arr[i] = ... assignment	    map (example)
sorting	    reverse, sort	                      copy the array first (example)

You shouldn’t reassign items inside an array like arr[0] = 'bird', and you also shouldn’t use methods that mutate the array, such as push() and pop(). Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map().

push() will mutate an array, which you don’t want: Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:

```
setArtists( // Replace the state
  [ // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name } // and one new item at the end
  ]
);

setArtists([
  { id: nextId++, name: name },
  ...artists // Put old items at the end
]);
```

If you want to change some or all items of the array, you can use map() to create a new array. 

Here, you use the [...list] spread syntax to create a copy of the original array first. Now that you have a copy, you can use mutating methods like nextList.reverse() or nextList.sort(), or even assign individual items with nextList[0] = "something".

const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);

Although nextList and list are two different arrays, nextList[0] and list[0] point to the same object. So by changing nextList[0].seen, you are also changing list[0].seen.

const myNextList = [...myList];
const artwork = myNextList.find(a => a.id === artworkId);
artwork.seen = nextSeen; // Problem: mutates an existing item
setMyList(myNextList);

Although the myNextList array itself is new, the items themselves are the same as in the original myList array. So changing artwork.seen changes the original artwork item. You can use map to substitute an old item with its updated version without mutation.

setMyList(myList.map(artwork => {
  if (artwork.id === artworkId) {
    // Create a *new* object with changes
    return { ...artwork, seen: nextSeen };
  } else {
    // No changes
    return artwork;
  }
}));

You can use the [...arr, newItem] array spread syntax to create arrays with new items; and use filter() and map() to create new arrays with filtered or transformed items.

Redundant or duplicate state is a common source of bugs.

```

```

Como construir a 1ª pasta (neste caso, o nome da app é 'my-react-app'):

``` (1º UBUNTU - Linux)
sudo npx create-react-app my-react-app --template typescript
npx create-react-app react-type --template typescript
npx create-react-app tic-tac-toe --template typescript
npx create-react-app react-interactivity --template typescript
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