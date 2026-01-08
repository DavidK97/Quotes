import { useRef } from "react";

export default function ContactPage() {
  const emailRef = useRef();
  const messageRef = useRef();

  function handleSubmit (event) {
    event.preventDefault();

    const input = {
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    console.log("Feedback data", input);

    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" />
      <input ref={messageRef} placeholder="Write your feedback here" />

      <button type="submit">Submit</button>
    </form>
  );
}
