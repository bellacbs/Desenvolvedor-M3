import React from 'react';
import { priceFilter } from '../../constants/priceFilter';

const PriceFilter = () => {

    const allPriceFilter = priceFilter.map((price, index) => {
        return (
            <label key={index} class="checkbox-label">
                <input
                    type="checkbox"
                />
                {price}
            </label>
        )
    })

    return (
        <div class="checkbox-container">
            <p>FAIXA DE PREÇO</p>
            {allPriceFilter}
        </div>
    )

}

export default PriceFilter;