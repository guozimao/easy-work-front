<template>
    <el-collapse @change="handleChange" class="content-collapse">
        <el-collapse-item name="1">
            <template slot="title">
                <span style="margin-left: 10px">查询条件</span><el-button type="primary" size="small" plain round class="queryBtn" @click="onSubmit">查询</el-button>
            </template>
            <el-input placeholder="请输入店铺名称" v-model="queryForm.storeName" class="input-style"></el-input>
            <el-input placeholder="请输入会员名" v-model="queryForm.memberName" class="input-style g-mt10"></el-input>
            <el-input placeholder="请输入地摊人员" v-model="queryForm.operator" class="input-style g-mt10"></el-input>
            <el-date-picker
                    v-model="queryForm.startDate"
                    type="date"
                    size="large"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    class="input-style g-mt10"
                    placeholder="选择开始日期">
            </el-date-picker>
            <el-date-picker
                    v-model="queryForm.endDate"
                    type="date"
                    size="large"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    class="input-style g-mt10"
                    placeholder="选择截止日期">
            </el-date-picker>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    export default {
        name: "",
        props:{
            queryForm:{
                type: Object,
            }
        },
        methods:{
            handleChange(val) {
                console.log(val);
            },
            onSubmit(){
                this.$emit('onSubmit');
            }
        }
    }
</script>

<style scoped>
    .content-collapse{
        width: calc(100vw - 7px);
    }
    .input-style{
        width: calc(100vw - 10px);
    }
    .g-mt10{
        margin-top:10px
    }
    .queryBtn{
        margin-left: 170px;
    }
</style>