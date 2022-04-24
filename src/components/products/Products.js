import React from "react";
import CardProducts from "./CardProducts";

const Products = ({data}) => {

    const products = data.length > 0 && data?.map((product, index) => {
        return (
            <div key={index}>
                <CardProducts product={product} />
            </div>
        )
    })

    return(
        <div id="products-container">
            {products}
        </div>
    )
}

export default Products