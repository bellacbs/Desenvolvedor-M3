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
    const [size, setSize] = useState([])
    const [price, setPrice] = useState([])
    const [order, setOrder] = useState("")

    console.log("main", color)


    useEffect(() => {
        getData(setData)
    }, [])

    // useEffect(() => {
    //     setColors(colorsFilter)
    // }, [colorsFilter])


    return (
        <main>
            <OrderBy setOrder={setOrder} />
            <section>
                <Filter
                    color={color}
                    setColors={setColors}
                    setSize={setSize}
                    setPrice={setPrice}
                />
                <Products
                    color={color}
                    size={size}
                    price={price}
                    order={order}
                    data={data}
                />
            </section>
        </main>
    )

}

export default Main;