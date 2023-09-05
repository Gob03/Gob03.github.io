import { Card } from "./Card";
export class AdvCard extends Card {
    constructor(cardAdv) {
        super({ id: cardAdv.id, name: cardAdv.name, imageSrc: cardAdv.imageSrc });
        this._url = cardAdv.url;
        this._description = cardAdv.description;
        this.type = 'adv';
    }
    getTemplate() {
        return `<div class="card m-3 col-9 col-sm-6 col-md-4 col-lg-3 advCard" style="background-image: url(${this._imageSrc});">
                    <div class="card-body" style="background: rgba(90, 90, 90, .8);">
                        <span class="advTag">Anuncio</span>
                        <h5 class="card-title">${this._name}</h5>
                        <p>${this._description}</p>
                        <a class="btn btn-primary" href="${this._url}" target="_blank">Ir a la pagina</a>
                    </div>
                </div>`;
    }
    get url() {
        return this._url;
    }
    get description() {
        return this._description;
    }
}
