import React from "react";
import * as styles from "./styles"; // atribui o c para todos os itens

const Header = () => {
    return (
    <styles.Container>
        <styles.Header>
            <styles.Title>Controle Financeiro</styles.Title>
        </styles.Header>
    </styles.Container>
    );
};

export default Header;