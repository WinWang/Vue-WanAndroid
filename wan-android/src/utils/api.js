import {get, post} from './http'

let baseUrl = process.env.VUE_APP_BASE_URL;
let sotckUrl = process.env.VUE_APP_STOCK_WEB;

function getBanner() {
    return get("/banner/json", {});
}


export default {
    getBanner,

}
