<template>
    <div  id="login">
        <div v-if="isMobile">
            <div class="card_box_mobile">
                <el-card >
                    <div class="title">登录</div>
                    <el-form label-position="right"
                             label-width="70px"
                             :model="formModel"
                             :rules="formRules">
                        <el-form-item label="用户名" prop="account">
                            <el-input v-model="formModel.userName" clearable placeholder="请输入用户名" show-password size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="account">
                            <el-input v-model="formModel.passWord" clearable placeholder="请输入密码" show-password size="medium"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="6" :offset="12">
                                <el-button type="primary" @click="login">登录</el-button>
                            </el-col>
                            <el-col :span="6">
                                <el-button plain @click="guestLogin">游客访问</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-card>
            </div>
        </div>
        <div v-else>
            <el-col :span="7" :offset="8">
                <div class="card_box">
                    <el-card >
                        <div class="title">登录</div>
                        <el-form label-position="right"
                                 label-width="70px"
                                 :model="formModel"
                                 :rules="formRules">
                            <el-form-item label="用户名" prop="account">
                                <el-input v-model="formModel.userName" clearable placeholder="请输入用户名" show-password size="medium"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="account">
                                <el-input v-model="formModel.passWord" clearable placeholder="请输入密码" show-password size="medium"></el-input>
                            </el-form-item>
                            <el-row>
                                <el-col :span="6" :offset="12">
                                    <el-button type="primary" @click="login">登录</el-button>
                                </el-col>
                                <el-col :span="6">
                                    <el-button plain @click="guestLogin">游客访问</el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-card>
                </div>
            </el-col>
        </div>

    </div>
</template>

<script>
import { login,guestLogin,fetchPermission } from '@/api/permission'
import isMobile from '@/utils/mobile'
export default {
    data() {
        return {
            formModel:{
                userName:'',
                passWord: ''
            },
            formRules:{

            },
            isMobile: isMobile,
        }
    },
    beforeCreate (){
        document.querySelector('body').setAttribute('style', 'background:#c0c4c3')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    methods: {
        async guestLogin() {
            try {
                let data = await guestLogin();

                let token = data.token
                this.$store.commit('LOGIN_IN', token)
                this.$router.replace('/')
            } catch (e) {
                console.log(e)
            }
        },
        login(){
            login(this.formModel).then( (res)=> {
                let token = res.token
                this.$store.commit('LOGIN_IN', token)
                this.$router.replace('/')
            }).catch(e => {
                console.log(e)
            })
        },
    }
}
</script>

<style lang="scss">
    #login{
        .card_box_mobile{
            position: relative;
            .el-card{
                width: 350px !important;
            }
        }
        .card_box_mobile::after{
            content: "welcome";
            position: absolute;
            top: -39px;
            left: 190px;
            color: #FB4264;
            font-size: 39px;
            line-height: 39px;
            text-shadow: 0px 0px 3px #F40A35;

            animation: neon 3s ease infinite;
            -moz-animation: neon 3s ease infinite;
            /* Firefox */

            -webkit-animation: neon 3s ease infinite;
            /* Safari and Chrome */

            -o-animation: neon 3s ease infinite;
            /* Opera */
        }
        .title{
            position: relative;
            display:flex;
            margin-bottom: 25px;
            font-weight: bold;
            font-size: 21px;
            color:#248067;
        }
        .title::before{
            content: '';
            position: absolute;
            top: -11px;
            left:-5px;
            height: 49px;
            width: 49px;
            border: 1px solid #DCDFE6;
            border-radius: 30px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

        }
        .card_box{
            position: relative;
        }
        .card_box::after{
            content: "welcome";
            position: absolute;
            top: -39px;
            left: 250px;
            color: #FB4264;
            font-size: 39px;
            line-height: 39px;
            text-shadow: 0px 0px 3px #F40A35;

            animation: neon 3s ease infinite;
            -moz-animation: neon 3s ease infinite;
            /* Firefox */

            -webkit-animation: neon 3s ease infinite;
            /* Safari and Chrome */

            -o-animation: neon 3s ease infinite;
            /* Opera */
        }
        .el-card{
            margin-top: 151px;
            width: 400px;
        }
        .el-form-item__label{
            font-weight: bold;
        }
        @keyframes neon {
            0%, 100% {
                text-shadow: 0px 0px 1px #FA1C16, 0px 0px 3px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px .4px #FED128, .5px .5px .1px #806914;
                color: #FED128;
            }
            50% {
                text-shadow: 0px 0px .5px #800E0B, 0px 0px 1.5px #800E0B, 0px 0px 5px #800E0B, 0px 0px 5px #800E0B, 0px 0px .2px #800E0B, .5px .5px .1px #40340A;
                color: #806914;
            }
        }
        @-moz-keyframes neon
        /* Firefox */

        @keyframes neon {
            0%, 100% {
                text-shadow: 0px 0px 1px #FA1C16, 0px 0px 3px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px .4px #FED128, .5px .5px .1px #806914;
                color: #FED128;
            }
            50% {
                text-shadow: 0px 0px .5px #800E0B, 0px 0px 1.5px #800E0B, 0px 0px 5px #800E0B, 0px 0px 5px #800E0B, 0px 0px .2px #800E0B, .5px .5px .1px #40340A;
                color: #806914;
            }
        }
        @-webkit-keyframes neon
        /* Safari and Chrome */

        @keyframes neon {
            0%, 100% {
                text-shadow: 0px 0px 1px #FA1C16, 0px 0px 3px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px .4px #FED128, .5px .5px .1px #806914;
                color: #FED128;
            }
            50% {
                text-shadow: 0px 0px .5px #800E0B, 0px 0px 1.5px #800E0B, 0px 0px 5px #800E0B, 0px 0px 5px #800E0B, 0px 0px .2px #800E0B, .5px .5px .1px #40340A;
                color: #806914;
            }
        }
        @-o-keyframes neon
        /* Opera */

        @keyframes neon {
            0%, 100% {
                text-shadow: 0px 0px 1px #FA1C16, 0px 0px 3px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px 10px #FA1C16, 0px 0px .4px #FED128, .5px .5px .1px #806914;
                color: #FED128;
            }
            50% {
                text-shadow: 0px 0px .5px #800E0B, 0px 0px 1.5px #800E0B, 0px 0px 5px #800E0B, 0px 0px 5px #800E0B, 0px 0px .2px #800E0B, .5px .5px .1px #40340A;
                color: #806914;
            }
        }
    }
</style>
