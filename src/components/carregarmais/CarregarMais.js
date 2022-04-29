import React, { useState } from 'react'
import CardProducts from '../products/CardProducts'

const CarregarMais = ({ clicked, setClicked, data, index }) => {
    const [load, setLoad] = useState(false)

    const onClickLoad = () => {
        setLoad(!load)
    }

    const product = data.length > 0 && data?.map((product, indexLoad) => {
        if (indexLoad <= index) {
            return <></>
        }

        return (
            <div key={indexLoad}>
                <CardProducts clicked={clicked} setClicked={setClicked} product={product} />
            </div>
        )
    })



    return (
        <>
            {!load && <button className="btn-load" onClick={onClickLoad}>CARREGAR MAIS</button>}
            {load && product}
        </>
    )
}

export default CarregarMais