<template>
    <div class="vertical-layout">

        <div class="login-back">
            <div class="input-wrap">
                <img class="icon-use-pass" src="../assets/img/icon_user.png"/>
                <input class="input-style" placeholder="请输入你的用户名"/>
            </div>

            <div class="input-wrap">
                <img class="icon-use-pass" src="../assets/img/icon_pass.png"/>
                <input class="input-style" placeholder="请输入你的密码"/>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterView"
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
        justify-content: center;

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
                margin-left: 20px;
                background: none;
                border: none;
                outline: none;
                width: 230px;
                height: 50px;
                font-size: 18px;
                color: #fff;
                border-bottom: 1px solid white;
            }
        }

    }


    input::-webkit-input-placeholder{
        color: #eae9e5;
    }

</style>