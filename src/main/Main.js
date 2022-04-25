import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../components/filter/Filter';
import OrderBy from '../components/filter/OrderBy';
import Products from '../components/products/Products';
import { base_url } from '../constants/base_url'
import { getData } from '../services/getData'
import { colorsFilter } from '../constants/colorsFilter';

const Main = () => {
    const [data, setData] = useState([])
    const [color, setColors] = useState([])
    const [sizes, setSize] = useState([])
    const [prices, setPrices] = useState([])
    const [order, setOrder] = useState("")
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        getData(setData)
    }, [clicked])


    return (
        <main>
            <OrderBy setOrder={setOrder} />
            <section>
                <Filter
                    clicked={clicked}
                    setClicked={setClicked}
                    color={color}
                    setColors={setColors}
                    sizes={sizes}
                    setSize={setSize}
                    prices={prices}
                    setPrices={setPrices}
                />
                <Products
                    color={color}
                    sizes={sizes}
                    prices={prices}
                    order={order}
                    data={data}
                />
            </section>
        </main>
    )

}

export default Main;