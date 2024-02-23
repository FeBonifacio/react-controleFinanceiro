import React from "react";
import * as styles from "./styles";

const Card  = ({ title, value }) => {
    return (
        <styles.Container>
            <styles.Header>
                <styles.HeaderTitle>{ title }</styles.HeaderTitle>
            </styles.Header>
            <styles.Valores>{value}</styles.Valores>
        </styles.Container>
    );
}

export default Card;