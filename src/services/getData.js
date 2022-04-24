import axios from 'axios'
import { base_url } from '../constants/base_url'

export const getData = (setData) => {
    axios.get(base_url)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            alert("Ocorreu um erro, tente novamente")
        })
}