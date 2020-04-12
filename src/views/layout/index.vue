<template>
    <div>
        <SysMenu class="nav"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SysMenu from '@/components/SysMenu'
    export default {
        name: "",
        components:{
            SysMenu,
        }
    }
</script>

<style scoped>
    .nav{
        margin-bottom: 20px;
    }
</style>