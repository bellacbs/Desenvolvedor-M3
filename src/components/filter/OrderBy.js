import React from "react";
import { orderByFilter } from "../../constants/orderByFilter";

const OrderBy = () => {

    const allOrderBy = orderByFilter.map((order, index) => {
        return (
            <option key={index} value={order}>{order}</option>
        )
    })
    return (
        <div id="order-by-container">
            <span id="shirt-title">Blusas</span>
            <select>
                {allOrderBy}
            </select>
        </div>
    )
}

export default OrderBy