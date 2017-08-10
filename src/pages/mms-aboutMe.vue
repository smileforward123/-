<template>
    <div>
      <div id='contentBox'>
          <ul class='list'>
            <li class='clear name'>
            <span class='icon'></span><span>姓名</span>
            <strong class='right' v-cloak>{{data.name}}</strong>
            </li>
            <li class='clear tel'>
            <span class='icon'></span><span>手机号</span><strong class='right'
            v-cloak>{{data.phone_no}}</strong>
            </li>
            <li class='clear college'>
            <span class='icon'></span><span>院校</span><strong class='right' v-cloak>{{data.org_name}}</strong>
            </li>
            <li class='clear status'>
            <span class='icon'></span><span>身份</span><strong class='right'v-cloak  v-if='data.identity_type==0'>未指定</strong><strong class='right'v-cloak  v-if='data.identity_type==1'>客户</strong><strong class='right'v-cloak  v-if='data.identity_type==2'>运维</strong><strong class='right'v-cloak  v-if='data.identity_type==4'>管理员</strong>
            </li>
            <li class='clear category'>
            <span class='icon'></span>
            <span>执行类别</span>
            <div class='right rightBox'>
            <strong>照明电器</strong><strong>教学设施</strong> <strong>清掏</strong><strong>水电</strong><strong>宽带网络</strong><strong>房屋修复</strong><strong>家具门窗</strong>其他</div>
            </li>
            
          </ul>
          <div class='clear version'>
             <span class='icon'></span><span>当前版本</span><strong class='right'>1.3.2</strong>
          </div>
          <div class='btnBox'>
            <mt-button type="primary">修改密码</mt-button>
            <mt-button type="primary" @click='quit'>退出登录</mt-button>
          </div>
          
      </div>
       <footerNav></footerNav>
    </div>
</template>

<script>
import  footerNav from '../components/mt-footer'
import { MessageBox } from 'mint-ui';
export default {
  name: 'aboutMe',
  components:{
    footerNav
  },
  data(){
    return {
      data:{

      }
    };
  },
  mounted:function(){
     var that=this;
    this.$http.post('http://172.16.15.75:50600/api/c_user_query/by_id',{
       
        user_id:"5987cd0499f69944485e8ff7"
       
    }).then(function(res){
        console.log(res.data) ;
       that.data=res.data.data;
       console.log(that.data);

    }).catch(function(res){
      console.log(res);
    });
    
  },
  methods:{
    quit(){
      MessageBox({
        message: '您确定要退出吗?',
        showCancelButton: true
      });
    },
    

  } 
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

#contentBox{
  background:#f6f6f6;
  width:100%;
  box-sizing:border-box;
  /*height:40rem;*/
  overflow-y:auto;
  
}
.list{
  background:#fff;
  padding-left:1.48rem;
  border-bottom:1px solid #e8e8e8;
}
.list li{
  font-size:1.2rem;
  line-height:4.48rem;
  color:#393939;
  border-bottom:1px solid #e8e8e8;
}
.list li:nth-last-child(1){
  border-bottom:none;
}
.version{
   font-size:1.2rem;
  line-height:4.48rem;
  color:#393939;
  margin-top:0.64rem;
  border-top:1px solid #e8e8e8;
  border-bottom:1px solid #e8e8e8;
  background:#fff;

}
.list span{
  float:left;
}
.list .right{
  float:right;
  margin-right:1.8rem;
  width:60%;
  text-align:right;
  color:#a9a9a9;
}
/*.list .rightBox{
  display: -moz-flex; 
  display: -webkit-flex; 
  display: flex;
  width:100%;
   justify-content:space-around;   
  align-items:center;
  }*/
.right strong{
  font-size:1.04rem;
  line-height:2.64rem;
  display:inline-block;
  margin-right:1rem;
}
.list .icon{
  width:2rem;
  height:2rem;
  margin-right:1.2rem;
  margin-top:1rem;
  vertical-align:middle;
}
.name .icon{
  background:url(../../static/img/name.png) no-repeat;
  background-size:contain;
}
.tel .icon{
  background:url(../../static/img/tel.png) no-repeat;
  background-size:contain;
}
.college .icon{
  background:url(../../static/img/college.png) no-repeat;
  background-size:contain;
}
.status .icon{
  background:url(../../static/img/status.png) no-repeat;
  background-size:contain;
}
.category .icon{
  background:url(../../static/img/category.png) no-repeat;
  background-size:contain;
}
.version .icon{
  display:inline-block;
   width:2rem;
  height:2rem;
  margin-right:1.2rem;
  margin-left:1.2rem;
  vertical-align:middle;
  background:url(../../static/img/version.png) no-repeat;
  background-size:contain;
}
.btnBox{
  margin:3.44rem  0 3.68rem;
  display: -moz-flex; 
  display: -webkit-flex; 
  display: flex;
  width:100%;
   justify-content:space-around;   
  align-items:center;
}
.mint-button{
  font-size:1.36rem;
}
.mint-button--normal{
  padding:0 3.4rem;
}
.mint-button--primary{
  background:#f59549;
}
</style>
