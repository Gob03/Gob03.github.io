import { ProductCard } from "./Card/ProductCard"
import { Product } from "./json/jsonFormat"

const addToCarAnimation = (e: any) => {
    const btn = e.target

    const car = document.getElementById('car')

    car ? car.style.scale = "1.3" : console.log('error')
    car ? car.style.transform = "rotate(15deg)" : console.log('error')

    setTimeout(() => {
        car ? car.style.scale = "1" : console.log('error')
        car ? car.style.transform = "rotate(0deg)" : console.log('error')
    }, 400)
}

export class View {
    renderCategory(categoryID: number, categoryName: string, products: Product[]) {
        const cardsContainer = document.getElementById('cardsContainer')
        cardsContainer ? cardsContainer.innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header" id="category${categoryID}Head">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#category${categoryID}Body" aria-expanded="true" aria-controls="category${categoryID}Body">
                    ${categoryName} (${products.length})
                </button>
            </h2>
            <div id="category${categoryID}Body" class="accordion-collapse collapse container show" aria-labelledby="category${categoryID}Head"
            data-bs-parent="#accordionExample">
                <div class="accordion-body row">
                    ${this.getCardsProductsTemplate(products)}
                </div>
            </div>
        </div>`
            : console.log('error')

        const menu = document.getElementById('menu')
        menu ? menu.innerHTML +=
            `<li class="mb-1">
                <a class="categoryBtn btn btn-toggle align-items-center rounded"
                    href = "#category${categoryID}Head">
                    ${categoryName} (${products.length})
                </a>
            </li>`
            : console.log('error')
    }

    getCardsProductsTemplate(products: Product[]) {
        let response = ''
        products.forEach(product => {
            response +=
                `<div class="col-9 col-sm-6 col-md-4 col-lg-3">
                <div class="card my-2 mx-1 imageLoader">
                    <img src="${product.image}"
                        class="card-img-top my-1" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <a class="btn btn-primary addCarBtn">Add to car</a>
                        <span>${product.price}/u</span>
                    </div>
                </div>
            </div>`
        })

        return response
    }

    getMenuProductsTemplate(products: Product[]){
        let response = ''
        products.forEach(product => {
            response +=
                `<li><a href="#" class="link-dark rounded">${product.name}</a></li>`
        })

        return response
    }

    addEvents = () => {
        const addCarBtn = document.querySelectorAll('.addCarBtn')

        addCarBtn.forEach(btn => {
            btn.addEventListener('click', addToCarAnimation)
        })

        const clearCar = document.getElementById('clearCar')
        clearCar ? clearCar.addEventListener('click', this.clearShoppingCarPanel) : console.log('error')
    }

    updateShoppingCarCont(cant: number) {
        const shoppingCarCont = document.getElementById('shoppingCarCont')

        if (cant == 0) {
            shoppingCarCont ? shoppingCarCont.style.display = `none` : console.log('Error')
        } else {
            shoppingCarCont ? shoppingCarCont.style.display = `block` : console.log('Error')
        }

        if (cant > 9) {
            shoppingCarCont ? shoppingCarCont.innerHTML = `9+` : console.log('Error')
        } else {
            shoppingCarCont ? shoppingCarCont.innerHTML = `${cant}` : console.log('Error')
        }
    }

    showShoppingCarPanel() {
        const shoppingCarPanel = document.getElementById('shoppingCarPanel')
        if (shoppingCarPanel ? shoppingCarPanel.style.display == 'none' : console.log('error')) {
            shoppingCarPanel ? shoppingCarPanel.style.display = 'block' : console.log('error')
        } else {
            shoppingCarPanel ? shoppingCarPanel.style.display = 'none' : console.log('error')
        }
    }

    cleanCardsContainer(){
        const cardsContainer = document.getElementById('cardsContainer')
        cardsContainer ? cardsContainer.innerHTML = '':
        console.log('error')
    }

    addProductCarPanel(product: cardInCarInfo) {
        const shoppingCarPanel = document.getElementById('shoppingCarPanel')

        const article = document.createElement('article')
        article.classList.add('productInCar')
        article.id = `incar${product.id}`
        article.innerHTML = `
            <img src="${product.imageSrc}" alt="">
            <div>
                <p class="productName">${product.name}:</p>
                <p class="productCant">Cantidad: ${product.cantToBuy}</p>
                <p class="productPrice"> Precio: ${product.price * product.cantToBuy}$ <span style="color:gray;">(${product.price}$/u)</span></p>
            </div>`

        const input = document.createElement('input')
        input.type = 'button'
        input.classList.add('btn', 'btn-danger', 'deleteOfCarBtn')
        input.value = 'X'
        input.addEventListener('click', this.removeProductCarPanel)
        article.appendChild(input)

        const comp = document.getElementById(`incar${product.id}`)

        if (comp) {
            shoppingCarPanel ? shoppingCarPanel.replaceChild(article, comp) : console.log('error')
        } else {
            shoppingCarPanel ? shoppingCarPanel.appendChild(article) : console.log('error')
        }
    }

    //Correcto
    //Obligatorio el uso de funcion flecha por ser un evento
    removeProductCarPanel = (e: any) => {
        const shoppingCarPanel = document.getElementById('shoppingCarPanel')
        shoppingCarPanel ? shoppingCarPanel.removeChild(e.target.parentNode) : console.log('error')
    }

    //Correcto
    clearShoppingCarPanel = () => {
        const shoppingCarPanel = document.getElementById('shoppingCarPanel')
        const productsInCar = document.getElementsByClassName('productInCar')
        for (let i = 0; i < productsInCar.length;) {
            shoppingCarPanel ? shoppingCarPanel.removeChild(productsInCar[i]) : console.log('error')
        }
    }

    updateTotalPrice(total: number) {
        const totalCost = document.getElementById('totalCost')
        totalCost ? totalCost.innerHTML = `Coste: <span class="cost">${total}$` : console.log('error')
    }
}