import { useState } from "react";
import { UtilsHelper } from "./Utils.helper";

export function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
      // throw new Error("oi");
    } catch (err: any) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e: any) {
    setAnswer(e.target.value);
  }

  // UtilsHelper.isValid(error) &&
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {UtilsHelper.isValid(error) && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer: string) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve("");
      }
    }, 1500);
  });
}

//------------------------------------------------------------------------------

export function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e: any) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: any) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
