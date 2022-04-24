import React from 'react';
import { colorsFilter } from '../../constants/colorsFilter';

const ColorFilter = () => {

    const allColorFilter = colorsFilter.map((color) => {
        return (
            <label class="checkbox-label">
                <input
                    type="checkbox"
                />
                {color}
            </label>
        )
    })

    return (
        <div class="checkbox-container">
            <p>CORES</p>
            {allColorFilter}
        </div>
    )

}

export default ColorFilter;