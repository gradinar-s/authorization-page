import React from "react";

import Logotype from "./components/Logotype/Logotype";
import AuthorizationBlock from "./components/AuthorizationBlock/AuthorizationBlock";
import PresentationSlider from "./components/PresentationSlider/PresentationSlider";

import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Logotype className={style.logotype} />
        <PresentationSlider />
        <AuthorizationBlock />
      </div>
    </div>
  );
};

export default App;
