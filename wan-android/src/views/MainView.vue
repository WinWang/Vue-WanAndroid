<template>
    <div>
        <div class="bg-back">
            <van-nav-bar :title="tabChangeListener()" fixed style="background: #d44daa; color: white;"
                         @click-left="openDrawer()">
                <van-icon name="wap-nav" slot="left" color="white"/>
            </van-nav-bar>
            <div class="viewpager">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>
            <bottom-tab class="bottom-bar"></bottom-tab>
        </div>
        <van-popup
                get-container="#app"
                v-model="showPop"
                position="left"
                ba
                :style="{ width: '70%' ,height:'100%',background:'#DFDFDF'}"
        >
            <div class="drawer-wrap">
                <div class="top-wrap" @click="doLogin">
                    <img class="avator-style" src="../assets/img/avator.jpg"/>
                    <div class="user-name">登录/注册</div>
                </div>

                <van-cell-group>
                    <van-cell value="我的收藏" icon="like-o" is-link @click="toCollect()"/>
                    <van-cell value="TODO" icon="add-o" is-link/>
                    <van-cell value="退出登录" icon="share"/>
                </van-cell-group>

            </div>


        </van-popup>
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'
    import {Popup, NavBar, Icon, Cell, CellGroup} from 'vant';
    // import BScroll from 'better-scroll'

    export default {
        name: 'mainview',
        components: {
            BottomTab,
            [Popup.name]: Popup,
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup

        },

        data() {
            return {
                showPop: false,
                title: "首页"
            }
        },

        mounted() {
            // this.$nextTick(() => { //确保UI渲染完成
            //     let wrapper = document.querySelector('.viewpager')
            //     let scroll = new BScroll(wrapper)
            // })
        },

        methods: {
            openDrawer() {
                this.showPop = true;
            },

            tabChangeListener() {
                var tabIndex = this.$store.getters.getHomeTab
                if (tabIndex == 1) {
                    return "首页"
                } else if (tabIndex == 2) {
                    return "体系"
                } else if (tabIndex == 3) {
                    return "公众号"
                } else if (tabIndex == 4) {
                    return "项目"
                } else if (tabIndex == 5) {
                    return "导航"
                }
            },


            toCollect() {
                this.$router.push({
                    path: "/ColletView"
                })
            },


            doLogin() {
                this.$router.push({
                    path: "/RegisterView"
                })
            }


        },

        computed: {
            tabIndex() {
                return this.$store.getters.getHomeTab;
            },
        },


        watch: {}


    }
</script>


<style scoped lang="less">

    .bg-back {
        height: 100vh;
        width: 100vw;
        background: #fff;
        display: flex;
        flex-direction: column;

        .viewpager {
            width: 100%;
            flex: auto;
            margin-top: 46px;
            margin-bottom: 50px;
        }

        .bottom-bar {
            position: fixed;
            bottom: 0;
            left: 0;
        }

    }

    .van-nav-bar--fixed .van-nav-bar__title {
        color: white;
    }

    .drawer-wrap {
        display: flex;
        width: 100%;
        flex-direction: column;

        .top-wrap {
            height: 200px;
            background-image: url("../assets/img/drawer-back.jpg");
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .avator-style {
                height: 60px;
                width: 60px;
                border-radius: 30px;
            }

            .user-name {
                margin-top: 15px;
                margin-top: 15px;
                font-size: 18px;
                color: white;
            }

        }

    }


</style>

