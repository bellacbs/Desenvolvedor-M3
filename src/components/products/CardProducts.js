import React, { useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const CardProducts = ({ clicked, setClicked, product }) => {
    const { setCartProducts } = useContext(GlobalStateContext)

    const toByProducts = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))

        if (!cart) {
            const newCart = []
            newCart.push(product)
            localStorage.setItem("cart", JSON.stringify(newCart))
            setCartProducts(newCart)
        } else {
            const newCart = cart
            localStorage.removeItem('cart')
            newCart.push(product)
            localStorage.setItem("cart", JSON.stringify(newCart))
            setCartProducts(newCart)
        }

        setClicked(!clicked)
    }

    return (
        <div className="card-container">
            <img className="img-product" src={product.image} alt={product.name} />
            <span className="product-name">{product.name.toUpperCase()}</span>
            <span className="product-price">R$ {product.price.toFixed(2).replace(".", ",")}</span>
            <span className="installment-purchases">até {product.parcelamento[0]} de R$ {product.parcelamento[1].toFixed(2).replace(".", ",")}</span>
            <button className="btn-by-products" onClick={toByProducts}>Comprar</button>
        </div>
    )

}

export default CardProducts;