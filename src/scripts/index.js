/* Desenvolva sua lógica aqui */
import {render} from "./render.js";
import {insertedValues} from "./valuesData.js"
render(insertedValues)




const handleDeleteInsertedValue = (array) => {
    const buttons = document.querySelectorAll(".button__delete") 
    console.log(buttons)
}   


handleDeleteInsertedValue(insertedValues)