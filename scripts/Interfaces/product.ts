interface cardInfo{
    id      : number,
    name    : string,
    imageSrc: string,
}

interface cardProductInfo extends cardInfo{
    price   : number,
    stock   : number,
    discount: number
}

interface cardInCarInfo extends cardInfo{
    price: number,
    cantToBuy: number
}

interface cardAdvInfo extends cardInfo{
    url: string,
    description: string
}