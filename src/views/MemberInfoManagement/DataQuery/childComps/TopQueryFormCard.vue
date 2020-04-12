<template>
    <el-card id="DataQueryTopQueryFormCard">
        <top-query-form
                :rowNum="2"
                :formModel="formModel"
                :spans="spans"
                @onSubmit="onSubmit"
                @reset="reset"
        >
            <el-form-item label="会员名" slot="item1" class="input-style">
                <el-input v-model="formModel.memberName" placeholder="请输入会员名"/>
            </el-form-item>
            <el-form-item label="起止日期" slot="item2" class="daterange-style">
                <el-date-picker
                        v-model="formModel.scopeDate"
                        unlink-panels
                        type="daterange"
                        range-separator="-"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="店铺名称" slot="item3" class="input-style">
                <el-input v-model="formModel.storeName" placeholder="请输入店铺名称"/>
            </el-form-item>
            <el-form-item label="地摊人员" slot="item4" class="input-style">
                <el-input v-model="formModel.operator" placeholder="请输入地摊人员"/>
            </el-form-item>
        </top-query-form>
    </el-card>
</template>

<script>
    import TopQueryForm from '@/components/TopQueryForm'
    export default {
        name: "",
        components:{
          TopQueryForm
        },
        props:{
          formModel:{
              type: Object,
          }
        },
        data(){
            return{
                spans:{
                    item1:5,
                    item2:7,
                    item3:6,
                    item4:5,
                    item5:7,
                    item6:6,
                },
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
            }
        },
        methods:{
            onSubmit(){
                this.$emit("onSubmit");
            },
            reset(){
                this.$emit("reset");
            }
        }
    }
</script>

<style scoped>

</style>

<style lang="scss">
    #DataQueryTopQueryFormCard{
        .input-style{
            .el-input{
                height: 40px;
                width: 180px;
            }
        }
        .daterange-style{
            .el-range-editor.el-input__inner{
                height: 40px;
                width: 250px;
            }
        }
        .el-form-item__content{
          display:flex;
        }
    }
</style>