import React, { useState } from "react";
import * as styles from "./styles";
import Grid from "../Grid";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    //Gerar id aleat
    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
            } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction)

        setDesc("");
        setAmount("");
    }

    return (
        <>
            <styles.Container>
                <styles.InputContent>
                    <styles.Label>Entrada / Saída</styles.Label>
                    <styles.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </styles.InputContent>

                <styles.InputContent>
                    <styles.Label>Valor</styles.Label>
                    <styles.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                />
                </styles.InputContent>

                <styles.RadioGroup>
                <styles.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <styles.Label htmlFor="rIncome">Entrada</styles.Label>

                <styles.Input
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <styles.Label htmlFor="rExpenses">Saída</styles.Label>
                
                </styles.RadioGroup>
                <styles.Button onClick={handleSave}>Salvar</styles.Button>
            </styles.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
        
    )
}

export default Form;