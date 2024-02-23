import React from "react";
import GridItem from "../GridItem";
import * as styles from "./styles";

const Grid = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <styles.Table>
            <styles.Thead>
                <styles.Tr>
                    <styles.Th width={40}>Descrição</styles.Th>
                    <styles.Th width={40}>Valor</styles.Th>
                    <styles.Th width={10} alignCenter>Tipo</styles.Th>
                    <styles.Th width={10}></styles.Th> {/* exclusão */}
                </styles.Tr>
            </styles.Thead>
            <styles.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </styles.Tbody>
        </styles.Table>
    );
}

export default Grid;