import {render, filterButtons} from "./render.js";
import {insertedValues} from "./valuesData.js"

export const handleRegisterForm = (array) => {
    const modal = document.querySelector(".modal__controller")
    const input = document.querySelector(".modal__controller > form > input")
    // const buttonClose = document.querySelector(".button__closeModal")
    const buttonEntry = document.querySelector(".button_entry")
    const buttonExit = document.querySelector(".button__exit")
    const buttonCancel = document.querySelector(".button__cancel")
    const buttonInsertValue = document.querySelector(".button__insertValue")
    
    let newInsertedValue = {id: 0, value: 0, categoryID: 0}
    let newCategoryId = -1
    
    
    buttonEntry.addEventListener('click', (event) => {
        event.preventDefault()
        
        newCategoryId = 0
    })
    
    buttonExit.addEventListener('click', (event) => {
        event.preventDefault()
        
        newCategoryId = 1
    })
    
    buttonInsertValue.addEventListener('click', (event) => {
        event.preventDefault()
        
        newInsertedValue.id = array.length + 1 
        
        newInsertedValue.value = Number(input.value)
        
        newInsertedValue.categoryID = newCategoryId
        
        array.push(newInsertedValue)
        
        render(array)
        filterButtons()
        modal.close()
    })
    
}
handleRegisterForm(insertedValues)