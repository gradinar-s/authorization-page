import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import style from "./AuthorizationForm.module.scss";

const AuthorizationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouch, setEmailTouch] = useState(false);
  const [passwordTouch, setPasswordTouch] = useState(false);
  const [emailError, setEmailError] = useState("Invalid email");
  const [passwordError, setPasswordError] = useState("Invalid format too short");

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase())) setEmailError("Invalid email");
    else setEmailError("");
  };
  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 3) setPasswordError("Invalid format too short");
    else setPasswordError("");
  };
  const onBlurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "email":
        setEmailTouch(true);
        break;
      case "password":
        setPasswordTouch(true);
        break;
    }
  };

  return (
    <form className={style.authorizationForm}>
      <div className={style.email}>
        <Input
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => onBlurHandler(e)}
          error={emailTouch && emailError ? emailError : null}
          complete={!emailError ? true : null}
          value={email}
          type="email"
          id="email"
          label="Email"
          className={style.field}
        ></Input>
      </div>
      <div className={style.password}>
        <Input
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => onBlurHandler(e)}
          error={passwordTouch && passwordError ? passwordError : null}
          complete={!passwordError ? true : null}
          value={password}
          type="password"
          id="password"
          label="Password"
          className={style.passwordField}
        ></Input>
        <span className={style.forgotPassword}>Forgot your password?</span>
      </div>
      <Button disabled={emailError || passwordError} className={style.btnSignIn}>
        Sign in
      </Button>
    </form>
  );
};

export default AuthorizationForm;
