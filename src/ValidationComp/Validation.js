import React from "react";

const Validation = (props) => {
  return (
    <div>
      {props.inputLength < 5 ? "text too short" : "Text is long enough"}
      <p>Input Length: {props.inputLength}</p>
    </div>
  );
};

export default Validation;
