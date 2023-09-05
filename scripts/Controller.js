var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ShoppingCar } from "./ShoppingCar/ShoppingCar.js";
import { fetchURL } from "./fetch.js";
export class Controller {
    constructor(_model, _view) {
        this._model = _model;
        this._view = _view;
        this.clearShoppingCar = () => {
            this._shoppingCar.clearShoppingCar();
            this._view.updateShoppingCarCont(this._shoppingCar.products.length);
            this._view.updateTotalPrice(this._shoppingCar.getTotal());
            this._view.clearShoppingCarPanel();
        };
        this._shoppingCar = ShoppingCar.getInstance();
        this.carClickEvent();
        this.sendRequest();
        this.sendRequestToAdmin();
    }
    sendRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetchURL()
                .then(response => {
                this._view.cleanCardsContainer();
                return response;
            })
                .then(response => this.addCardsJSON(response.menu))
                .catch(err => console.log('Ha ocurrido un error' + err));
            /*const TESTResponse =
            const TESTjsonResponse = JSON.stringify(TESTResponse)
    
            this._menu =  JSON.parse(TESTjsonResponse)
            
            this.addCardsJSON()*/
        });
    }
    addCardsJSON(menu) {
        for (let i = 0; i < menu.categories.length; i++) {
            this._model.addCategory(menu.categories[i]);
            this._view.renderCategory(menu.categories[i].id, menu.categories[i].name, menu.categories[i].products);
        }
        //this.addBtnsEvents()
    }
    carClickEvent() {
        const car = document.getElementById('car');
        car ? car.addEventListener('click', () => {
            this._view.showShoppingCarPanel();
        }) : console.log('error');
    }
    /*addCard( card: Product){
        this._model.addProduct( card)
        this._view.renderCard( card)
        //this.addBtnsEvents()
    }*/
    addBtnsEvents() {
        const addCarBtns = document.getElementsByClassName('addCarBtn');
        const cantToBuy = 1; //Agregar un input para cantidad
        console.log('ejecutado');
        for (let i = 0; i < this._model.getTotalProducts(); i++) {
            console.log(this._model.getProducts());
            addCarBtns[i].addEventListener('click', () => {
                this._shoppingCar.addProduct(this._model.getProducts()[i], cantToBuy);
                this._view.updateShoppingCarCont(this._shoppingCar.getTotalProductsInCar());
                this._view.addProductCarPanel(this._shoppingCar.getProduct(this._model.getProducts()[i].id)[0]);
                this._view.updateTotalPrice(this._shoppingCar.getTotal());
                this.deleteProductEvents(this._shoppingCar.products);
            });
        }
        const clearCarBtn = document.getElementById('clearCar');
        clearCarBtn ? clearCarBtn.addEventListener('click', this.clearShoppingCar) : console.log('error');
    }
    deleteProductEvents(products) {
        const deleteOfCarBtns = document.getElementsByClassName('deleteOfCarBtn');
        for (let i = 0; i < this._shoppingCar.products.length; i++) {
            deleteOfCarBtns[i].addEventListener('click', () => {
                this._shoppingCar.removeProduct(products[i].id);
                this._view.updateShoppingCarCont(this._shoppingCar.products.length);
                this._view.updateTotalPrice(this._shoppingCar.getTotal());
            });
        }
    }
    sendRequestToAdmin() {
        const buyBtn = document.getElementById('buyBtn');
        buyBtn === null || buyBtn === void 0 ? void 0 : buyBtn.addEventListener('click', () => {
            const request = this._shoppingCar.generateRequestMessageTemplate();
            window.open(`https://ws.me/5356826314?text=${request}`, '_blank');
        });
    }
}
