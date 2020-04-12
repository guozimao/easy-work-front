<template>
    <div class="card-box">
        <el-card>
            <el-col :span="2">
                <span style="margin: 0 auto;">会员名</span>
            </el-col>
            <el-col :span="16">
                <el-input type="textarea"
                          :autosize="{ minRows: 5, maxRows: 5}"
                          v-model="selectedMemeberName"
                          placeholder="批量标记时，会员名之间用逗号分隔"
                          @input="changeVal"
                />
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="markName">执行标记</el-button>
            </el-col>
            <el-alert
                    title="注：被标记的会员将以红色显示。批量标记时，会员名之间用英文逗号（ , ）分隔。"
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
            selectedMemeberName: {
                type: String,
            }
        },
        methods:{
            markName(){
                this.$emit("markName");
            },
            changeVal(val){
                this.$emit("changeVal",val);
            },
        },
    }
</script>

<style scoped>
    .card-box{
        position: relative;
        padding: 20px;
    }
    .card-box::before{
        content: '会员名标记';
        position: absolute;
        top: -13px;
        left: 0px;
        padding: 8px 12px;
        font-weight: bold;
        color: #619ac3;
        border: 1px solid #619ac3;
        border-radius: 30px;
    }
</style>