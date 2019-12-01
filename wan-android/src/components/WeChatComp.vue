<template>
    <div class="vertical-layout">
        <van-tabs v-model="tabActive">
            <van-tab v-for="(tab,index) in wechatTab" :title="tab.name">

            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import {Tab, Tabs} from 'vant';

    export default {
        name: "WeChatComp",
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },

        data() {
            return {
                wechatTab: [],
                tabActive: 0,
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
                    })
            }
        }


    }
</script>

<style scoped>

</style>