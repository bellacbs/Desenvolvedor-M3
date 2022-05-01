import React, { useState } from 'react';
import { colorsFilter } from '../../constants/colorsFilter';
import EmptyBox from '../checks/EmptyBox';
import FullBox from '../checks/FullBox';
import UpArrow from '../arrows/UpArrow';
import DownArrow from '../arrows/DownArrow';
import onClickShowFilter from '../../utils/onClickShowFilter';

const ColorFilter = ({ clicked, setClicked, color, setColors }) => {
    const [showColorFilter, setShowColorFilter] = useState(false)

    const allColorFilter = colorsFilter.map((colorFilter, index) => {
        return (
            <div key={index} className="checkbox">
                {colorFilter.isChecked ?
                    <FullBox
                        elementsAddFilter={color}
                        elementStaticFilter={colorsFilter}
                        selectedElement={colorFilter}
                        index={index}
                        clicked={clicked}
                        setClicked={setClicked}
                        setElement={setColors}
                    /> :
                    <EmptyBox
                        elementsAddFilter={color}
                        elementStaticFilter={colorsFilter}
                        selectedElement={colorFilter}
                        index={index}
                        clicked={clicked}
                        setClicked={setClicked}
                        setElement={setColors}
                    />}
                <span>{colorFilter.name}</span>
            </div>
        )
    })

    return (
        <>
            <div className="checkbox-container-web">
                <p>CORES</p>
                {allColorFilter}
            </div>

            <div className="checkbox-container-mobile">
                <div onClick={() => onClickShowFilter(showColorFilter, setShowColorFilter, clicked, setClicked)}>
                    <span>CORES {showColorFilter ? <DownArrow /> : <UpArrow />}</span>
                </div>

                {showColorFilter && <>{allColorFilter}</>}
            </div>
        </>
    )

}

export default ColorFilter;