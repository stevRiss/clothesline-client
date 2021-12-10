import React, { useRef } from "react";
import "./signup.css";
import { useNavigate } from "react-router";

const SignInScreen = ({ setCurrentUser, setAuthentication, authentication }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault();
    const refs = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(refs),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          setAuthentication((e) => !e)
          navigate("/", { replace: true });

        });
      } else {
        r.json().then((errors) => {
          console.error(errors);
          alert("invalid login credentials")
        });
      }
    });

  //   if (authentication == true ){
  //   }else{

  //   }

  };

  const handleRegister = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Login</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <button type="submit" onClick={handleSingIn}>
          Login
        </button>

        <h4>
          <span className="signUp_color_gray">Welcome? </span>{" "}
          <span className="signupScreen_link" onClick={handleRegister}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </header>
  );
};

export default SignInScreen;
