import React from 'react'
import { onClickHandleChecks } from '../../utils/onClickHandleChecks'

const SelectedSize = ({ elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement }) => {
    return (
        <div className={"selectedSize"} onClick={() => onClickHandleChecks(elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement)}>
            <span>{selectedElement.name}</span>
        </div>
    )
}

export default SelectedSize