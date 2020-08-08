import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
          placeholder="Amount in ₹"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
          placeholder="Transaction Reason"
        />
      </form>
    </>
  );
};

export default AddTransaction;
