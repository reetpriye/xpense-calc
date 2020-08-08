import React from "react";

const InputBox = ({ text, classname }) => {
  return <input className={classname} placeholder={text} />;
};

export default InputBox;
