import React from 'react';
import { colorsFilter } from '../../constants/colorsFilter';

const ColorFilter = ({color, setColors}) => {

    console.log("ColorFilter", color)

    const onClickHandleChecks = (colorFilter, index) => {
        const newColor = color;
        if(!colorFilter.isChecked){
            colorsFilter[index].isChecked = true
            newColor.push(colorFilter.name)
        }else if(colorFilter.isChecked){
            colorsFilter[index].isChecked = false
            const indexToRemove = color.findIndex((element) => element === colorFilter.name)
            newColor.splice(indexToRemove, 1)
        }
        setColors(newColor)
    }

    const allColorFilter = colorsFilter.map((colorFilter, index) => {
        return (
            <label key={index} class="checkbox-label">
                <input
                    type="checkbox"
                    checked={colorFilter.isChecked}
                    onChange={() => onClickHandleChecks(colorFilter, index)}
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