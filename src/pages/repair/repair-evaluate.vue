<template>
    <div>
      <div id='contentBox'>
        <div class='proIntro'>
          <h4>[系统设备]关于充值机无法充值的问题</h4>
          <div class='proImg clear'>
            <a class='left'>
              <img src='../../../static/img/finish.png'/>
            </a>
            <div class='right'>
              <h5 class='detail'>中心校区-教学楼3号楼</h5>
              <p class='detail'>
                <span class='person'>李老师</span>
                <span class='tel'>15011230013</span>
                
              </p>
              <p class='time detail'>
                <span class='timeIcon'></span>
                <time>2017-02-11 15:58:15</time>
              </p>
            </div> 
          </div>
          
        </div>
        <mt-navbar v-model='selected'>
          <mt-tab-item id="1">已解决</mt-tab-item>
          <mt-tab-item id="2">未解决</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model='selected' >
          <mt-tab-container-item id="1">
            <div class='evaluateBox'>
              <template>
                    <score  @toscore="setscore"></score>
              </template>
            </div>
            <div class='addImgBox'>
              <mt-field  placeholder="期待您的评价..." type="textarea" rows="5"></mt-field>
              <div class='uploadBox'>
                  <canvas id="myCanvas" style="display: none" ></canvas>
                  <span><i class="uploadImg"></i>添加图片</span>
                  <input type="file" name="" multiple="multiple" id="insertimg" >
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class='addImgBox'>
              <mt-field  placeholder="期待您的评价..." type="textarea" rows="5"></mt-field>
              <div class='uploadBox'>
                  <canvas id="myCanvas" style="display: none" ></canvas>
                  <span><i class="uploadImg"></i>添加图片</span>
                  <input type="file" name="" multiple="multiple" id="insertimg" >
              </div>
            </div>
          </mt-tab-container-item>
          
        </mt-tab-container>
        
        <div class='btnBox'>
          <mt-button type="primary" class='ok'>确定</mt-button>
          </mt-popup>
        </div>

      </div>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import score from "vue-score"
import "vue-score/dist/vue-score.css"

export default {
  name:'repairEvaluate',
  data(){
   return {
     selected:"1",
      parameter:{},
      
   }
  },
  methods:{
      setscore(arr){
        this.parameter[arr[0]] = arr[1]
      }
  },
  components:{score}
 
  
}
</script>

<style scoped>
.evaluateBox{
  padding-left:1.36rem;
  font-size:1.2rem;
  line-height:3rem;
  background:#fff;
  margin-top:1rem;
}
#contentBox{
  background:#fff;
  width:100%;
  box-sizing:border-box;
  bottom:0;
  /*height:40rem;*/
  overflow-y:auto;
}
.proIntro{
  padding:0.6rem   1.6rem  1.12rem 1.8rem;
  background:#fff;

}
.proIntro h4{
  font-size:1.12rem;
  line-height:2.4rem;
  color:#5c5c5c;
  font-weight:bold;


}
.proImg .left{
  float:left;
  

}
.proImg img{
  width:3.92rem;
  height:3.92rem;
}
.proImg .right{
  float:left;
  margin-left:1rem;
}
.proImg .detail{
  font-size:1.04rem;
  line-height:1.84rem;
  

}
.proImg .person{
  padding-left:1.52rem;
  width:1.2rem;
  height:1.2rem;
  background:url(../../../static/img/person.png) no-repeat;
  background-size:contain;
}
.addImgBox{
  margin-top:1rem;/**/
}
.uploadImg {
    display: inline-block;
    vertical-align: middle;
    width: 5.08rem;
    height: 5.08rem;
    margin-right: 0.4rem;
    background:url(../../../static/img/addImg.png) no-repeat;
    background-size:contain;
    margin-left:1.6rem;
}
.uploadBox{
    position: relative;
    padding-bottom:6rem;
    background:#fff;
}
#insertimg {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;

}
.tel{
  padding-left:1.52rem;
  width:1.2rem;
  height:1.2rem;
  background:url(../../../static/img/tel.png) no-repeat;
  background-size:contain;
}
.timeIcon{
  display:inline-block;
  width:1.2rem;
  height:1.2rem;
  background:url(../../../static/img/time.png) no-repeat;
  background-size:contain;
  margin-right:0.3rem;
}
.remark{
  display:inline-block;
  width:4.88rem;
  height:1.68rem;
  border:2px solid #6d6d6d;
  border-radius:0.72rem;
  text-align:center;
  font-size:0.8rem;
  line-height:1.68rem;

}
.btnBox{
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:4rem;
  line-height:4rem;
 
}
.mint-button{
 
  font-size:1.6rem;
}
.mint-button--primary{
   background:#f59549;
    width:100%;
    height:100%;
}
</style>
