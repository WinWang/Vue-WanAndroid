import {get, post} from './http'

let baseUrl = process.env.VUE_APP_BASE_URL;
let sotckUrl = process.env.VUE_APP_STOCK_WEB;

/**
 * 获取Banner接口
 */
function getBanner() {
    return get("/banner/json", {});
}


/**
 * 获取首页接口
 * @param index
 */
function getHomeList(index) {
    return get("/article/list/" + index + "/json", {});
}

/**
 * 获取系统架构数据
 */
function getSystem() {
    return get("/tree/json", {});
}

/**
 * 获取微信公众号Tab数据
 */
function getWeChatTab() {
    return get("/wxarticle/chapters/json", {});
}


/**
 * 获取公众号的历史文章列表
 * @param id
 * @param index
 */
function getChatHistory(id, index) {
    return get("/wxarticle/list/" + id + "/" + index + "/json", {})
}

/**
 * 获取导航数据
 */
function getSite() {
    return get("/navi/json", {});
}


export default {
    getBanner,
    getHomeList,
    getSystem,
    getWeChatTab,
    getChatHistory,
    getSite,
}