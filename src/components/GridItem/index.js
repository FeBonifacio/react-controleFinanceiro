import React from 'react';
import * as styles from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";



const GridItem = ({ item, onDelete}) => {
    return (
        <styles.Tr>
            <styles.Td>{item.desc}</styles.Td>
            <styles.Td>{item.amount}</styles.Td>
            <styles.Td alignCenter>
                {item.expense ? (
                <FaRegArrowAltCircleDown color="red" />
                ) : (
                <FaRegArrowAltCircleUp color="green" />
                )}
            </styles.Td>
            <styles.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </styles.Td>
    </styles.Tr>
    )
}

export default GridItem;