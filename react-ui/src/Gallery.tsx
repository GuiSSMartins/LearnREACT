import { Profile } from './Profile';

function Congratulations() {
    return (
      <h1>Good job!</h1>
    );
  }

  
  export function TodoList() {
    return (
      // This doesn't quite work!
          <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          className="photo" 
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </>
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <article>
          <h1>My First Component</h1>
          <ol>
            <li>Components: UI Building Blocks</li>
            <li>Defining a Component</li>
            <li>Using a Component</li>
          </ol>
        </article>
        <TodoList />
      </section>
    );
  }