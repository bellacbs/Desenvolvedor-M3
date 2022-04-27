import React from "react";
import { orderByFilter } from "../../constants/orderByFilter";

const OrderBy = ({ clicked, setClicked, setOrder }) => {

    const onClickHandleOrder = (event) => {
        setOrder(event.target.value)
        setClicked(!clicked)
    }

    const allOrderBy = orderByFilter.map((orderToSelected, index) => {
        return (
            <option key={index} value={orderToSelected}>{orderToSelected}</option>
        )
    })
    return (
        <div id="order-by-container">
            <span id="shirt-title">Blusas</span>
            <select name={'order'} onChange={onClickHandleOrder}>
                {allOrderBy}
            </select>
        </div>
    )
}

export default OrderBy