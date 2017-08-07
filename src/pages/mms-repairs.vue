<template>
    <div>
        <div id='contentBox'>
          <div class='searchBox clear'>
            <p class='left'>
              <span class='search'></span>
              <input type='text' placeholder='请输入搜索内容'/>
            </p>
            <span class='right' @click='show'>筛选</span>
           
          </div>
          <div class='chooseOption' 
          v-if='this.chooseList.length!=0'>
            <mt-button size="small" v-for='item in chooseList'>{{item.name}}</mt-button>
          </div>
          <ul class='list'>
            <li class='clear'>
              <a class='left'href=''>
                <img src='../../static/img/repair1.png'>
              </a>
              <div class='right'>
                <h3 class='title'>[系统设备]关于充值机无法充值的关于充值机无法充值的关于充值机无法充值的关于充值机无法充值的</h3>
                <p class='detail'>中心校区一教学楼3号楼</p>
                <p class='detail'>
                  <span class='person'>李老师</span>
                  <span class='tel'>15011230013</span>
                </p>
                <p class='time'><span class='timeIcon'></span><time>2017-02-11 15:58:15</time></p>
                <p class='statusBox clear'>
                  <router-link  :to="{path:'repairProgress',query:{'title':'报修进度'}}"class='status'>查看进度
                  </router-link >
                  <router-link  :to="{path:'repairReturn',query:{'title':'报修退回'}}"class='status'>退回
                  </router-link >
                  <router-link  :to="{path:'repairEvaluate',query:{'title':'报修解决详情'}}"class='status'>是否解决
                  </router-link >
                  
                </p>
              </div>
            </li>
            <li class='clear'>
              <a class='left'href=''>
                <img src='../../static/img/repair1.png'>
              </a>
              <div class='right'>
                <h3 class='title'>[系统设备]关于充值机无法充值的关于充值机无法充值的关于充值机无法充值的关于充值机无法充值的</h3>
                <p class='detail'>中心校区一教学楼3号楼</p>
                <p class='detail'>
                  <span class='person'>李老师</span>
                  <span class='tel'>15011230013</span>
                </p>
                <p class='time'><span class='timeIcon'></span><time>2017-02-11 15:58:15</time></p>
                <p class='statusBox clear'>
                  <router-link  :to="{path:'repairDeliver',query:{'title':'报修转交'}}"class='status'>转交
                  </router-link >
                  <router-link  :to="{path:'repairAccept',query:{'title':'报修受理'}}"class='status'>受理
                  </router-link >
                  <router-link  :to="{path:'repairFinish',query:{'title':'执行完成'}}"class='status'>执行完成
                  </router-link >
                </p>
              </div>
            </li>
            
            
          </ul>
          <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            position="top"
            :modal=false
          >
           <div class='box'>
              <div>
                <h3 class='name'>类型</h3>
                <div class='option'>
                  <span 
                  v-for='(item,index) in typeList' :class='{active:index==nowTypeIndex}' @click='addTypeClass(index)'>{{item.name}}</span>
                </div> 
              </div>
              <div>
                <h3 class='name'>状态</h3>
                <div class='option'>
                  <span v-for='(item,index) in statusList' 
                  :class="{active:index==nowStatusIndex}" @click='addStatusClass(index)'>{{item.name}}</span>
                </div>
              </div>
           </div> 
           <div class='btnBox'>
              <mt-button size="normal" class='reset'@click='reset'>重置</mt-button><mt-button size="normal" class='ok' @click='confirm'>确定</mt-button>
           </div>
          </mt-popup> 

        </div>
        <footerNav></footerNav>
        
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import  footerNav from '../components/mt-footer'


export default {
  name: 'repairs',
  components:{
    footerNav
  },
  data(){
    return {
      popupVisible:false,
      typeList:[
       {name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"}
      ],
      statusList:[
          {name:"申请中"},{name:"执行中"},{name:"已退回"}
      ],
      chooseList:[
      ],
      nowStatusIndex:0,
      nowTypeIndex:0
    }
  },
  methods:{
    show(){
      this.chooseList=[];//点击筛选清空选择条件：
     this.popupVisible=!this.popupVisible;
    },
    tip(){
      Toast({
        message: '您已催单成功！',
        position: 'bottom',
        duration: 5000
      });
    },
    warn(){
      Toast({
        message: '您尚未选择完整的筛选条件！',
        position: 'bottom',
        duration: 5000
      });
    },
    addStatusClass(index){
     this.nowStatusIndex=index;
    },
    addTypeClass(index){
     this.nowTypeIndex=index;
    },
    confirm(){

      if(this.nowTypeIndex!=-1&&this.nowStatusIndex!=-1){
        /*if(this.chooseList.length!=0){
          
          this.chooseList.push(this.typeList[this.nowTypeIndex],this.statusList[this.nowStatusIndex]);
         }else{
        
         }*/
        this.chooseList.push(this.typeList[this.nowTypeIndex],this.statusList[this.nowStatusIndex]);
      }else{
        this.warn();
      }
     
      this.popupVisible=false;
     
     
     console.log(this.chooseList);

    },
    reset(){
      this.nowStatusIndex=-1;
       this.nowTypeIndex=-1;
    }
  }
}
</script>

<style scoped>
.v-modal{
   top:8rem !important; 
}
#contentBox{
  background:#f6f6f6;
  width:100%;
  box-sizing:border-box;
  /*height:40rem;*/
  overflow-y:auto;
}

