export class Card {
    constructor(card) {
        this._type = 'undefined';
        this._id = card.id;
        this._name = card.name;
        this._imageSrc = card.imageSrc;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get imageSrc() {
        return this._imageSrc;
    }
    set type(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
}
