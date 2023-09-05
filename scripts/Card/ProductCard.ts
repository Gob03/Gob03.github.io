import { Card } from "./Card";
export class ProductCard extends Card {
    private _price: number
    private _stock: number
    private _discount: number

    constructor(cardProduct: cardProductInfo) {
        super({ id: cardProduct.id, name: cardProduct.name, imageSrc: cardProduct.imageSrc})
        this._price = cardProduct.price
        this._stock = cardProduct.stock
        this._discount = cardProduct.discount
        this.type = 'product'
    }

    getTemplate(): string {
        return `<div class="card m-3 col-9 col-sm-6 col-md-4 col-lg-3">
                    <img src="${this._imageSrc}" class="card-img-top my-1" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <a class="btn btn-primary addCarBtn">Add to car</a>
                        <span>${this._price}$/u</span>
                    </div>
                </div>`
    }

    get price(){
        return this._price
    }

    get stock(){
        return this._stock
    }

    get discount(){
        return this._discount
    }
}