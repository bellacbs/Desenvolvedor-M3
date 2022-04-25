export const onClickHandleChecks = (elementsAddFilter, elementStaticFilter, selectedElement, index, clicked, setClicked, setElement) =>{
    const newElementsAddFilter = elementsAddFilter;
        if(!selectedElement.isChecked){
            elementStaticFilter[index].isChecked = true
            newElementsAddFilter.push(selectedElement.name)
        }else if(selectedElement.isChecked){
            elementStaticFilter[index].isChecked = false
            const indexToRemove = elementsAddFilter.findIndex((element) => element === selectedElement.name)
            newElementsAddFilter.splice(indexToRemove, 1)
        }

        console.log(newElementsAddFilter)
        setClicked(!clicked)
        setElement(newElementsAddFilter)
}