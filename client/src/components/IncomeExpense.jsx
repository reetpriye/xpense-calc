import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utils/format";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="total-income">Total Income:₹{numberWithCommas(income)}</div>
      <div className="total-expense">Total Expense₹{numberWithCommas(expense)}</div>
    </>
  );
};

export default IncomeExpense;
