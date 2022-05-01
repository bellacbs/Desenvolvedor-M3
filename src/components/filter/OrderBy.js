import React, { useState } from "react";
import { orderByFilter } from "../../constants/orderByFilter";

const OrderBy = ({ clicked, setClicked, setOrder }) => {
    const [showOrderBy, setShowOrderBy] = useState(false)

    const onClickHandleOrder = (event) => {
        console.log(event.target)
        setOrder(event.target.value)
        setClicked(!clicked)
    }

    const onClickHandleOrderMobile = (order) => {
        setOrder(order)
        setClicked(!clicked)
    }



    const onClickShowOrderBy = () => {
        setShowOrderBy(!showOrderBy)
        setClicked(!clicked)
    }

    const allOrderBy = orderByFilter.map((orderToSelected, index) => {
        return (
            <option className={"option-select"} key={index} value={orderToSelected}>{orderToSelected}</option>
        )
    })

    const allOrderByMobile = orderByFilter.map((orderToSelected, index) => {
        return (
            <p key={index} value={orderToSelected} onClick={() => onClickHandleOrderMobile(orderToSelected)} className={"options-order-mobile"}>{orderToSelected}</p>
        )
    })
    return (
        <>
            <div id="order-by-web">
                <select label="Ordenar por:" onChange={onClickHandleOrder}>
                    {allOrderBy}
                </select>
            </div>

            <div id="order-by-mobile">
                <div onClick={onClickShowOrderBy}>
                    <span>Ordernar {showOrderBy && <span>X</span>}</span>
                </div>

                {showOrderBy && <>{allOrderByMobile}</>}
            </div>
        </>
    )
}

export default OrderBy