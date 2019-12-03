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
            return {}
        },


        mounted() {

        },

        methods: {}


    }
</script>

<style scoped>

</style>
