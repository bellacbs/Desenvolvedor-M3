import React from 'react';

const CardProducts = ({product}) => {
    console.log(product)

    return(
        <div class="card-container">
            <img class="img-product" src={product.image} alt={product.name}/>
            <span class="product-name">{product.name.toUpperCase()}</span>
            <span class="product-price">R$ {product.price.toFixed(2).replace(".", ",")}</span>
            <span class="installment-purchases">até {product.parcelamento[0]} de R$ {product.parcelamento[1].toFixed(2).replace(".", ",")}</span>
            <button class="btn-by-products">Comprar</button>
        </div>
    )

}

export default CardProducts;