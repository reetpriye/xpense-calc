import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionsList";
import InputBox from "./components/InputBox";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container2">
          <InputBox />
          <Balance />
        </div>
        {/* <Transaction /> */}
        {/* <TransactionList /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
