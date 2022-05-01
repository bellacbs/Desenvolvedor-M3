import { base_url } from '../constants/base_url'

export const getData = (setData) => {

    fetch(base_url)
        .then((response) => {
            if (response.ok) {
                return response.clone().json()
            }
            throw response
        })
        .then((data) => {
            setData(data)
        })
        .catch((error) => {
            alert(error, "Tente novamente")
        })

}