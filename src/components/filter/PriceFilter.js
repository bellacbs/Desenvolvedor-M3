import React from 'react';
import { priceFilter } from '../../constants/priceFilter';
import EmptyBox from '../checks/EmptyBox';
import FullBox from '../checks/FullBox';

const PriceFilter = ({ clicked, setClicked, prices, setPrices }) => {

    const allPriceFilter = priceFilter.map((price, index) => {
        return (
            <div key={index} className="checkbox">
                {price.isChecked ?
                    <FullBox
                        elementsAddFilter={prices}
                        elementStaticFilter={priceFilter}
                        selectedElement={price}
                        index={index}
                        clicked={clicked}
                        setClicked={setClicked}
                        setElement={setPrices}
                    /> :
                    <EmptyBox
                        elementsAddFilter={prices}
                        elementStaticFilter={priceFilter}
                        selectedElement={price}
                        index={index}
                        clicked={clicked}
                        setClicked={setClicked}
                        setElement={setPrices}
                    />}
                <span>{price.name}</span>

            </div>
        )
    })

    return (
        <div className="checkbox-container">
            <p>FAIXA DE PREÇO</p>
            {allPriceFilter}
        </div>
    )

}

export default PriceFilter;