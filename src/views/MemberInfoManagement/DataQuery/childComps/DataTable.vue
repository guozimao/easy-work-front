<template>
    <el-card id="dataTable4DataQuery">
        <el-table
                ref="elTable"
                :data="table.data"
                border
                stripe
                stype="100%"
                min-height="200px"
                :height="tableHeight"
                :header-cell-style="{
                         'font-weight':'bold',
                        'background-color': '#42b983',
                        'color': '#fff'
                 }"
                :cell-class-name="markedMembername"
        >
            <el-table-column
                    label="序号"
                    type="index"
                    show-overflow-tooltip
                    align="center"
                    width="90">
            </el-table-column>
            <el-table-column
                    label="日期"
                    prop="operationDate"
                    align="center"
                    show-overflow-tooltip
            />
            <el-table-column
                    label="地摊人员"
                    prop="operator"
                    align="center"
                    show-overflow-tooltip
            />
            <el-table-column
                    label="店铺名称"
                    prop="storeName"
                    align="center"
                    show-overflow-tooltip
            />
            <el-table-column
                    label="淘宝会员名"
                    prop="memberName"
                    align="center"
                    show-overflow-tooltip
            />
        </el-table>
        <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="table.pageNum"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="table.pageSize"
                layout="->,total, prev, pager, next,sizes, jumper"
                class="pagination"
                :total="table.total">
        </el-pagination>
    </el-card>
</template>

<script>
    import {MARKED_MEMBER_TYPE} from "../api"
    export default {
        name: "",
        props:{
            table:{
                type: Object,
            },

        },
        mounted(){
            this.$nextTick(() => {
                this.getTableHeight();
            });
            window.onresize = () => this.getTableHeight();
        },
        destroyed(){
            window.onresize = null;
        },
        data(){
          return{
              tableHeight: 500,
          }
        },
        methods:{
            handleSizeChange(val) {
                this.$emit("handleSizeChange", val);
            },
            handleCurrentChange(val) {
                this.$emit("handleCurrentChange", val);
            },
            getTableHeight() {
                this.tableHeight = window.innerHeight - this.$refs.elTable.$el.offsetTop - 105;
            },
            markedMembername({row, column, rowIndex, columnIndex}){
                if(row.markFlag === MARKED_MEMBER_TYPE &&
                    column.property === 'memberName'
                ){
                    return 'marked';
                }
            }
        }
    }
</script>

<style scoped>
    .pagination{
        margin-top: 20px;
    }
</style>

<style lang="scss">
    #dataTable4DataQuery{
        .el-table .marked {
            color: red;
        }
    }
</style>