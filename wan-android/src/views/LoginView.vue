<template>
    <div class="vertical-layout">
        <div class="login-back">
            <div class="input-wrap">
                <img class="icon-use-pass" src="../assets/img/icon_user.png"/>
                <input class="input-style"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginView",
        data() {
            return {}
        },

        mounted() {

        },


        methods: {}


    }
</script>

<style scoped lang="less">
    .login-back {
        height: 100vh;
        width: 375px;
        background: #d44daa;
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-wrap {
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
            width: 280px;

            .icon-use-pass {
                width: 30px;
                height: 30px;
            }

            .input-style {
                background: none;
                border: none;
                outline: none;
            }
        }

    }
</style>