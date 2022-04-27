import React from 'react';
import { sizeFilter } from '../../constants/sizeFilter';
import { onClickHandleChecks } from '../../utils/onClickHandleChecks';

const SizeFilter = ({ clicked, setClicked, sizes, setSizes }) => {

    const allSizeFilter = sizeFilter.map((size, index) => {
        return (
            <label key={index} className="checkbox-label">
                <input
                    type="checkbox"
                    checked={size.isCheked}
                    onChange={() => onClickHandleChecks(sizes, sizeFilter, size, index, clicked, setClicked, setSizes)}
                />
                {size.name}
            </label>
        )
    })

    return (
        <div>
            <p>TAMANHO</p>
            {allSizeFilter}
        </div>
    )

}

export default SizeFilter;