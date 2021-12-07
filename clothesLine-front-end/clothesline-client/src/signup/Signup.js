import React, { useRef } from "react";
import "./signup.css";
import { useNavigate } from "react-router";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const handleSingIn = () => {
    navigate("/home", { replace: true });
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
