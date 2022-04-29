import React from "react";
import { orderByFilter } from "../../constants/orderByFilter";

const OrderBy = ({ clicked, setClicked, setOrder }) => {

    const onClickHandleOrder = (event) => {
        setOrder(event.target.value)
        setClicked(!clicked)
    }

    const allOrderBy = orderByFilter.map((orderToSelected, index) => {
        return (
            <option className={"option-select"} key={index} value={orderToSelected}>{orderToSelected}</option>
        )
    })
    return (
        <select label="Ordenar por:" onChange={onClickHandleOrder}>
            {allOrderBy}
        </select>
    )
}

export default OrderBy