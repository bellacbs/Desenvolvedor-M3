import React from 'react';
import ColorFilter from './ColorsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';

const Filter = ({clicked, setClicked, color,setColors,sizes,  setSizes, prices, setPrices, onClickHandleChecks}) => {
    console.log("colorfilter", color)

    return(
        <div>
            <ColorFilter clicked={clicked} setClicked={setClicked} color={color} setColors={setColors} onClickHandleChecks={onClickHandleChecks}/>
            <SizeFilter sizes={sizes} setSizes={setSizes}/>
            <PriceFilter clicked={clicked} setClicked={setClicked} prices={prices} setPrices={setPrices}/>
        </div>
    )

}

export default Filter;