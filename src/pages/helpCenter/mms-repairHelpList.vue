<template>
    <div id='contentBox'>
      <ul class='list'>
        <router-link  tag='li' 
        :to="{path:'problemDetail',query:{title:'问题详情'}}">
          报修区域问题详情<span></span>
        </router-link>
        
      </ul>
        
        
    </div>
</template>

<script>


export default {
  name: 'repair',
  data(){
   return {
     
   }
  }
  
}
</script>

<style scoped>
#contentBox{
  background:#fff;
  width:100%;
  box-sizing:border-box;
  /*height:40rem;*/
  overflow-y:auto;
  bottom:0;
}
.list{
  padding-left:1.52rem;
}
.list li{
  font-size:1.2rem;
  height:4.56rem;
  line-height:4.56rem;
  color:#3c3c3c;
  border-bottom:1px solid #e9e9e9;
}
.list li span{
  float:right;
  margin-right:1.4rem;
  width:1.2rem;
  height:1.2rem;
  background:url(../../../static/img/arrowRight.png) no-repeat;
  background-size:contain;
  margin-top:1.68rem;
}

</style>
