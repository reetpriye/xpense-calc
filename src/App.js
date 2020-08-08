import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionsList";
import InputBox from "./components/InputBox";

import "./App.css";
import AddTransactionButton from "./components/AddTransactionButton";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="top-container">
          <InputBox text={"Amount in ₹"} classname={"amount_input_box"} />
          <InputBox
            text={"Transaction Reason"}
            classname={"transaction_reason_input_box"}
          />
          <AddTransactionButton text={"+Income"} />
          <AddTransactionButton text={"-Expense"} />
          <Balance />
        </div>
        {/* <Transaction /> */}
        {/* <TransactionList /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
