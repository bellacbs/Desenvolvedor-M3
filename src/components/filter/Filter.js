import React from 'react';
import ColorFilter from './ColorsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';

const Filter = ({color,setColors, setSize, setPrice, onClickHandleChecks}) => {
    console.log("colorfilter", color)

    return(
        <div>
            <ColorFilter color={color} setColors={setColors} onClickHandleChecks={onClickHandleChecks}/>
            <SizeFilter setSize={setSize}/>
            <PriceFilter setPrice={setPrice}/>
        </div>
    )

}

export default Filter;