import React, { useState, useEffect } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = (props) => {
    const [cartProducts, setCartProducts] = useState([])

    const getCardProducts = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))

        if (!cart) {
            const newCart = []
            localStorage.setItem("cart", JSON.stringify(newCart))
            setCartProducts(newCart)
        } else {
            const newCart = cart
            localStorage.setItem("cart", JSON.stringify(newCart))
            setCartProducts(newCart)
        }
    }

    useEffect(() => {
        getCardProducts()
    }, [])

    return (
        <GlobalStateContext.Provider value={{ cartProducts, setCartProducts }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState