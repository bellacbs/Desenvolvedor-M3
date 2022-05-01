import { base_url } from '../constants/base_url'

export const getData = (setData) => {

    fetch(base_url)
        .then((response) => {
            if (response.ok) {
                console.log(response.clone().json())
                return response.clone().json()
            }
            throw response
        })
        .then((data) => {
            setData(data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })

}