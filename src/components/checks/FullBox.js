import React from 'react'
import { onClickHandleChecks } from '../../utils/onClickHandleChecks'

const FullBox = ({ elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement }) => {
    return (
        <div className="empty-box">
            <div className="full-box" onClick={() => onClickHandleChecks(elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement)}>

            </div>

        </div>
    )
}

export default FullBox