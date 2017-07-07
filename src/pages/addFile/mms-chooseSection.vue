<template>
    <div>
        <div id='contentBox'>
          <div class='region' v-for='(item,index) in regionList'>
            <h3 @click='addClass(index)' :class="{active:nowIndex==index}"><span class='icon'></span>{{item.name}}
            <span class='arrow'></span></h3>
            <ul class='buildList' v-show='nowIndex==index'>
              <li>教学楼1号楼</li>
              <li>男生寝室3号楼</li>
              <li>科技楼</li>
            </ul>
          </div>
          
        </div>
       
    </div>
</template>

<script>

export default {
  name: 'chooseSection',
  data(){
   return {
     regionList:[
       {name:"中心校区"},{name:"千佛山校区"},{name:"趵突泉校区"}
     ],
     nowIndex:0
   }
  },
  methods:{
    addClass(index){
      this.nowIndex=index;
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
.region h3{
  font-size:1.2rem;
  height:4.4rem;
  line-height:4.4rem;
  border-bottom:1px solid #e3e3e3;
  color:#424242;
}
.region .active .arrow{
  background:url(../../../static/img/arrowUp.png) no-repeat;
  background-size:contain;
}
.region .icon{
  float:left;
  display:inline-block;
  width:2rem;
  height:2rem;
  background:url(../../../static/img/building.png) no-repeat;
  background-size:contain;
  margin:1.52rem 0.96rem 0rem 1.52rem;
  vertical-align:middle;

}
.region .arrow{
  float:right;
  display:inline-block;
  width:1.2rem;
  height:1.2rem;
  background:url(../../../static/img/arrowRight.png) no-repeat;
  background-size:contain;
  margin:1.52rem 1.6rem 0 0;
  vertical-align:middle;

}
.buildList{
  padding:0 1.6rem  0.56rem 4.12rem;
  border-bottom:1px solid #efefef;

}
.buildList li{
  font-size:1.2rem;
  line-height:3.44rem;
  color:#bcbcbc;
}
</style>
