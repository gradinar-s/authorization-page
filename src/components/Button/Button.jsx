import React from "react";
import classNames from "classnames";

import "./Button.scss";

const Button = ({ children, className, onClick, disabled, active, ...attrb }) => {
  const classes = classNames("btn", className, { active });
  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...attrb}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "",
  className: "",
  disabled: false,
  active: false,
  onClick: () => {},
};

export default Button;
