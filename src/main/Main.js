import React from 'react';
import { useState, useEffect } from 'react';
import Filter from '../components/filter/Filter';
import OrderBy from '../components/filter/OrderBy';
import Products from '../components/products/Products';
import { getData } from '../services/getData'

const Main = () => {
    const [data, setData] = useState([])
    const [color, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const [prices, setPrices] = useState([])
    const [order, setOrder] = useState("")
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        getData(setData)
    }, [clicked])


    return (
        <main>
            <OrderBy clicked={clicked} setClicked={setClicked} setOrder={setOrder} />
            <section>
                <Filter
                    clicked={clicked}
                    setClicked={setClicked}
                    color={color}
                    setColors={setColors}
                    sizes={sizes}
                    setSizes={setSizes}
                    prices={prices}
                    setPrices={setPrices}
                />
                <Products
                    clicked={clicked}
                    setClicked={setClicked}
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