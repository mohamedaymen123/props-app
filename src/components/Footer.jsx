import React from "react";
import PropTypes from "prop-types";

const Footer = ({ normal, children }) => {
  //   console.log(children);
  return (
    <div>
      <h6>{normal}</h6>
      <h3>{children}</h3>
    </div>
  );
};
Footer.defaultProps = {
  normal: "this is a default props",
};
Footer.propTypes = {
  children: PropTypes.string,
};
export default Footer;