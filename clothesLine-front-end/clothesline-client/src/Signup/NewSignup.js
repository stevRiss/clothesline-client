import React, { useRef } from "react";
import "./newsign.css";
import { useNavigate } from "react-router";

const NewSignup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmation = useRef(null);
  const navigate = useNavigate();
  const handleSingIn = () => {
    console.log(
      emailRef.current.value,
      passwordRef.current.value,
      password_confirmation.current.value
    );

    navigate("/home", { replace: true });
  };

  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Signin</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <input
          ref={password_confirmation}
          placeholder="Password Confirmation"
          type="Password"
        />
        <button type="submit" onClick={handleSingIn}>
          Create Account
        </button>
      </form>
    </header>
  );
};

export default NewSignup;
