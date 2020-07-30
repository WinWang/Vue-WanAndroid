<template>
    <div class="home-bg">
        <div class="vertical-layout">
            <van-tabs color="#d4237a" line-height="2px" title-active-color="#d4237a" title-inactive-color="#333" sticky
                      swipeable v-model="tabActive" @change="changeTab" :ellipsis=isEllipsis :offset-top="45">
                <van-tab v-for="(tab,index) in wechatTab" :title="tab.name" :key="index">
                </van-tab>

                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                >
                    <div>
                        <template v-for="(item,index) in chatList">
                            <div>
                                <div style="height: 20px" v-if="index==0"></div>
                                <van-row type="flex" justify="space-between" @click="itemClick(item)">
                                    <div class="list-name">{{item.shareUser==""?item.author:item.shareUser}}</div>
                                    <div class="list-data">{{item.niceShareDate}}</div>
                                </van-row>
                                <div class="list-title" @click="itemClick(item)">{{item.title}}</div>
                                <van-row type="flex" justify="space-between" @click="itemClick(item)">
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
        <van-loading color="#1989fa" v-if="loadingData" class="loading-data"/>
    </div>

</template>
<script>
    import likeNorUrl from '../assets/img/icon-like-nor.png';
    import likeSelUrl from '../assets/img/icon-like-sel.png';

    import {Tab, Tabs, List, Row, Col, Divider, Loading} from 'vant';

    export default {
        name: "WeChatComp",
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [List.name]: List,
            [Col.name]: Col,
            [Row.name]: Row,
            [Divider.name]: Divider,
            [Loading.name]: Loading,
        },

        data() {
            return {
                wechatTab: [],
                tabActive: 0,
                isEllipsis: false,
                chatList: [],
                loading: false,
                finished: false,
                pageIndex: 1, //公众号请求页码
                courseId: '', //公众号ID
                likeNor: likeNorUrl,
                likeSel: likeSelUrl,
                loadingData: true,
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
                this.$api.getWeChatTab()
                    .then(res => {
                        this.wechatTab = res.data;
                        this.tabActive = 0;
                        this.courseId = this.wechatTab[0].id;
                        this.pageIndex = 1;
                        this.getWeChatHistory();
                    })
                    .then(() => {
                        this.loading = false;
                        this.loadingData = false;
                    })
            },


            getWeChatHistory() {
                this.$api.getChatHistory(this.courseId, this.pageIndex)
                    .then(res => {
                        if (res.data.datas && res.data.datas.length > 0) {
                            if (this.pageIndex == 1) {
                                this.chatList = res.data.datas;
                            } else {
                                this.chatList = this.chatList.concat(res.data.datas);
                            }
                            if (res.data.datas.length % 10 != 0) {
                                this.finished = true;
                            } else {
                                this.finished = false;
                            }
                        } else {
                            this.finished = true
                        }

                    })
                    .then(() => {
                        this.loading = false;
                        this.loadingData = false;
                    })
            },

            /**
             * 列表加载更多方法
             */
            onLoad() {
                this.pageIndex++;
                if (this.courseId != "") {
                    this.getWeChatHistory(this.courseId, this.pageIndex)
                }
            },


            changeTab() {
                this.courseId = this.wechatTab[this.tabActive].id;
                this.pageIndex = 1;
                this.finished = false;
                this.loading = false;
                this.getWeChatHistory()

            },

            itemClick(item) {
                location.href = item.link;
            }


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
