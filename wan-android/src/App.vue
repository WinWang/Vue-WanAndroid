<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        display: flex;
        flex-direction: column;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .vertical-layout {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }


</style>
