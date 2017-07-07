<template>
  <ul class='footer'>
    <router-link v-for='item in navList' 
    :class="'icon'+item.id"
    :to="{path:item.path,query: { title: item.titleName }}" 
    tag='li' active-class="active" >
      <span ></span>
      <strong>{{item.titleName}}</strong>
    </router-link> 
  </ul>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navList:[
        {
          titleName:'消息',
          path:'msg',
          id:"msg"
        

        },
        {
          titleName:'报修',
          path:'repairs',
          id:"repair"
        },
        {
          titleName:'报修单',
          path:'addFile',
          id:'addFile'
        },
        {
          titleName:'帮助',
          path:'help',
          id:"help"
        },
        {
          titleName:'我的',
          path:'aboutMe',
          id:'aboutMe'
         
        },

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer{
  position:fixed;
  left:0;
  bottom:0;
  height:3.96rem;
  font-size:0.7rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background:#fff;
  display: -moz-box; 
  display: -webkit-box; 
  display: box;
  width:100%;
  -moz-box-orient:inline-axis;
  -webkit-box-orient:inline-axis; 
  -o-box-orient:inline-axis;
  box-orient:inline-axis; 
  border-top:1px solid #e4e4e4;
} 
.footer li{
  -moz-box-flex: 2; 
  -webkit-box-flex: 2; 
  box-flex: 2;
  text-align:center;
 
}
.footer li.active{
  color:#f49448;
}
.footer li span{
  
  display:block;
  width:2rem;
  height:2rem;
  margin:0.72rem 0 0 1.65rem;
}
.footer .iconmsg span{
  background:url(../../static/img/msg.png) no-repeat ;
  background-size:contain;
}
.footer .iconmsg.active  span{
  background:url(../../static/img/msgActive.png) no-repeat ;
  background-size:contain;
}

.footer .iconrepair span{
  background:url(../../static/img/repair.png) no-repeat ;
  background-size:contain;
}
.footer .iconrepair.active span{
  background:url(../../static/img/repairActive.png) no-repeat ;
  background-size:contain;
}
.footer .iconaddFile span{
  width:3.2rem;
  height:3.2rem;
  background:url(../../static/img/addFile.png) no-repeat ;
  background-size:contain;
  margin:0.48rem 0 0 1rem;
}

.footer .iconhelp span{
  background:url(../../static/img/help.png) no-repeat ;
  background-size:contain;
}
.footer .iconhelp.active span{
  background:url(../../static/img/helpActive.png) no-repeat ;
  background-size:contain;
}
.footer .iconaboutMe span{
  background:url(../../static/img/aboutMe.png) no-repeat ;
  background-size:contain;
}
.footer .iconaboutMe.active  span{
  background:url(../../static/img/aboutMeActive.png) no-repeat ;
  background-size:contain;
}
.footer li strong{
  display:block;
}

</style>
