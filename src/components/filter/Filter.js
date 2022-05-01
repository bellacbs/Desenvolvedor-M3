import React from 'react';
import ColorFilter from './ColorsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';

const Filter = ({ clicked, setClicked, color, setColors, sizes, setSizes, prices, setPrices }) => {

    return (
        <>
            <div id={"filter-container-web"}>
                <ColorFilter clicked={clicked} setClicked={setClicked} color={color} setColors={setColors} />
                <SizeFilter clicked={clicked} setClicked={setClicked} sizes={sizes} setSizes={setSizes} />
                <PriceFilter clicked={clicked} setClicked={setClicked} prices={prices} setPrices={setPrices} />
            </div>

            <div id={"filter-container-mobile"}>
                <div>Filtrar</div>

            </div>
        </>
    )

}

export default Filter;