import Avatar from './Avatar';
import { getImageUrl2 } from './utils';


export function Profile() {
    return (
      <div>
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
        <img
          src="https://i.imgur.com/lICfvbD.jpg"
          alt="Aklilu Lemma"
        />
        <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
        <img
          src="https://i.imgur.com/QIrZWGIs.jpg"
          alt="Alan L. Hart"
        />
      </div>
    );
  }

  function Card({ children} : { children : any }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

  export function Profile2() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }


 export function Profile3({ imageId, name, profession, awards, discovery, imageSize = 70
  } : { imageId : string,
  name : string,
  profession : string,
  awards : any,
  discovery : string, imageSize: number}) {
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl2(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li><b>Profession:</b> {profession}</li>
          <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    );
  }
  
  export function Gallery3() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile3
          imageId="szV5sdG"
          name="Maria Skłodowska-Curie"
          profession="physicist and chemist"
          discovery="polonium (chemical element)"
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ]}
        imageSize = {70}
        />
        <Profile3
          imageId='YfeOqp2'
          name='Katsuko Saruhashi'
          profession='geochemist'
          discovery="a method for measuring carbon dioxide in seawater"
          awards={[
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
          ]}
          imageSize = {70}
        />
      </div>
    );
  }