import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducts from '../components/cardProducts/CardProducts';
// import useRequestData from '../Hooks/useRequestData';
import Filter from '../components/filter/Filter';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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


    console.log(data)

    const products = data.length > 0 && data?.map((product, index) => {
        return (
            <div key={index}>
                <CardProducts product={product} />
            </div>
        )
    })

    return (
        <div>
            <Header />
            <Filter />
            {products}
            <Footer />
        </div>
    )

}

export default Main;