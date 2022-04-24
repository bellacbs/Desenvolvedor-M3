import React from 'react';
import { sizeFilter } from '../../constants/sizeFilter';

const SizeFilter = () => {
    
    const allSizeFilter = sizeFilter.map((size, index) =>{
        return(
            <label key={index}>
                <input
                type= "checkbox"
                placeholder={`${size}`}
                name={`${size}`}
                />
                {size}
            </label>
        )
    })

    return(
        <div>
            <p>TAMANHO</p>
            {allSizeFilter}
        </div>
    )

}

export default SizeFilter;