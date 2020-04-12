<template>
    <div class="card-box">
        <el-card >
            <el-upload
                    class="upload"
                    ref="upload"
                    :limit="limit"
                    :action="excelAction"
                    :file-list="fileList"
                    :beforeUpload="beforeAVatarUpload"
                    :on-exceed = "onExceed"
                    :onError="uploadError"
                    :onSuccess="uploadSuccess"
                    :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只支持Excel</div>
            </el-upload>
        </el-card>
    </div>
</template>

<script>
    import baseUrl from '@/network/baseUrl';
    export default {
        name: "",
        props:{

        },
        data(){
          return{
              excelAction: baseUrl + `/file/import/excel?token=${localStorage.getItem('token')}`,
              limit: 1,
              fileList: [],
          }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            beforeAVatarUpload(file){
                /*if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
                    this.$message.error('只支持jpg、png、gif格式的图片！')
                    return false
                }*/
            },
            onExceed(files, fileList){
                this.$message.error('提示：只能上传一个excel文件！')
            },
            uploadError(){
                this.$message.error('上传文件失败！')
            },
            uploadSuccess(response, file, fileList){
                this.$message.success(response.message)
            }
        }
    }
</script>

<style scoped>
    .card-box{
        position: relative;
        padding: 20px;
    }
    .card-box::before{
        content: 'Excel导入';
        position: absolute;
        top: -13px;
        left: 0px;
        padding: 8px 12px;
        font-weight: bold;
        color: #619ac3;
        border: 1px solid #619ac3;
        border-radius: 30px;
    }
    .upload{
        height: 155px;
        overflow-y: auto;
    }
</style>