<template>
    <div class="vertiacl-layout">
        <template v-for="(item,index) in dataList">
            <div>
                <div style="height: 15px" v-if="index==0"></div>
                <van-row type="flex" justify="space-between" align="center">
                    <van-col span="22">
                        <div class="tree-title">{{item.name}}</div>
                        <div class="tree-child-wrap">
                            <template v-for="(child,index) in item.children">
                                <div class="txt-child">{{child.name}}</div>
                            </template>
                        </div>

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
        name: "SystemComp",
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

<style scoped lang="less">


    .tree-title {
        text-align: left;
        font-size: 16px;
        color: #000;
        margin-left: 20px;
        font-weight: 600;
    }

    .tree-child-wrap {
        margin-top: 10px;
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-left: 15px;
        .txt-child {
            margin: 5px;
            text-align: left;
            font-size: 14px;
            color: #666;
        }
    }

    .img-arrow {
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }


</style>