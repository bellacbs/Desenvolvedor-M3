import React from 'react'
import { onClickHandleChecks } from '../../utils/onClickHandleChecks'

const DeselectedSize = ({ elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement }) => {
    return (
        <div className={"deselectedSize"} onClick={() => onClickHandleChecks(elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement)}>
            <span>{selectedElement.name}</span>
        </div>
    )
}

export default DeselectedSize