import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.classButton} fw-bold d-flex  mx-auto fs-xsm font-opensans lh_sm letter-s-0_5 col-white button-style`}
    >
      {props.textInput}
    </button>
  );
};

export default Button;
