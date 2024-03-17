import React, { useState } from 'react';
import { auth } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [telephone, settelephone] = useState();
  const [username, setusername] = useState();

  const navigate = useNavigate()
  return (
    <div>
      <div className="main-container">
  <div className="signup-form">
    <form id="signup-form" className="sign-back" method="POST">
      <h1>Sign UP</h1>
      <div className="signup-row">
        <i className="fa fa-user" />
        <input type="text" name="" defaultValue="" placeholder="FULL NAME" onChange={(eo) => {
                setusername(eo.target.value);
              }}  />
      </div>
      <div className="signup-row">
        <i className="fa fa-envelope-o" />
        <input type="email" name="" defaultValue="" placeholder="EMAIL"   onChange={(eo) => {
                setemail(eo.target.value);
              }} />
      </div>
      <div className="signup-row">
        <i className="fa fa-phone" />
        <input type="tel" name="" defaultValue="" placeholder="MOBILE" onChange={(eo) => {
                settelephone(eo.target.value);
              }} />
      </div>
      <div className="signup-row">
        <i className="fa fa-key" />
        <input type="password" name="" defaultValue="" placeholder="PASSWORD"   onChange={(eo) => {
                setpassword(eo.target.value);
              }} />
      </div>
      <div className="signup-row">
        <button type="submit"   onClick={(eo) => {
          eo.preventDefault()
              createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                navigate("/")
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
        }}>
          <i className="fa fa-arrow-circle-o-right" />
        </button>
      </div>
      <div className="form-bottom">
        <div className="remember">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="remember">
          <a href="#">Already Have Account?</a>
        </div>
      </div>
    </form>
  </div>
</div>
    </div>
  );
}

export default SignUp;