.searchBox{
  padding:0.8rem  0  1.52rem 1.56rem;
  background:#fff;
}
.searchBox p{
  width:20rem;
  float:left;
  height:2.48rem;
  font-size:1.04rem;
  line-height:2.48rem;
  border:1px solid #d0d0d0;
  border-radius:10px;
}
.searchBox .right{
  float:right;
  font-size:1.08rem;
  line-height:2.48rem;
  margin-right:2rem;

}
.searchBox .search{
  display:inline-block;
  width:1.6rem;
  height:1.6rem;
   background:url(../../static/img/search.png) no-repeat;
  background-size:contain;
  vertical-align:middle;
  margin-left:0.2rem;
}
.searchBox input{
 width:17rem;
  
}
.list{
  padding:0 0 0.84rem   1.56rem;
  background:#fff;
}
.list li{
  padding:0.72rem  1rem  1.28rem  0;
  border-bottom:1px solid #e4e4e4;
}
.list li:nth-last-child(1){
  border-bottom:none;
}
.list .left{
  float:left;
  margin-top:0.5rem;
}
.list img{
  width:3.88rem;
  height:3.88rem;
  margin-left:0.4rem;
}
.list .right{
  float:left;
  margin-left:1.12rem;
}
.list .title{
  font-size:1.12rem;
  line-height:2.32rem;
  font-weight:bold;
  width:18rem;
  overflow:hidden;
  vertical-align:middle;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.list .detail{
  font-size:1.04rem;
  line-height:1.84rem;
}
.list  .person{
  padding-left:1.52rem;
  width:1.2rem;
  height:1.2rem;
  background:url(../../static/img/person.png) no-repeat;
  background-size:contain;
}
.list  .tel{
  padding-left:1.52rem;
  width:1.2rem;
  height:1.2rem;
  background:url(../../static/img/telLogo.png) no-repeat;
  background-size:contain;
}
.list  .time{
  font-size:1rem;
  line-height:1.72rem;
  margin-bottom:0.72rem;
}
.list .timeIcon{
  display:inline-block;
  width:1.2rem;
  height:1.2rem;
  background:url(../../static/img/time.png) no-repeat;
  background-size:contain;
  margin-right:0.3rem;
}
.statusBox .status{
  display:inline-block;
  padding:0 0.8rem;
  height:1.64rem;
  line-height:1.64rem;
  text-align:center;
  color:#6a6a6a;
  border:1px solid #6a6a6a ;
  border-radius:10px;
  float:right;
  margin-left:0.3rem;
}
.box{
  width:100%;
  padding-bottom:2rem;
  border-bottom:1px solid #bfbfbf;
}
.option{
  display:flex;
  display: -moz-flex; 
  display: -webkit-flex; 
  width:100%;
  justify-content:space-around;   
  align-items:center; 
  flex-wrap:wrap;

}
.box .name{
  font-size:0.92rem;
  line-height:2.12rem;
  padding-left:1.6rem;


}
.option span{
  font-size:1.04rem;
  width:7.84rem;
  height:2.56rem;
  line-height:2.56rem;
  color:#3d3d3d;
  background:#fff;
  border:1px solid #c7c7c7;
  text-align:center;
  border-radius:5px;
  margin: 0.6rem 0;

}
.option span.active{
  background:#f59549;
  color:#fff;
}
.btnBox{
  width:100%;
}
.mint-button--normal{
  padding:0;
  width:50%;
  background:#fff;
  color:#000;
  font-size:1.12rem;
  height:3.76rem;
  border-radius:0;

}
.chooseOption{
  display:flex;
  display: -moz-flex; 
  display: -webkit-flex; 
  width:100%;
  justify-content:space-around;   
  align-items:center; 
  flex-wrap:wrap;
  background:#fff;
  
}
.mint-button{
  
  color:#3d3d3d;
}
.ok{
  background:#f59549;
  color:#fff;
}
</style>
