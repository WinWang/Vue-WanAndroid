<template>
    <div class="home-bg">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="vertical-layout">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
                        <van-image :src="item.imagePath" height="190" width="100%" lazy-load/>
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
                            <div @click="toDetail(item)">
                                <van-row type="flex" justify="space-between">
                                    <div class="list-name">{{item.shareUser==""?item.author:item.shareUser}}</div>
                                    <div class="list-data">{{item.niceShareDate}}</div>
                                </van-row>
                                <div class="list-title">{{item.title}}</div>
                                <van-row type="flex" justify="space-between">
                                    <div class="list-type">{{item.superChapterName}}/{{item.chapterName}}</div>
                                    <img class="list-icon" :src="item.collect?likeSel:likeNor"
                                         @click.stop="addMyFavi(item,index)"/>
                                </van-row>
                                <van-divider></van-divider>
                            </div>
                        </template>
                    </div>
                </van-list>
            </div>
        </van-pull-refresh>

        <van-loading color="#1989fa" v-if="loading" class="loading-data"/>

    </div>
</template>


<script>
    import likeNorUrl from '../assets/img/icon-like-nor.png';
    import likeSelUrl from '../assets/img/icon-like-sel.png';
    import {Swipe, SwipeItem, Lazyload, List, PullRefresh, Row, Col, Divider, Image, Loading} from 'vant';
    import Vue from 'vue';
    import Bus from '../utils/eventBus'

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
            [Image.name]: Image,
            [Loading.name]: Loading,
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
                loading: true,
            }
        },

        created() {
            Bus.$on('loginEvent', (tag) => {
                this.onRefresh();
            })
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
                this.$api.getBanner()
                    .then(res => {
                        this.bannerList = res.data;
                    })
                    .then(() => {
                        this.loading = false;
                        this.refreshing = false;
                    })

            },

            /**
             * 获取首页List
             */
            getHomeList() {
                this.$api.getHomeList(this.homePageIndex)
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
                    .then(() => {
                        this.refreshing = false;
                        this.loading = false;
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
            },

            toDetail(item) {
                location.href = item.link
            },


            addMyFavi(item, index) {
                if (item.collect) {
                    this.$toast("您已经添加收藏了！！！")
                    return
                }
                this.$api.addFavirate(item.id)
                    .then(res => {
                        if (res.errorCode == 0) {
                            this.$toast.success("收藏成功")
                            this.homeList[index].collect = true;
                        }
                    })
            },


        },


        destroyed() {
            Bus.$off('loginEvent')
        }


    }
</script>


<style scoped>

    .home-bg {
        width: 100vw;
        height: calc(100vh - 50px);
        overflow: auto;
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
