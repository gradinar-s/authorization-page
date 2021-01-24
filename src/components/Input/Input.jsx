import React from "react";
import classNames from "classnames";

import "./Input.scss";

const Input = ({ id, className, label, complete, error, ...attrs }) => {
  const classes = classNames(
    "input",
    error ? "error" : null,
    complete ? "complete" : null,
    className
  );
  return (
    <div className={"inputWrapper"}>
      {label && (
        <label className="inputLabel" htmlFor={id}>
          {label}
        </label>
      )}
      {error && <span className="inputError">{error}</span>}
      <input name={id} id={id} className={classes} {...attrs} />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  label: "",
  error: "",
};

export default Input;
