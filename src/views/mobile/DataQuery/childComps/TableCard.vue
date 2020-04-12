<template>
    <el-card class="content-card g-mt10" id="dataTable4DataQuery">
        <el-table
                :data="table.data"
                height="calc(100vh - 200px)"
                :cell-class-name="markedMembername"
                style="width: 100%">
            <el-table-column
                    prop="operationDate"
                    label="日期"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="operator"
                    label="地摊人"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="storeName"
                    align="center"
                    label="店铺名">
            </el-table-column>
            <el-table-column
                    prop="memberName"
                    align="center"
                    label="会员名">
            </el-table-column>
        </el-table>
        <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page="table.pageNum"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="table.pageSize"
                layout="->,total, prev, next,jumper"
                class="pagination"
                :total="table.total">
        </el-pagination>
    </el-card>
</template>

<script>
    import {MARKED_MEMBER_TYPE} from "@/views/MemberInfoManagement/DataQuery/api";
    export default {
        name: "",
        props:{
            table:{
                type: Object,
            }
        },
        methods: {
            markedMembername({row, column, rowIndex, columnIndex}){
                if(row.markFlag === MARKED_MEMBER_TYPE &&
                    column.property === 'memberName'
                ){
                    return 'marked';
                }
            },
            handleCurrentChange(val){
                this.$emit('handleCurrentChange', val);
            },
        },
    }
</script>

<style scoped>
    .content-card{
        width: calc(100vw - 9px);
    }
    .g-mt10{
        margin-top:10px
    }
</style>

<style lang="scss">
    #dataTable4DataQuery{
    .el-table .marked {
        color: red;
    }
    }
</style>