import { Controller } from "./Controller.js";
import { View } from "./View.js";
import { Model } from "./Model.js";
document.addEventListener('DOMContentLoaded', () => {
    const controller = new Controller(new Model([]), new View());
    /*    const melon = {
            id      : 1,
            name    : "Melon",
            imageSrc: "images/pexels-engin-akyurt-2894205.jpg",
            price   : 100,
            stock   : 200,
            discount: 0
        }
    
        const platano = {
            id      : 2,
            name    : "Platano",
            imageSrc: "images/pexels-vanessa-loring-5966630.jpg",
            price   : 50,
            stock   : 220,
            discount: 0
        }
    
        const arandano = {
            id      : 3,
            name    : "Arandano",
            imageSrc: "images/pexels-olga-1153655.jpg",
            price   : 40,
            stock   : 1000,
            discount: 0
        }
    
        const tomate = {
            id      : 4,
            name    : "Tomate",
            imageSrc: "images/pexels-julia-nagy-1327838.jpg",
            price   : 50,
            stock   : 800,
            discount: 0
        }
    
        const kiwi = {
            id      : 5,
            name    : "Kiwi",
            imageSrc: "images/pexels-photomix-company-867349.jpg",
            price   : 80,
            stock   : 350,
            discount: 0
        }
    
        const manzana = {
            id      : 6,
            name    : "Manzana",
            imageSrc: "images/pexels-pierpaolo-riondato-2966150.jpg",
            price   : 75,
            stock   : 1000,
            discount: 0
        }
    
        const anuncio: cardAdvInfo = {
            id         : 7,
            name       : 'Ejemplo',
            imageSrc   : 'images/pexels-norma-mortenson-4393426.jpg',
            url        : 'https://www.ejemplo.com',
            description: 'Servicio de entrega a domicilio'
        }
    
        controller.addCard( new ProductCard(melon))
        controller.addCard( new ProductCard( platano))
        controller.addCard( new AdvCard(anuncio))
        controller.addCard( new ProductCard( arandano))
        controller.addCard( new ProductCard( tomate))
        controller.addCard( new ProductCard( kiwi))
        controller.addCard( new ProductCard( manzana))*/
});
