import React from 'react';
import { sizeFilter } from '../../constants/sizeFilter';
import DeselectedSize from '../sizeButton/DeselectedSize';
import SelectedSize from '../sizeButton/SelectedSize';

const SizeFilter = ({ clicked, setClicked, sizes, setSizes }) => {

    const allSizeFilter = sizeFilter.map((size, index) => {
        return (
            <div key={index}>
                {
                    size.isChecked ?
                        <SelectedSize
                            elementsAddFilter={sizes}
                            elementStaticFilter={sizeFilter}
                            selectedElement={size}
                            index={index}
                            clicked={clicked}
                            setClicked={setClicked}
                            setSizes={setSizes}
                        /> :
                        <DeselectedSize
                            elementsAddFilter={sizes}
                            elementStaticFilter={sizeFilter}
                            selectedElement={size}
                            index={index}
                            clicked={clicked}
                            setClicked={setClicked}
                            setSizes={setSizes}
                        />
                }
            </div>

        )
    })

    return (
        <div>
            <p>TAMANHOS</p>
            <div className={"size-container"}>
                {allSizeFilter}
            </div >
        </div>
    )

}

export default SizeFilter;