document.addEventListener("DOMContentLoaded", ()=>{
    const fetchURL = 'http://silbar.apipedidoplus.edtsoft.cu/menus/menu_for_web_qr/?menu_id=1'

    /*const header = new Headers()
    const Init = {
        method: 'GET',
        headers: header,
        mode: 'cors',
        cache: 'default'
    }
    const request = new Request( fetchURL, Init)*/

    async function pedidosFetch(url){
        fetch(fetchURL)
        .then(response => {
            if(response.status == '200'){
                console.log('solicitud exitosa')
                return response.json()
            }
        })
        .then(datos => console.log(datos))
        .catch(err => console.log(err))
    }

pedidosFetch(fetchURL)
})
