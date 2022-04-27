import React from 'react';
import { priceFilter } from '../../constants/priceFilter';
import { onClickHandleChecks } from '../../utils/onClickHandleChecks';

const PriceFilter = ({ clicked, setClicked, prices, setPrices }) => {

    const allPriceFilter = priceFilter.map((price, index) => {
        return (
            <label key={index} className="checkbox-label">
                <input
                    type="checkbox"
                    checked={price.isChecked}
                    onChange={() => onClickHandleChecks(prices, priceFilter, price, index, clicked, setClicked, setPrices)}
                />
                {price.name}
            </label>
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