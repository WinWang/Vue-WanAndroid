<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="vertical-layout">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in bannerList" :key="index">
                    <img class="banner-img" v-lazy="item.imagePath"/>
                </van-swipe-item>
            </van-swipe>
            <van-list
                    v-model="refreshing"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div>
                    <template v-for="(item,index) in homeList">
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

        </div>
    </van-pull-refresh>

</template>
<script>
    import likeNorUrl from '../assets/img/icon-like-nor.png';
    import likeSelUrl from '../assets/img/icon-like-sel.png';
    import {Swipe, SwipeItem, Lazyload, List, PullRefresh, Row, Col, Divider} from 'vant';
    import Vue from 'vue';

    Vue.use(Lazyload)
    export default {
        name: "HomeComp",
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [List.name]: List,
            [PullRefresh.name]: PullRefresh,
            [Row.name]: Row,
            [Col.name]: Col,
            [Divider.name]: Divider,
        },

        data() {
            return {
                bannerList: [],
                homeList: [],
                homePageIndex: 0, //首页请求分页参数
                isLoading: false,
                refreshing: false,
                finished: false,
                likeNor: likeNorUrl,
                likeSel: likeSelUrl,
            }
        },

        mounted() {
            this.getBanner();
            // this.getHomeList();
        },

        methods: {
            /**
             * 获取首页banner
             */
            getBanner() {
                this.refreshing = false;
                this.$http.get("/banner/json")
                    .then(res => res.data)
                    .then(res => {
                        this.bannerList = res.data;
                    })
            },

            /**
             * 获取首页List
             */
            getHomeList() {
                this.refreshing = false;
                this.$http.get("/article/list/" + this.homePageIndex + "/json")
                    .then(res => res.data)
                    .then(res => {
                        if (this.homePageIndex == 1) {
                            this.homeList = res.data.datas;
                        } else {
                            this.homeList = this.homeList.concat(res.data.datas)
                        }
                        if (res.data.datas && res.data.datas.length % 10 != 0) {
                            this.finished = true;
                        } else {
                            this.finished = false;
                        }

                    })
            },


            /**
             * 下拉刷新方法
             */
            onRefresh() {
                this.isLoading = false;
                this.homePageIndex = 1;
                this.getBanner()
                this.getHomeList()
            },

            /**
             * 上拉加载更多
             */
            onLoad() {
                this.homePageIndex++;
                this.getHomeList()
            }


        }


    }
</script>


<style scoped>
    .banner-img {
        width: 100%;
        height: 200px;
    }

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