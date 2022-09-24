<template>
    <div class="vertical-layout">
        <van-nav-bar title="我的收藏" fixed style="background: #d44daa;" left-arrow @click-left="$router.back()"
        />


    </div>
</template>

<script>

    import {NavBar} from 'vant';

    export default {
        name: "ColletView",
        components: {
            [NavBar.name]: NavBar
        },

        data() {
            return {
                pageIndex: 0,
            }
        },

        mounted() {
            this.getCollectData()
        },

        methods: {
            getCollectData() {
                this.$api.getCollectList(this.pageIndex)
                    .then(res => {

                    })
            },
        }


    }
</script>

<style scoped>

</style>
