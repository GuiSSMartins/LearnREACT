import { getImageUrl } from './utils';


export const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  export function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
      );
      const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
      );
      return (
        <article>
          <h1>Scientists</h1>
          <h2>Chemists</h2>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>
                <img
                  src={getImageUrl(person)}
                  alt={person.name}
                />
                <p>
                  <b>{person.name}:</b>
                  {' ' + person.profession + ' '}
                  known for {person.accomplishment}
                </p>
              </li>
            )}
          </ul>
          <h2>Everyone Else</h2>
          <ul>
            {everyoneElse.map(person =>
              <li key={person.id}>
                <img
                  src={getImageUrl(person)}
                  alt={person.name}
                />
                <p>
                  <b>{person.name}:</b>
                  {' ' + person.profession + ' '}
                  known for {person.accomplishment}
                </p>
              </li>
            )}
          </ul>
        </article>
      );
  }

  export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

  function Recipe({ id, name, ingredients } : {id : number, name: string, ingredients : any}) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingredient : any) =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    );
  }

  export function RecipeList() {
    return (
        <div>
          <h1>Recipes</h1>
          {recipes.map(recipe =>
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>
              <ul>
                {recipe.ingredients.map(ingredient =>
                  <li key={ingredient}>
                    {ingredient}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
    );

    /**
    return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
     */
  }