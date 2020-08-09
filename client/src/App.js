import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import IncomeExpense from "./components/IncomeExpense";
import Footer from "./components/Footer";

import "./fontawesomeIcons";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

export default function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <div className="top-container">
          <Balance />
          <AddTransaction />
        </div>
        <div className="total-balance-container">
          <IncomeExpense />
        </div>
        <div className="transaction-container">
          <TransactionList />
        </div>
      </div>
      <Footer />
    </GlobalProvider>
  );
}
