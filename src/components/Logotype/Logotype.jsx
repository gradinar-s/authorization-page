import React from "react";
import logotype from "../../assets/img/logotype.svg";
import classNames from "classnames";

import "./Logotype.scss";

const Logotype = ({ className, ...attrs }) => {
  const classes = classNames("logotype", className);
  return <img className={classes} src={logotype} alt="" />;
};

Logotype.defaultProps = {
  className: "",
};

export default Logotype;
