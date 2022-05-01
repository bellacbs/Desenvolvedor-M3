import { base_url } from '../constants/base_url'

export const getData = (setData) => {

    fetch(base_url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then((data) => {
            setData(data)
        })
        .catch(() => {
            alert("Ocorreu um erro, tente novamente")
        })

}