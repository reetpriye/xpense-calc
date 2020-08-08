import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onIncomeSubmit = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newIncomeTransaction);
  };

  const onExpenseSubmit = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt("-" + amount, 10)
    };

    addTransaction(newExpenseTransaction);
  };

  return (
    <>
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
      <button onClick={onIncomeSubmit} className="income-btn">
        +Income
      </button>
      <button onClick={onExpenseSubmit} className="expense-btn">
        -Expense
      </button>
    </>
  );
};

export default AddTransaction;
