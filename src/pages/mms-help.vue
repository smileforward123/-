<template>
    <div>
        <div id='contentBox'>
          <div class='searchBox clear'>
            <p class='left'>
              <span class='search'></span>
              <input type='text' placeholder='请输入搜索内容'/>
            </p>
          </div>
          <div class='all'>
            <router-link  :to="{path:'helpCenter',query:{title:'全部问题'}}">全部问题</router-link>
          </div>
          <div>
            <h4 class='title'>热点问题</h4>
            <ul class='list'>
              <router-link  :to="{path:'problemDetail',query:{title:'问题详情'}}" tag='li'>
                现金充值机1.2.3版本使用方法<span></span>
              </router-link>
             
            </ul>
          </div>
        </div>
       <footerNav></footerNav>
    </div>
</template>

<script>
import  footerNav from '../components/mt-footer'
export default {
  name: 'help',
  components:{
    footerNav
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
}
.searchBox{
  padding:0.8rem  0  1.52rem 1.56rem;
  background:#fff;
}
.searchBox p{
  width:24rem;
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
 width:20rem;
  
}
.all{
  font-size: 1.28rem;
  line-height: 4.16rem;
  height: 4.32rem;
  color: #3e3e3e;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding-left:2rem;
  background:#fff;
}
.all a{
  color: #3e3e3e;
}
.title{
  color:#8d8d8d;
  font-size:0.92rem;
  line-height:2.2rem;
  height:2.6rem;
  text-indent:1.6rem;
}
.list {
  padding-left:1.48rem;
  background:#fff;
}
.list li{
  font-size:1.28rem;
  line-height:4.16rem;
  height:4.32rem;
  color:#3e3e3e;
  border-bottom:1px solid #e1e1e1;

}
.list li span{
  width:1.2rem;
  height:1.2rem;
  background:url(../../static/img/arrowRight.png) no-repeat;
  background-size:contain;
  display:inline-block;
  float:right;
  margin-right:1.4rem;
  margin-top:1.56rem;
}
</style>
