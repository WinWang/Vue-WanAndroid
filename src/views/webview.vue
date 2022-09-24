<template>
    <div class="vertical-layout">
        <van-nav-bar :title="title" fixed style="background: #d44daa;" left-arrow @click-left="$router.back()"
        />
        <iframe :src="src" style="height: 100vh;width: 100vw"></iframe>


    </div>
</template>

<script>
    import {NavBar} from 'vant';

    export default {
        name: "webview",
        components: {
            [NavBar.name]: NavBar
        },

        data() {
            return {
                title: '',
                src: '',
            }
        },

        created() {
            this.src = this.$route.query.linkUrl;
            this.title = this.$route.query.title;
        }


    }
</script>

<style scoped>

</style>
