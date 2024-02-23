import React, { useState, useEffect } from 'react';

const Calc = () => {
    const data = localStorage.getItem('transactions'); // Pegar a info do localS
    // Verificar se existem
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        //Pegar saida
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount))

        //Pegar entrada
        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); //saida
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); //entrada

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);

    }, [transactionsList])
}

export default Calc;