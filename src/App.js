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
          <InputBox />
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
