export const render = (array) => {
    const mainList = document.querySelector(".mainList")

    mainList.innerHTML = ''

    array.forEach((insertedValue) => {
        const card = createCard(insertedValue)

        mainList.appendChild(card)


    });

}

const createCard = (insertedValue) => {
    const card = document.createElement("li")
    const value = document.createElement('h2')
    const categoryID = document.createElement("p")
    const deleteBtn = document.createElement("img")
    const divCard = document.createElement("div")

    value.classList.add("card__value")
    categoryID.classList.add("card__categoryID")
    card.classList.add('list__card')
    divCard.classList.add("div__card")
    deleteBtn.classList.add(".button__delete")

    if (insertedValue.categoryID == 0) {
        categoryID.innerText = "Entrada"
    } else if (insertedValue.categoryID == 1) {
        categoryID.innerText = "Saída"
    }

    value.innerText = `R$ ${insertedValue.value.toFixed(2)}`
    deleteBtn.src = "./src/assets/trash.svg"

    divCard.append(categoryID, deleteBtn)
    card.append(value, divCard)

    return card

}

export function filterButtons() {
    const mainButtons = document.querySelectorAll(".main__button")
    mainButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id == "button__all") {
                render(insertedValues)
            } else if (button.id == "button__entry") {
                const insertedValuesfiltered = insertedValues.filter(insertedValue => insertedValue.categoryID == 0)
                render(insertedValuesfiltered)
            } else {
                const insertedValuesfiltered = insertedValues.filter(insertedValue => insertedValue.categoryID == 1)
                render(insertedValuesfiltered)
            }
        })

    })

}

filterButtons()

const handleModal = () => {
    const modal = document.querySelector(".modal__controller")
    const navButton = document.querySelector(".nav__button")

    navButton.addEventListener('click', () => {
        modal.showModal()

        closeModal()
    })
}

handleModal()

function closeModal() {

    const modal = document.querySelector(".modal__controller")
    const buttonCloseModal = document.querySelector(".button__closeModal")

    buttonCloseModal.addEventListener('click', (event) => {
        event.preventDefault()
        modal.close()
    })
}

