import axios from "axios"
import { useState, useEffect } from 'react'


const useRequestData = () => {
    const [data, setData] = useState([])


    useEffect(() =>{
        axios.get("http://localhost:5000/products")
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    },[])

    return data
}

export default useRequestData