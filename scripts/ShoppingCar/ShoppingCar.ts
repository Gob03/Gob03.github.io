import { Product } from "../json/jsonFormat";

export class ShoppingCar{
    private _products: cardInCarInfo[] = []
    private static _instance: ShoppingCar | null = null;

    static getInstance (): ShoppingCar{
        if( !this._instance){
            this._instance = new ShoppingCar()
        }
        return this._instance
    }

    get products(){
        return this._products
    }

    addProduct( product: Product, cant: number){
        const productAlredyInCar = this._products.find( element => element.id == product.id)
        if( productAlredyInCar){
            productAlredyInCar.cantToBuy += cant
        }else{
            const productToCar: cardInCarInfo = {
                id      : product.id,
                name    : product.name,
                imageSrc: product.image,
                price   : product.price,
                cantToBuy: 1
            }

            this._products.push( productToCar)
        }       
    }

    removeProduct( productId: number){
        this._products = this._products.filter( product => product.id != productId)
    }

    getProduct( productId: number){
        return this._products.filter( elem => elem.id == productId)
    }

    clearShoppingCar(){
        this._products = []
    }

    getTotal(){
        return this._products.reduce( (sum, value) => (value.cantToBuy * value.price) + sum, 0)
    }

    getTotalProductsInCar(){
        return this.products.length
    }

    generateRequestMessageTemplate = () => {
        return `Virtual Shop - Los Mejores Precios\n`
        +`Se ha realizado un nuevo pedido:\n`
        +`${this.generateRequestList()}\n`
        +`Coste total del Pedido: ${this.getTotal()}$\n`
    }

    private generateRequestList(){
        let requestList = ''
        this._products.forEach( product => requestList += 
            `\t - ${product.name} x ${product.cantToBuy}\n`
        )
        return requestList
    }
}