import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducts from '../components/products/CardProducts';
// import useRequestData from '../Hooks/useRequestData';
import Filter from '../components/filter/Filter';
import OrderBy from '../components/filter/OrderBy';
import Products from '../components/products/Products';

const Main = () => {
    // const [data] = useRequestData()
    const [data, setData] = useState([])



    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }, [])


    return (
        <main>
            <OrderBy/>
            <section>
            <Filter/>
            <Products data={data}/>
            </section>
        </main>
    )

}

export default Main;