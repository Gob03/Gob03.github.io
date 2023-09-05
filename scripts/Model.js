export class Model {
    constructor(_Categorys) {
        this._Categorys = _Categorys;
        this._Categorys = [];
    }
    addProduct(product, categoryID) {
        const category = this._Categorys.filter(category => category.id == categoryID)[0];
        category === null || category === void 0 ? void 0 : category.products.push(product);
    }
    addCategory(category) {
        this._Categorys.push(category);
    }
    getProducts() {
        let response = [];
        this._Categorys.map(category => response = response.concat(category.products));
        return response;
    }
    getTotalProducts() {
        console.log(this._Categorys.reduce((sum, value) => sum + value.products.length, 0));
        return this._Categorys.reduce((sum, value) => sum + value.products.length, 0);
    }
}
