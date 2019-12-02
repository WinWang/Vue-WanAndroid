<template>
    <div>
        <div class="bg-back">
            <div class="viewpager">
                <!--重构成router的形式-->
                <!--<HomeComp v-show="tabIndex==1"></HomeComp>-->
                <!--<SystemComp v-show="tabIndex==2"></SystemComp>-->
                <!--<WeChatComp v-show="tabIndex==3"></WeChatComp>-->
                <!--<ProjectComp v-show="tabIndex==4"></ProjectComp>-->
                <!--<MineComp v-show="tabIndex==5"></MineComp>-->
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
                :style="{ width: '70%' ,height:'100%'}"
        />
    </div>
</template>

<script>
    import BottomTab from '../components/BottomTab'
    import {Popup} from 'vant';
    // import HomeComp from '../components/HomeComp';
    // import SystemComp from '../components/SystemComp'
    // import WeChatComp from '../components/WeChatComp'
    // import ProjectComp from '../components/ProjectComp'
    // import MineComp from '../components/MineComp'

    export default {
        name: 'mainview',
        components: {
            BottomTab,
            [Popup.name]: Popup
            // HomeComp,
            // SystemComp,
            // WeChatComp,
            // ProjectComp,
            // MineComp,

        },

        data() {
            return {
                showPop:true
            }
        },

        mounted() {

        },

        methods: {},

        computed: {
            tabIndex() {
                return this.$store.getters.getHomeTab;
            }
        }


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
            margin-bottom: 50px;
        }

        .bottom-bar {
            position: fixed;
            bottom: 0;
            left: 0;
        }

    }


</style>

