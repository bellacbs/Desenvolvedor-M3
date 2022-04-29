import React, { useState } from "react";
import CardProducts from "./CardProducts";
import { interval } from "../../constants/priceFilter";
import CarregarMais from "../carregarmais/CarregarMais";

const Products = ({ clicked, setClicked, color, sizes, prices, order, data }) => {

    const [load, setLoad] = useState(false)
    const [quantityLoad, setQuantityLoad] = useState(8)

    const onClickLoad = () => {
        let sumQuantity = quantityLoad
        sumQuantity = sumQuantity + 9
        setQuantityLoad(sumQuantity)
        setLoad(!load)
    }

    const products = data.length > 0 && data?.filter((product) => {
        if (color.length === 0) {
            return true
        }
        for (let i = 0; i < color.length; i++) {
            if (color[i] === product.color) {
                return true
            }
        }
    }).filter((product) => {
        if (sizes.length === 0) {
            return true
        }

        for (const sizeSelected of sizes) {
            for (const sizeProduct of product.size) {
                if (sizeSelected === sizeProduct) {
                    return true
                }
            }
        }
    }).filter((product) => {
        if (prices.length === 0) {
            return true;
        }

        for (let i = 0; i < prices.length; i++) {
            const minimum = interval[prices[i]][0];
            const maximum = interval[prices[i]][1];
            if (product.price >= minimum && product.price <= maximum) {
                return true;
            }
        }

    }).sort((a, b) => {
        if (order === "Menor Preço" && a.price < b.price) {
            return -1
        }

        if (order === "Maior Preço" && a.price > b.price) {
            return -1
        }

        if (order === "Mais recentes" && new Date(a.date).getTime() > new Date(b.date).getTime()) {
            return -1
        }

        return 0

    }).map((product, index) => {

        if (index <= quantityLoad) {
            return (
                <div key={index}>
                    <CardProducts clicked={clicked} setClicked={setClicked} product={product} />
                </div>
            )
        }

    })


    return (
        <div id="products-load-container">
            <div id="products-container">
                {products}
            </div>
            {data.length > 0 && quantityLoad < data.length && <button className="btn-load" onClick={onClickLoad}>CARREGAR MAIS</button>}
        </div>
    )
}

export default Products