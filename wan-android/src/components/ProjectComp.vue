<template>
    <div class="vertical-layout">
        <van-tabs color="#d4237a" line-height="2px" title-active-color="#d4237a" title-inactive-color="#333" sticky
                  swipeable v-model="tabActive" @change="changeTab" :offset-top="45">
            <van-tab v-for="(tab,index) in projectTList" :title="tab.name" :key="index">
            </van-tab>

            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div>
                    <template v-for="(item,index) in PList">
                        <div>
                            <div style="height: 20px" v-if="index==0"></div>
                            <div style="display: flex;flex-direction: row; justify-content: center">
                                <van-image :src="item.envelopePic" height="120" width="60" lazy-load
                                           @click="previewImg(item.envelopePic)"/>
                                <div style="display: flex;flex-direction: column;width: 280px;margin-left: 10px">
                                    <div class="p-title">{{item.title}}</div>
                                    <div class="p-desc">{{item.desc}}</div>
                                    <van-row type="flex" justify="space-between" style="margin-top: 10px">
                                        <div class="list-type">{{item.shareUser==""?item.author:item.shareUser}}</div>
                                        <div class="list-data">{{item.niceDate}}</div>
                                    </van-row>
                                    <img class="list-icon" :src="item.collect?likeSel:likeNor"/>
                                </div>
                            </div>
                            <van-divider></van-divider>
                        </div>
                    </template>
                </div>
            </van-list>
        </van-tabs>

    </div>
</template>

<script>
    import {Tab, Tabs, List, Row, Col, Divider, Lazyload, ImagePreview, Image} from 'vant';
    import Vue from 'vue';
    import likeNorUrl from '../assets/img/icon-like-nor.png';
    import likeSelUrl from '../assets/img/icon-like-sel.png';

    Vue.use(Lazyload).use(ImagePreview)
    export default {
        name: "ProjectComp",
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [List.name]: List,
            [Col.name]: Col,
            [Row.name]: Row,
            [Divider.name]: Divider,
            [Image.name]: Image
        },

        data() {
            return {
                projectTList: [],//type类型List
                loading: false,
                finished: false,
                tabActive: 0,
                pageIndex: 1,
                id: "",
                PList: [],//项目数据
                likeNor: likeNorUrl,
                likeSel: likeSelUrl,
            }
        },

        mounted() {
            this.getTreeList();
        },

        methods: {
            /**
             * 获取Tree列表
             */
            getTreeList() {
                this.$api.getProjectType()
                    .then(res => {
                        this.projectTList = res.data;
                        this.id = res.data[0].id;
                        this.getePList()
                    })
            },

            /**
             * 获取项目列表
             */
            getePList() {
                this.$api.getProjectList(this.id, this.pageIndex)
                    .then(res => {
                        if (res.data.datas.length > 0) {
                            if (this.pageIndex === 1) {
                                this.PList = res.data.datas
                            } else {
                                this.PList = this.PList.concat(res.data.datas);
                            }
                            if (res.data.datas.length % 10 == 0) {
                                this.finished = true;
                            } else {
                                this.finished = false
                            }
                            this.loading = false;
                        } else {
                            this.loading = false;
                            this.finished = true
                        }
                    })
            },

            onLoad() {
                this.pageIndex++;
                if (this.id !== "") {
                    this.getePList();
                }
            },

            previewImg(url) {
                ImagePreview([url]);
            },

            changeTab() {
                this.pageIndex = 1;
                this.loading = false;
                this.finished = false;
                this.id = this.projectTList[this.tabActive].id;
                this.getePList()
            },


        },


    }
</script>

<style scoped>

    .p-title {
        font-size: 15px;
        color: #333;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .p-desc {
        margin-top: 5px;
        font-size: 15px;
        color: #999;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .list-data {
        font-size: 14px;
        color: #777;
        margin-right: 15px;
    }

    .list-type {
        font-size: 14px;
        color: #777;
    }

    .list-icon {
        margin-top: 10px;
        height: 20px;
        width: 20px;
        align-self: flex-end;
        margin-right: 10px;
    }


</style>