import React, { useEffect, useState } from "react";
import Global from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Grid from "./components/Grid";



function App() {

  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //saida
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    //entrada
    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); //s
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); //e

    // const total = Math.abs(income - expense).toFixed(2);
    const total = (Number(income) < Number(expense)) ? (expense - income).toFixed(2) : (income - expense).toFixed(2);


    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions)

    localStorage.getItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <Header />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
      <Main income={income} expense={expense} total={total} />
      
      
      <Global />
    </>
  );
}

export default App;
