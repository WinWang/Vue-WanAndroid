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


/**
 * 获取项目分类
 */
function getProjectType() {
    return get("/project/tree/json", {})
}

/**
 * 获取项目列表
 */
function getProjectList(id, index) {
    return get("/project/list/" + index + "/json?cid=" + id, {})
}

/**
 * 登录接口
 * @param params
 */
function login(params) {
    return post("/user/login", params)
}

/**
 * 获取收藏列表
 * @param params
 */
function getCollectList(params) {
    return get("/lg/collect/list/" + params + "/json", {})
}


/**
 * 收藏站内文章
 * @param params
 */
function addFavirate(params) {
    return post('/lg/collect/' + params + '/json', {})
}


export default {
    getBanner,
    getHomeList,
    getSystem,
    getWeChatTab,
    getChatHistory,
    getSite,
    getProjectType,
    getProjectList,
    login,
    getCollectList,
    addFavirate
}
