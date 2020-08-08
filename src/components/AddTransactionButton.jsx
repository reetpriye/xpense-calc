import React from "react";

function AddTransactionButton({ text }) {
  return <div className={text.slice(1)}>{text}</div>;
}

export default AddTransactionButton;
