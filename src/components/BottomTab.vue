<template>
    <div class="bottom-wrap">

        <div class="tab-item-wrap" @click="changeTab(1)">
            <img class="bottom-tab-img"
                 :src="tabIndex==1?imgList[1]:imgList[0]"/>
            <div :class="['txt-nor',tabIndex==1?'txt-sel':'']">首页</div>
        </div>

        <div class="tab-item-wrap" @click="changeTab(2)">
            <img class="bottom-tab-img"
                 :src="tabIndex==2?imgList[3]:imgList[2]"/>
            <div :class="['txt-nor',tabIndex==2?'txt-sel':'']">体系</div>
        </div>

        <div class="tab-item-wrap" @click="changeTab(3)">
            <img class="bottom-tab-img"
                 :src="tabIndex==3?imgList[5]:imgList[4]"/>
            <div :class="['txt-nor',tabIndex==3?'txt-sel':'']">公众号</div>
        </div>

        <div class="tab-item-wrap" @click="changeTab(4)">
            <img class="bottom-tab-img"
                 :src="tabIndex==4?imgList[7]:imgList[6]"/>
            <div :class="['txt-nor',tabIndex==4?'txt-sel':'']">项目</div>
        </div>

        <div class="tab-item-wrap" @click="changeTab(5)">
            <img class="bottom-tab-img"
                 :src="tabIndex==5?imgList[9]:imgList[8]"/>
            <div :class="['txt-nor',tabIndex==5?'txt-sel':'']">导航</div>
        </div>

    </div>
</template>

<script>
    import homeNor from '../assets/img/icon-home-nor.png';
    import homeSel from '../assets/img/icon-home-sel.png';
    import sysNor from '../assets/img/icon-sys-nor.png';
    import sysSel from '../assets/img/icon-sys-sel.png';
    import wtNor from '../assets/img/icon-wt-nor.png';
    import wtSel from '../assets/img/icon-wt-sel.png';
    import proNor from '../assets/img/icon-pro-nor.png';
    import proSel from '../assets/img/icon-pro-sel.png';
    import mineNor from '../assets/img/icon-site-nor.png';
    import mineSel from '../assets/img/icon-site-sel.png';


    export default {
        name: "BottomTab",
        data() {
            return {
                tabIndex: 1, //选中的角标
                imgList: [
                    homeNor,
                    homeSel,
                    sysNor,
                    sysSel,
                    wtNor,
                    wtSel,
                    proNor,
                    proSel,
                    mineNor,
                    mineSel
                ]
            }
        },

        mounted() {
            var path = this.$route.path;
            switch (path) {
                case "/Home":
                    this.tabIndex = 1;
                    this.$store.dispatch('setHomeTabs', 1);
                    break

                case "/System":
                    this.tabIndex = 2;
                    this.$store.dispatch('setHomeTabs', 2);
                    break

                case "/WeChat":
                    this.tabIndex = 3;
                    this.$store.dispatch('setHomeTabs', 3);
                    break

                case "/Project":
                    this.tabIndex = 4;
                    this.$store.dispatch('setHomeTabs', 4);
                    break

                case "/Site":
                    this.tabIndex = 5;
                    this.$store.dispatch('setHomeTabs', 5);
                    break
            }
        },

        methods: {
            changeTab(index) {
                if (index == this.tabIndex) {
                    return
                } else {
                    this.tabIndex = index;
                    this.$store.dispatch('setHomeTabs', index);
                }
                switch (index) {
                    case 1:
                        this.$router.replace({
                            path: '/Home'
                        })
                        break
                    case 2:
                        this.$router.replace({
                            path: '/System'
                        })
                        break

                    case 3:
                        this.$router.replace({
                            path: '/WeChat'
                        })
                        break

                    case 4:
                        this.$router.replace({
                            path: '/Project'
                        })
                        break

                    case 5:
                        this.$router.replace({
                            path: '/Site'
                        })
                        break
                }
            }
        }


    }
</script>

<style scoped lang="less">

    .bottom-wrap {
        display: flex;
        flex-direction: row;
        height: 50px;
        width: 100%;
        background: #fff;
        font-size: 13px;
        border-top: 1px solid #dfdfdf;

        .tab-item-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;

            .bottom-tab-img {
                height: 25px;
                width: 25px;
            }

            .txt-nor {
                color: #bfbfbf;
            }

            .txt-sel {
                color: #d4237a;
            }

        }

    }


</style>
