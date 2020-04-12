<template>
    <div class="card-box">
        <el-card>
            <div>
                <el-col :span="12">
                    原名<el-input v-model="queryData.memberName" class="form-style" placeholder="输入原名" size="medium"/>
                    更改为<el-input v-model="queryData.newMemberName" class="form-style" placeholder="输入更改后的名字" size="medium"/>
                </el-col>
                <el-col :span="6">
                    日期<el-date-picker
                        v-model="queryData.date"
                        type="date"
                        size="small"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        class="form-style"
                        placeholder="选择日期">
                </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="updateMemberName">执行更改</el-button>
                </el-col>
            </div>
            <el-alert
                    title="注：执行更改操作后无法撤销，请慎重！"
                    type="warning"
                    :closable="false"
                    show-icon>
            </el-alert>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "",
        props:{
            queryData: {
                type: Object,
            }
        },
        methods:{
            updateMemberName(){
                this.$emit("updateMemberName");
            }
        },
    }
</script>

<style scoped>
    .card-box{
        position: relative;
        padding: 20px;
    }
    .card-box::before{
        content: '会员名更改';
        position: absolute;
        top: -13px;
        left: 0px;
        padding: 8px 12px;
        font-weight: bold;
        color: #619ac3;
        border: 1px solid #619ac3;
        border-radius: 30px;
    }
    .form-style{
        width: 180px;
        height: 32px;
    }
</style>