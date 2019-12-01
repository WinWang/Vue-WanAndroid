<template>
    <div class="vertical-layout">
        <van-tabs color="#d4237a" line-height="2px" title-active-color="#d4237a" title-inactive-color="#333">
            <van-tab v-for="(tab,index) in wechatTab" :title="tab.name">
            </van-tab>

            <van-list
                    v-model="refreshing"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div>
                    <template v-for="(item,index) in chatList">
                        <div>
                            <van-row type="flex" justify="space-between">
                                <div class="list-name">{{item.shareUser==""?item.author:item.shareUser}}</div>
                                <div class="list-data">{{item.niceShareDate}}</div>
                            </van-row>
                            <div class="list-title">{{item.title}}</div>
                            <van-row type="flex" justify="space-between">
                                <div class="list-type">{{item.superChapterName}}/{{item.chapterName}}</div>
                                <img class="list-icon" :src="item.collect?likeSel:likeNor"/>

                            </van-row>
                            <van-divider></van-divider>
                        </div>
                    </template>
                </div>
            </van-list>
        </van-tabs>

    </div>
</template>
<script>
    import likeNorUrl from '../assets/img/icon-like-nor.png';
    import likeSelUrl from '../assets/img/icon-like-sel.png';

    import {Tab, Tabs, List, Row, Col, Divider} from 'vant';

    export default {
        name: "WeChatComp",
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [List.name]: List,
            [Col.name]: Col,
            [Row.name]: Row,
            [Divider.name]: Divider,
        },

        data() {
            return {
                wechatTab: [],
                tabActive: 0,
                isEllipsis: false,
                chatList: [],
                refreshing: false,
                finished: true,
                pageIndex: 1, //公众号请求页码
                courseId: '', //公众号ID
                likeNor: likeNorUrl,
                likeSel: likeSelUrl,
            }
        },

        mounted() {
            this.getWeChatTab();
        },


        methods: {
            /**
             * 获取Tree列表
             */
            getWeChatTab() {
                this.$http.get("/wxarticle/chapters/json")
                    .then(res => res.data)
                    .then(res => {
                        this.wechatTab = res.data;
                        this.tabActive = 0;
                        this.courseId = this.wechatTab[0].parentChapterId;
                        this.pageIndex = 1;
                        this.getWeChatHistory();
                    })
            },


            getWeChatHistory() {
                var url = "/wxarticle/" + this.courseId + "/" + this.pageIndex + "/json"
                // var url = "/wxarticle/list/408/1/json";
                console.log(">>>>>>" + url);
                this.$http.get(url)
                    .then(res => res.data)
                    .then(res => {
                        this.chatList = res.data.datas;
                    })
            },

            /**
             * 列表加载更多方法
             */
            onLoad() {
                this.pageIndex++;
            },

        }


    }
</script>


<style scoped>
    .list-name {
        font-size: 14px;
        color: #777;
        margin-left: 15px;
    }

    .list-data {
        font-size: 14px;
        color: #777;
        margin-right: 15px;
    }

    .list-title {
        text-align: left;
        font-size: 16px;
        color: #000;
        margin: 8px 15px;
    }

    .list-type {
        font-size: 14px;
        color: #777;
        margin-left: 15px;
    }

    .list-icon {
        height: 20px;
        width: 20px;
        margin-right: 15px;
    }
</style>