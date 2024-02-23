import React from "react";
import * as styles from './styles';
import Card from "../Card";


const Main = ({ income, expense, total }) => {
    return  (
        <div>
            <styles.Container>
                <Card title="Entrada" value={income}/>
                <Card title="Saida" value={expense}/>
                <Card title="Total" value={total}/>
            </styles.Container>
        </div>
    );
}

export default Main