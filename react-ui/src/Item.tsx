function Item({ name, isPacked } : { name : string, isPacked : boolean}) {
    /*
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
      // return null;
    }
    return <li className="item">{name}</li>;
    */
  
   /*
    return (
      <li className="item">
        {isPacked ? (
          <del>
            {name + ' ✔'}
          </del>
        ) : (
          name
        )}
      </li>
    );
    */
  
    /* OU
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
    */
  
  /*
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  ); */
  
  /*
  let itemContent : any = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
  */
  
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
  }
  
  function Item2({ name, importance } : { name : string, importance : number}) {
    return (
      <li className="item">
        {name}
        {importance > 0 && ' '}
        {importance > 0 &&
          <i>(Importance: {importance})</i>
        }
      </li>
    );
  }
  
export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item2 
            importance={9} 
            name="Space suit" 
          />
          <Item2
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item2 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }