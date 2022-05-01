import React, { useState } from 'react';
import { sizeFilter } from '../../constants/sizeFilter';
import DeselectedSize from '../sizeButton/DeselectedSize';
import SelectedSize from '../sizeButton/SelectedSize';
import UpArrow from '../arrows/UpArrow';
import DownArrow from '../arrows/DownArrow';
import onClickShowFilter from '../../utils/onClickShowFilter';

const SizeFilter = ({ clicked, setClicked, sizes, setSizes }) => {
    const [showSizeFilter, setShowSizeFilter] = useState(false)

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
        <>
            <div id={"size-container-web"}>
                <p>TAMANHOS</p>
                <div className={"size-container"}>
                    {allSizeFilter}
                </div >
            </div>
            <div className="size-container-mobile">
                <div onClick={() => onClickShowFilter(showSizeFilter, setShowSizeFilter, clicked, setClicked)}>
                    <span>TAMANHO {showSizeFilter ? <DownArrow /> : <UpArrow />}</span>
                </div>

                {showSizeFilter && <>{allSizeFilter}</>}
            </div>
        </>
    )

}

export default SizeFilter;