import React, { useState } from "react";
import "./page2.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Page2 = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    <div>
      <div className="background" />
      <div className="loginpage">
        <form className="loginForm">
          <img src="logopage.png" alt="Logo" className="logo" />
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
              className="input-box"
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
            />
            <span className="icon">
              <i className="fas fa-user" />
            </span>
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
            />
            <label htmlFor="showPassword" className="icon">
              <i className="fas fa-eye" />
            </label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me?
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button
            className="button"
            type="submit"
            defaultValue="Connect"
            onClick={(eo) => {
              eo.preventDefault()
              signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
            }}
          ></button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="signUp.html">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
