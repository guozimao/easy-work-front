<template>
    <div>
        <a @click="goBack" class="goBack">&lt;退出</a>
        <a class="title">| 列表详情</a>
    </div>
</template>

<script>
    export default {
        name: "",
        methods:{
            goBack() {
                localStorage.clear();
                this.$store.commit('permission/CLEAR_MENU');
                this.$store.commit('permission/CLEAR_PERMISSION');
                location.replace('/');
            },
        }
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        margin-left: 9px;
    }
    .goBack{
        color: black;
    }
    .goBack:hover{
        color: deepskyblue;
    }
</style>