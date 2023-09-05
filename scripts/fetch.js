var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const fetchURL = (url = 'http://silbar.apipedidoplus.edtsoft.cu/menus/menu_for_web_qr/?menu_id=1') => __awaiter(void 0, void 0, void 0, function* () {
    /*const header = new Headers()
    const Init = {
        method: 'GET',
        headers: header,
        mode: 'cors',
        cache: 'default'
    }
    const request = new Request( fetchURL, Init)*/
    const response = yield fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));
    return response;
});
