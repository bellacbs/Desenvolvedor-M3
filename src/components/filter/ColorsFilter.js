import React from 'react';
import { colorsFilter } from '../../constants/colorsFilter';
import { onClickHandleChecks } from '../../utils/onClickHandleChecks';

const ColorFilter = ({clicked,setClicked, color, setColors}) => {

    const allColorFilter = colorsFilter.map((colorFilter, index) => {
        return (
            <label key={index} class="checkbox-label">
                <input
                    type="checkbox"
                    checked={colorFilter.isChecked}
                    onChange={() => onClickHandleChecks(color, colorsFilter, colorFilter, index, clicked, setClicked, setColors)}
                />
                {colorFilter.name}
            </label>
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