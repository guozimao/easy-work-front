<template>
  <el-form id="DataQueryTopQueryForm"
    label-position="right"
    :label-width="labelWidth"
    :model="formModel"
    :rules="formRules">
    <el-row v-if="rowNum > 0">
      <template v-for="colIteam in 4">
        <!-- 行数只有1行的情况 -->
        <template v-if="rowNum === 1">
          <template v-if="colIteam === 4">
            <el-col :span="6">
              <slot name="button">
                <div class="button">
                  <el-button type="primary" size="small" round @click="onSubmit" icon="el-icon-search">
                    查询
                  </el-button>
                  <el-button type="primary" size="small" round @click="reset" icon="el-icon-refresh-left">
                    重置
                  </el-button>
                </div>
              </slot>
            </el-col>
          </template>
          <template v-else>
            <el-col :span="spans[getIteamName(1,colIteam)]? spans[getIteamName(1,colIteam)] : 6">
              <slot :name="getIteamName(1,colIteam)"></slot>
            </el-col>
          </template>
        </template>
        <!--行数大于两行的情况-->
        <template v-else>
            <!--第一行的最后一个元素-->
            <template v-if="colIteam === 4">
              <el-col :span="5">
                <div v-if="colllapseTitle == '展开'" class="fade-out">
                  <slot name="button" >
                    <div class="button">
                      <el-button type="primary" size="small" round @click="onSubmit" icon="el-icon-search">
                        查询
                      </el-button>
                      <el-button type="primary" size="small" round  @click="reset" icon="el-icon-refresh-left">
                        重置
                      </el-button>
                    </div>
                  </slot>
                </div>
                <div v-else>
                  &nbsp;
                </div>
              </el-col>
              <el-col :span="1">
                <el-button type="text" @click="handleChange4Collapse">
                  {{ colllapseTitle }}
                  <i
                    v-if="colllapseTitle == '展开'"
                    class="el-icon-arrow-up el-icon--right"
                  />
                  <i v-else-if="colllapseTitle == '缩起'" class="el-icon-arrow-down el-icon--right" />
                </el-button>
              </el-col>
            </template>
            <template v-else>
              <el-col :span="spans[getIteamName(1,colIteam)]? spans[getIteamName(1,colIteam)] : 6">
                <slot :name="getIteamName(1,colIteam)"></slot>
              </el-col>
            </template>
        </template>
      </template>
    </el-row>
    <el-collapse-transition v-if="rowNum > 1">
      <div v-show="colllapseTitle == '缩起'" >
        <template v-for="rowIteam in rowNum">
          <div class="g-mt20">
            <el-row v-if="rowIteam !== 1">
              <template v-for="colIteam in 4">
                <!--最后一行的最后一个元素-->
                <template v-if="rowNum === rowIteam && colIteam === 4">
                  <el-col :span="6">
                    <slot name="button">
                      <div class="button">
                        <el-button type="primary" size="small" round @click="onSubmit" icon="el-icon-search">
                          查询
                        </el-button>
                        <el-button type="primary" size="small" round @click="reset" icon="el-icon-refresh-left">
                          重置
                        </el-button>
                      </div>
                    </slot>
                  </el-col>
                </template>
                <template v-else>
                  <el-col :span="spans[getIteamName(rowIteam,colIteam)]? spans[getIteamName(rowIteam,colIteam)] : 6">
                    <slot :name="getIteamName(rowIteam,colIteam)"></slot>
                  </el-col>
                </template>
              </template>
            </el-row>
          </div>
        </template>
      </div>
    </el-collapse-transition>
  </el-form>
</template>

<script>
  export default {
    name: 'TopFormQueryCard',
    props:{
      formModel:{
        require: true,
        type: Object,
      },
      formRules:{
        type: Object,
        default(){
          return{}
        }
      },
      rowNum:{
        type: Number,
        default: 1
      },
      labelWidth:{
        type: String,
        default: '100px',
      },
      spans:{
        type: Object,
        default(){
          return{
          }
        }
      }
    },
    data(){
      return{
        colllapseTitle: '展开',
      }
    },
    methods:{
      getIteamName(rowNum, colNum){
        if(colNum === 4) return 'discard';
        let result = 3 * (rowNum - 1) + colNum;
        return 'item' +  result;
      },
      onSubmit(){
        this.$emit('onSubmit');
      },
      reset(){
        this.$emit('reset');
      },
      handleChange4Collapse() {
        if (this.colllapseTitle === '展开') {
          this.colllapseTitle = '缩起';
        } else if (this.colllapseTitle === '缩起') {
          this.colllapseTitle = '展开';
        }
      },
    }
  };
</script>

<style scoped>
  [class*="el-col-"]{
    height: 32px;
  }
  .button {
    height: 40px;
    margin-left:45px;
    float: left;
  }
  .fade-out{
    -webkit-animation: displayAction .5s linear 0ms 1;
    -o-animation: displayAction .5s linear 0ms 1;
    animation: displayAction .5s linear 0ms 1;
  }
  @keyframes displayAction {
    from { opacity:0; }
    to { opacity: 1; }
  }
  @-webkit-keyframes displayAction {
    from {opcity: 0;}
    to {opacity: 1;}
  }
</style>

<style lang="scss">
  #DataQueryTopQueryForm{
    .g-mt20 {
      .el-row{
        margin-top: 20px;
      }
    }
    .el-form-item__label{
     font-weight: bold;
    }
  }

</style>
