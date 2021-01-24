import React from "react";

import Logotype from "../Logotype/Logotype";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Footer from "../Footer/Footer";

import style from "./AuthorizationBlock.module.scss";

const AuthorizationBlock = () => {
  return (
    <div className={style.authorizationWrapper}>
      <Logotype className={style.logo} />
      <h1 className={style.title}>Sing in</h1>
      <div className={style.description}>
        <span>Don’t have an Xcellerate account?</span>
        <span className={style.singUpNow}>Sign up now</span>
      </div>
      <AuthorizationForm />
      <Footer className={style.footerWrapper} />
    </div>
  );
};

export default AuthorizationBlock;
