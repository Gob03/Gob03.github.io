import { Category, Product } from "./json/jsonFormat.js"
export class Model{
    constructor( private _Categorys: Category[]){
        this._Categorys = []
    }

    addProduct( product: Product, categoryID: number){
        const category = this._Categorys.filter( category => category.id == categoryID)[0]
        category?.products.push( product)
    }

    addCategory( category: Category){
        this._Categorys.push(category)
    }

    getProducts(){
        let response: Product[] = []
        this._Categorys.map( category => response = response.concat(category.products))
        return response
    }

    getTotalProducts(){
        console.log( this._Categorys.reduce( (sum, value) => sum + value.products.length, 0))
        return this._Categorys.reduce( (sum, value) => sum + value.products.length, 0)
    }
}