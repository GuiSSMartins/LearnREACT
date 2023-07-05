import { useState } from "react";

export function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

//--------------------------------------------------------------

export function FeedbackForm2() {
    function handleClick() {
      const name = prompt('What is your name?');
      alert(`Hello, ${name}!`);
    }
  
    return (
      <button onClick={handleClick}>
        Greet
      </button>
    );
  }
