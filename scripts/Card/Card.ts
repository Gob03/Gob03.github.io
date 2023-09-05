export abstract class Card{
    protected _id          : number
    protected _name      : string
    protected _imageSrc    : string
    protected _type : string = 'undefined'

    constructor( card: cardInfo){
        this._id        = card.id
        this._name      = card.name
        this._imageSrc  = card.imageSrc
    }

    abstract getTemplate():string

    get id(){
        return this._id
    }

    get name(){
        return this._name
    }

    get imageSrc(){
        return this._imageSrc
    }

    set type( type: string){
        this._type = type
    }

    get type(){
        return this._type
    }
}
