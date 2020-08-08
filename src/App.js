import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import AddTransactionButton from "./components/AddTransactionButton";
import TransactionList from "./components/TransactionList";
import IncomeExpense from "./components/IncomeExpense";
import Footer from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

export default function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <div className="top-container">
          <AddTransaction />
          <AddTransactionButton text={"+Income"} />
          <AddTransactionButton text={"-Expense"} />
          <Balance />
        </div>
        <TransactionList />
        {/* <Footer /> */}
        <IncomeExpense />
      </div>
    </GlobalProvider>
  );
}
