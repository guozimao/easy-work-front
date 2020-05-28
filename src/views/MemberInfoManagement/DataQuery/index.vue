<template>
    <div>
        <top-query-form-card
                :formModel="queryForm"
                @onSubmit="onSubmit"
                @reset="reset"
        />
        <data-table :table="table"
                    class="table-style"
                    @handleSizeChange="handleSizeChange"
                    @handleCurrentChange="handleCurrentChange"
        />
    </div>

</template>

<script>
    import TopQueryFormCard from "./childComps/TopQueryFormCard";
    import DataTable from "./childComps/DataTable";
    import * as API from './api';
    import isMobile from '@/utils/mobile'
    export default {
        name: "",
        components:{
          TopQueryFormCard,
            DataTable
        },
        mounted(){
            if(isMobile){
                this.$router.replace({path: '/mobile/dataQuery'})
            }else {
                this.getList();
            }
        },
        data(){
          return{
              queryForm: {
                  scopeDate: [
                      '',
                      '',
                  ],
                  operator: '',
                  storeName: '',
                  memberName: '',
              },
              table:{
                  pageNum: 1,
                  pageSize: 10,
                  total:9,
                  data:[],
              },
          }
        },
        methods:{
            getList(){
                const queryData = new API.QueryFrom(this.queryForm, this.table);
                this.memberConsumptionRackList(queryData);
            },
            onSubmit(){
                this.table.pageNum = 1;
                this.table.pageSize = 10;
                this.getList();
            },
            reset(){
                this.queryForm.scopeDate = [
                    '',
                    '',
                ];
                this.queryForm.operator = '';
                this.queryForm.storeName = '';
                this.queryForm.memberName = '';
            },
            memberConsumptionRackList(queryFrom){
                API.memberConsumptionRackList(queryFrom).then(res => {
                    this.table = new API.DataList(res);
                })
            },
            handleSizeChange(pageSize){
                this.table.pageSize = pageSize;
                this.getList();
            },
            handleCurrentChange(pageNum){
                this.table.pageNum = pageNum;
                this.getList();
            }
        }
    }
</script>

<style scoped>
    .table-style{
        margin-top: 20px;
    }
    .link{
        display: flex;
    }
</style>