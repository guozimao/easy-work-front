<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                router
                active-text-color="#42b983"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff">
            <el-menu-item index="/home">数据查询</el-menu-item>
            <el-menu-item index="/data-entry" :disabled="isDisabled4DataEntry">资料采集</el-menu-item>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4" disabled>设置</el-menu-item>
            <el-menu-item @click="logout">退出</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                activeIndex: '/home'
            }
        },
        computed:{
            isDisabled4DataEntry: function(){
                return !this.$store.state.permission.sidebarMenu.some((one) => one.path === '/data-entry')
            }
        },
        methods:{
            logout(){
                localStorage.clear();
                this.$store.commit('permission/CLEAR_MENU');
                this.$store.commit('permission/CLEAR_PERMISSION');
                location.replace('/');
            },
        },

    }
</script>

<style scoped>
    .el-breadcrumb{
        margin-top: 10px;
        margin-left: 5px;
        margin-bottom: 20px;
    }
</style>