<template>
    <div>
        <upload/>
        <update-name-card :queryData="queryData" class="g-mt20" @updateMemberName="updateMember"/>
        <marked-member-name-card :selectedMemeberName="selectedMemeberName" class="g-mt20" @markName="markName" @changeVal="changeVal"/>
    </div>

</template>

<script>
    import upload from './childComps/upload';
    import updateNameCard from './childComps/updateNameCard';
    import markedMemberNameCard from './childComps/markedMemberNameCard';

    import * as API from './api';
    export default {
        name: "",
        components:{
            upload,
            updateNameCard,
            markedMemberNameCard
        },
        data(){
            return {
                queryData:{
                    memberName: '',
                    newMemberName: '',
                    date: '',
                },
                selectedMemeberName:'',
            }
        },
        mounted(){
          this.getMarkedMember();
        },
        methods:{
            getMarkedMember(){
              this.markedMember();
            },
            markName(){
            let data = [];
            if(this.selectedMemeberName !== ''){
                data = this.selectedMemeberName.split(",");
            }
              this.updateMarkedMember(data);
            },
            changeVal(val){
                this.selectedMemeberName = val;
            },
            updateMember(){
                if(this.queryData.memberName === ''){
                    this.$message.error("必填，原名");
                    return;
                }else if(this.queryData.newMemberName === ''){
                    this.$message.error("必填，新名");
                    return;
                }
                this.updateMemberName(this.queryData);
            },
            markedMember(){
                API.markedMember().then(res => {
                    if(res !== null)
                    this.selectedMemeberName = res.join(",");
                });
            },
            updateMarkedMember(data){
                API.updateMarkedMember(data).then(res => {
                    this.$message.success(res);
                });
            },
            updateMemberName(data){
                API.updateMemberName(data).then(res => {
                    this.$message.success(res);
                });
            }
        }
    }
</script>

<style scoped>
    .g-mt20{
        margin-top: 20px;
    }
</style>