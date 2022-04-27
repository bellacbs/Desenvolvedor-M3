import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = (props) => {
    const [cartProducts, setCartProducts] = useState([])


    return (
        <GlobalStateContext.Provider value={{ cartProducts, setCartProducts }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState