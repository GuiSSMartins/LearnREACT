import { Profile } from './Profile';
import { getImageUrl } from './utils';

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

  const today = new Date();

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' }
    ).format(date);
  }

  export function TodoList2() {
    return (
      <h1>To Do List for {formatDate(today)}</h1>
    );
  }

  const baseUrl = 'https://i.imgur.com/';
  const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
 function TodoList3() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl + person.imageId + person.imageSize + '.jpg'}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }

  function Avatar({ person, size } : { person : any, size: number}) {
    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  
  export default function Gallery() {
    return (
      <section>
        <article>
          <h1>My First Component</h1>
          <ol>
            <li>Components: UI Building Blocks</li>
            <li>Defining a Component</li>
            <li>Using a Component</li>
          </ol>
        </article>
        <h1>Amazing scientists</h1>
        <Profile />
        <TodoList />
        <TodoList2 />
        <TodoList3 />
        If double curly braces after person= confuse you, recall they’re merely an object inside the JSX curlies.
        <Avatar 
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            size={100}
        />
                <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
        />
      </section>
    );
  }