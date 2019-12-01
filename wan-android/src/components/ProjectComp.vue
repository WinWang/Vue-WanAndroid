<template>
    <div class="vertical-layout">

        <template v-for="(item,index) in dataList">
            <div>
                <van-row type="flex" justify="space-between">
                    <van-col span="22">
                        <div>{{item.name}}</div>


                    </van-col>
                    <img class="img-arrow" src="../assets/img/iocn-arrow.png"/>
                </van-row>

                <van-divider></van-divider>
            </div>
        </template>
    </div>
</template>

<script>

    import {Row, Col, Divider} from 'vant'

    export default {
        name: "ProjectComp",
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Divider.name]: Divider,
        },

        data() {
            return {
                dataList: []
            }
        },

        mounted() {
            this.getTreeList();
        },

        methods: {
            /**
             * 获取Tree列表
             */
            getTreeList() {
                this.$http.get("/tree/json")
                    .then(res => res.data)
                    .then(res => {
                        this.dataList = res.data;
                    })
            }
        },


    }
</script>

<style scoped>

    .img-arrow {
        width: 25px;
        height: 25px;
    }


</style>