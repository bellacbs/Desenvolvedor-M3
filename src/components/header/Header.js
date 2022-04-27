import React, { useState, useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const Header = () => {

    const { cartProducts } = useContext(GlobalStateContext)

    return (
        <header>
            <img id="img-logo" src="../../img/logo-m3.png" alt="Logo-M3" />
            <div>
                <img id="img-cart" src="../../img/img-cart.png" alt="Carrinho" />
                <span>{cartProducts.length}</span>
            </div>
        </header>
    )

}

export default Header;