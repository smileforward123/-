<template>
    <div id='contentBox'>
      <h3 class='title'>问题类型</h3>
      <ul class='list'>
        <router-link tag='li' class='set'
         :to="{path:'accountSet',query:{title:'账号设置'}}">
          <span></span>账号设置
        </router-link>
        <router-link tag='li' class='msg' 
        :to="{path:'msgHelp',query:{title:'消息问题'}}">
          <span></span>消息
        </router-link>
        <router-link  tag='li' class='region' 
        :to="{path:'repairHelp',query:{title:'报修区域划分'}}">
          <span></span>报修区域划分
        </router-link>
        <router-link tag='li' class='classify' 
        :to="{path:'repairsGenre',query:{title:'报修类别'}}">
          <span></span>报修类别
        </router-link>
        <router-link  tag='li' class='register'
         :to="{path:'registerHelp',query:{title:'用户注册'}}">
          <span></span>用户注册
        </router-link>
      </ul>
        
        
    </div>
</template>

<script>


export default {
  name: 'helpCenter',
  data(){
   return {
     
   }
  }
  
}
</script>

<style scoped>
#contentBox{
  background:#f6f6f6;;
  width:100%;
  box-sizing:border-box;
  /*height:40rem;*/
  overflow-y:auto;
  bottom:0;
}
.title{
  font-size:0.92rem;
  line-height:2.28rem;
  height:2.6rem;
  color:#8d8d8d;
  text-indent:1.6rem;
}
.list li{
  font-size:1.2rem;
  line-height:4.16rem;
  height:4.16rem;
  border-top:1px solid #e4e4e4;
  margin-bottom:0.64rem;
  background:#fff;
}
.list  span{
  display:inline-block;
  width:2rem;
  height:2rem;
  margin:1.4rem   1.04rem  1.28rem 1.52rem;
  vertical-align:middle;
}
.set span{
  background:url(../../static/img/set.png) no-repeat;
  background-size:contain;
}
.msg span{
  background:url(../../static/img/msg1.png) no-repeat;
  background-size:contain;
}
.region span{
  background:url(../../static/img/region.png) no-repeat;
  background-size:contain;
}
.classify span{
  background:url(../../static/img/classify2.png) no-repeat;
  background-size:contain;
}
.register span{
  background:url(../../static/img/register.png) no-repeat;
  background-size:contain;
}
</style>
