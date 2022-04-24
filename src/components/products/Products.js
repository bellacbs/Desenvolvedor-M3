import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import CardProducts from "./CardProducts";
import { colorsFilter } from "../../constants/colorsFilter";

const Products = ({ color, size, price, order, data }) => {

    console.log("colorFilter",colorsFilter)

    const products = data.length > 0 && data?.filter((product) => {
        // const filter = 0
        // for (let i = 0; i < colorsFilter.length; i++) {
        //     if(!colorsFilter[i].isChecked){
        //         filter++
        //     }
        // }

        // if(filter === colorsFilter.length +1){
        //     return true
        // }

        // for (let i = 0; i < colorsFilter.length; i++) {
        //     if(colorsFilter[i].isChecked){
        //         return true
        //     }
        // }



        if (color.length === 0) {
            return true
        }
        for (let i = 0; i < color.length; i++) {
            console.log(color[i])
            console.log(product.color)
            if (color[i] === product.color) {
                return true
            }
        }
    }).map((product, index) => {
        return (
            <div key={index}>
                <CardProducts product={product} />
            </div>
        )
    })


    return (
        <div id="products-container">
            {products}
        </div>
    )
}

export default Products