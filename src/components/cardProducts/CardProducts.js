import React from 'react';

const CardProducts = ({product}) => {
    console.log(product)

    return(
        <div>
            <img src={product.image} alt={product.name}/>
            <span>{product.name}</span>
            <span>R$ {product.price}</span>
            <span>até {product.parcelamento[0]} de {product.parcelamento[1]}</span>
            <button>Comprar</button>
        </div>
    )

}

export default CardProducts;