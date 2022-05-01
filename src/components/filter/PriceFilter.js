import React, { useState } from 'react';
import { priceFilter } from '../../constants/priceFilter';
import EmptyBox from '../checks/EmptyBox';
import FullBox from '../checks/FullBox';
import UpArrow from '../arrows/UpArrow';
import DownArrow from '../arrows/DownArrow';
import onClickShowFilter from '../../utils/onClickShowFilter';

const PriceFilter = ({ clicked, setClicked, prices, setPrices }) => {
    const [showPriceFilter, setShowPriceFilter] = useState(false)

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
        <>
            <div className="checkbox-container-web">
                <p>FAIXA DE PREÇO</p>
                {allPriceFilter}
            </div>
            <div className="checkbox-container-mobile">
                <div onClick={() => onClickShowFilter(showPriceFilter, setShowPriceFilter, clicked, setClicked)}>
                    <span className={"options-filter"}>FAIXA DE PREÇO{showPriceFilter ? <DownArrow /> : <UpArrow />}</span>
                </div>

                {showPriceFilter && <>{allPriceFilter}</>}
            </div>
        </>
    )

}

export default PriceFilter;