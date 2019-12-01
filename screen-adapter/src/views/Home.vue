<template>
    <div>
        <div class="rect"></div>
        <!--<Button>哈哈哈</Button>-->
        <van-button type="warning">默认按钮</van-button>
        <van-loading type="spinner" size="30px"></van-loading>
    </div>
</template>

<script>
    import {Toast,Dialog} from 'vant'

    export default {
        name: 'home',

        mounted() {
            this.showToast()
            this.showDialog()
        },

        methods: {
            showDialog() {
                Dialog.confirm({
                    title: '标题',
                    message: '弹窗内容'
                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                });
            },

            showToast() {
                Toast.success("导入组件成功")
            },


        }

    }
</script>

<style  lang="less">
    .rect {
        width: 750px;
        height: 375px;
        background: aqua;
    }


</style>

