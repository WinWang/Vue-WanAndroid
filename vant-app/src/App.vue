<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
    import Home from './pages/home'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style>
    #app {

    }

    *{
        padding: 0;
        margin: 0;
    }
</style>
