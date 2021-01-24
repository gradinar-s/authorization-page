import React from "react";

import classNames from "classnames";
import "./Footer.scss";

const Footer = ({ className, ...attrs }) => {
  const classes = classNames("footer", className);
  return (
    <ul className={classes} {...attrs}>
      <li>Contact</li>
      <li>Privacy</li>
      <li>Terms</li>
    </ul>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
