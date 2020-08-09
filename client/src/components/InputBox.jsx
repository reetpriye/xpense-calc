import React from "react";

const InputBox = ({ text, classname }) => {
  return <input type="text" className={classname} placeholder={text} />;
};

export default InputBox;
