import React, { useState, useRef } from "react";
import "./newsign.css";
import { useNavigate } from "react-router";

const NewSignup = ({setCurrentUser}) => {
  const userRef = useRef(null)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmation = useRef(null);
  const navigate = useNavigate();

  // const [currentUser, setCurrentUser] = useState('')
  const handleSingIn = (e) => {
    e.preventDefault();
    const credentials = {username: userRef.current.value, email: emailRef.current.value, password: passwordRef.current.value}
    fetch("http://localhost:3000/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(credentials),
    })
    .then((res) => {

      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          alert("new user created!")
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
          alert(errors)
        });
      }
    });
    
    navigate("/me", { replace: true });
  };

  // const handleSingIn = () => {
  //   console.log(
  //     emailRef.current.value,
  //     passwordRef.current.value,
  //     password_confirmation.current.value
  //   );

  //   navigate("/home", { replace: true });
  // };
  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Signin</h1>
        <input ref={userRef} placeholder="create username" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <input
          ref={password_confirmation}
          placeholder="Password Confirmation"
          type="Password"
        />
        <button type="submit" onClick ={handleSingIn}>
          Create Account
        </button>
      </form>
    </header>
  );
};

export default NewSignup;
