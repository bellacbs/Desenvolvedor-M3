import React from 'react';
import { colorsFilter } from '../../constants/colorsFilter';
import EmptyBox from '../checks/EmptyBox';
import FullBox from '../checks/FullBox';

const ColorFilter = ({ clicked, setClicked, color, setColors }) => {

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
        <div className="checkbox-container">
            <p>CORES</p>
            {allColorFilter}
        </div>
    )

}

export default ColorFilter;