<template>
    <div>
        <div class="bg-back">
            <div class="viewpager">
                <HomeComp v-show="tabIndex==1"></HomeComp>
                <SystemComp v-show="tabIndex==2"></SystemComp>
                <WeChatComp v-show="tabIndex==3"></WeChatComp>
                <ProjectComp v-show="tabIndex==4"></ProjectComp>
                <MineComp v-show="tabIndex==5"></MineComp>
            </div>
            <bottom-tab class="bottom-bar"></bottom-tab>
        </div>

    </div>
</template>

<script>
    import {Button} from 'vant';
    import BottomTab from '../components/BottomTab'
    import HomeComp from '../components/HomeComp';
    import SystemComp from '../components/SystemComp'
    import WeChatComp from '../components/WeChatComp'
    import ProjectComp from '../components/ProjectComp'
    import MineComp from '../components/MineComp'

    export default {
        name: 'mainview',
        components: {
            BottomTab,
            HomeComp,
            SystemComp,
            WeChatComp,
            ProjectComp,
            MineComp,
            [Button.name]: Button,
        },

        data() {
            return {}
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

