import React from 'react';
import ColorFilter from './ColorsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';

const Filter = () => {

    return(
        <div>
            <ColorFilter/>
            <SizeFilter/>
            <PriceFilter/>
        </div>
    )

}

export default Filter;