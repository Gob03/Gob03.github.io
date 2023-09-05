import { Test } from "./json/jsonFormat.js"
export const fetchURL = async ( url: string = 'http://silbar.apipedidoplus.edtsoft.cu/menus/menu_for_web_qr/?menu_id=1' ): Promise<Test> => {
    /*const header = new Headers()
    const Init = {
        method: 'GET',
        headers: header,
        mode: 'cors',
        cache: 'default'
    }
    const request = new Request( fetchURL, Init)*/
    const response = await fetch(url)
    .then( response => response.json())
    .catch( err => console.log(err))

    return response
}