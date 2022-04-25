import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import CardProducts from "./CardProducts";
import { colorsFilter } from "../../constants/colorsFilter";
import { priceFilter } from "../../constants/priceFilter";

const Products = ({ color, sizes, prices, order, data }) => {

    console.log("colorFilter",colorsFilter)

    const products = data.length > 0 && data?.filter((product) => {
        if (color.length === 0) {
            return true
        }
        for (let i = 0; i < color.length; i++) {
            if (color[i] === product.color) {
                return true
            }
        }
    }).filter((product) =>{
        if(prices.length === 0){
            return true
        }

        let selected = false

        for(let i = 0; i <prices.length; i++){
            if(prices[i] === "de R$0 até R$50"){
                selected = product.price >=0 && product.price <= 50
            }
            if(prices[i] === "de R$51 até R$150"){
                selected = product.price >=51 && product.price <= 150
            }
            if(prices[i] === "de R$151 até R$300"){
                selected = product.price >=151 && product.price <= 300
            }
            if(prices[i] === "de R$301 até R$500"){
                selected = product.price >=301 && product.price <= 500
            }
            if(prices[i] === "a partir de R$ 500"){
                selected = product.price >=500
            }

            if(selected === true){
                break;
            }
        }

        return selected

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