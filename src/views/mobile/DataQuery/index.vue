<template>
    <div class="main">
        <div class="navBar">
            <nav-bar/>
        </div>
        <div class="content">
            <query-bar
                    :queryForm="queryForm"
                    @onSubmit="onSubmit"/>
            <table-card :table="table"
                        @handleCurrentChange="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script>
    import NavBar from "./childComps/NavBar";
    import QueryBar from "./childComps/QueryBar";
    import TableCard from "./childComps/TableCard";

    import * as API from "@/views/MemberInfoManagement/DataQuery/api";
    export default {
        name: "",
        components: {
            NavBar,
            QueryBar,
            TableCard
        },
        mounted(){
          this.getList();
        },
        data() {
            return {
                queryForm: {
                    startDate: '',
                    endDate: '',
                    operator: '',
                    storeName: '',
                    memberName: '',
                },
                table: {
                    pageSize: 10,
                    pageNum: 1,
                    total: 0,
                    data: []
                }
            }
        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#c0c4c3;width:100wv;height:100vh')
        },
        beforeDestroy() {
            document.querySelector('body').removeAttribute('style')
        },
        methods: {
            onSubmit(){
              this.table.pageSize = 10;
              this.table.pageNum = 1;
              this.getList();
            },
            handleCurrentChange(pageNum){
                this.table.pageNum = pageNum;
                this.getList();
            },
            getList(){
              this.queryForm.scopeDate=[
                  this.queryForm.startDate,
                  this.queryForm.endDate
              ];
              const queryData = new API.QueryFrom(this.queryForm,this.table);
              this.memberConsumptionRackList(queryData);
            },
            memberConsumptionRackList(queryFrom) {
                API.memberConsumptionRackList(queryFrom).then(res => {
                    this.table = new API.DataList(res);
                })
            },
        }
    }
</script>

<style scoped>
    .main{
        position: relative;
    }
    .navBar{
        position: absolute;
        display: flex;
        left: -10px;
        top: -10px;
        padding: 20px;

        height: 35px;
        width: calc(100vw - 36px);
        line-height:  35px;
        font-size: 19px;
        background-color: white;
        border-radius: 0 0 20% 20%;
    }

    .content{
        position: absolute;
        left: 0px;
        top: 75px;
    }

</style>