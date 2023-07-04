// import { Fragment } from 'react';

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          <p key={index}>
            {line}
          </p>
        )}
      </article>
    );
    /*
    return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  ); */
  }