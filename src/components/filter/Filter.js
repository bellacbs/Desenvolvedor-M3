import React, { useState } from 'react';
import ColorFilter from './ColorsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import onClickShowFilter from '../../utils/onClickShowFilter';

const Filter = ({ clicked, setClicked, color, setColors, sizes, setSizes, prices, setPrices }) => {
    const [showFilter, setShowFilter] = useState(false)

    const onClickClearFilter = () => {
        setColors([])
        setSizes([])
        setPrices([])
        setOrder([])
        setClicked(!clicked)
    }


    return (
        <>
            <div id={"filter-container-web"}>
                <ColorFilter clicked={clicked} setClicked={setClicked} color={color} setColors={setColors} />
                <SizeFilter clicked={clicked} setClicked={setClicked} sizes={sizes} setSizes={setSizes} />
                <PriceFilter clicked={clicked} setClicked={setClicked} prices={prices} setPrices={setPrices} />
            </div>

            <div id={"filter-container-mobile"}>

                <div onClick={() => onClickShowFilter(showFilter, setShowFilter, clicked, setClicked)}>
                    <span>Filtrar {showFilter && <span>X</span>}</span>
                </div>
                {showFilter && <>
                    <ColorFilter clicked={clicked} setClicked={setClicked} color={color} setColors={setColors} />
                    <SizeFilter clicked={clicked} setClicked={setClicked} sizes={sizes} setSizes={setSizes} />
                    <PriceFilter clicked={clicked} setClicked={setClicked} prices={prices} setPrices={setPrices} />
                </>}
                {showFilter && <>
                    <button onClick={() => onClickShowFilter(showFilter, setShowFilter, clicked, setClicked)}>APLICAR</button>
                    <button onClick={onClickClearFilter}>LIMPAR</button>
                </>}

            </div>
        </>
    )

}

export default Filter;