import React from 'react'
import { onClickHandleChecks } from '../../utils/onClickHandleChecks'

const EmptyBox = ({ elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement }) => {
    return (
        <div className="empty-box" onClick={() => onClickHandleChecks(elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement)}>

        </div>
    )
}

export default EmptyBox