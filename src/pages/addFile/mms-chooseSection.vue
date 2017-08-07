<template>
    <div>
        <div id='contentBox'>
          <div class='region' v-for='(item,index) in regionList'>
            <h3 @click='addClass(index)' :class="{active:nowIndex==index}"><span class='icon'></span>{{item.name}}
            <span class='arrow'></span></h3>
            <ul class='buildList' v-show='nowIndex==index'>
            <li v-for='(itemOption,index) in item.region' :class="{activeLi:nowIndexLi==index}" @click='addClassLi(index)'>{{itemOption.address}}<span class='right'></span></li>
            </ul>
          </div>
          <div class='btnBox'>
          <mt-button type="primary" class='ok' @click='confirm'>确定</mt-button>
          </mt-popup>
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
      {
        name:"中心校区",
        region:[
          {address:"教学楼1号楼"},
          {address:"男生寝室3号楼"},
          {address:"科技楼"}

        ]
      },
      {
        name:"千佛山校区",
        region:[
          {address:"教学楼5号楼"},
          {address:"男生寝室8号楼"},
          {address:"和鸣楼"}

        ]
      },
      {
        name:"趵突泉校区",
        region:[
          {address:"教学楼2号楼"},
          {address:"男生寝室6号楼"},
          {address:"和君楼"}

        ]
      }
       
    ],
    nowIndex:0,
    nowIndexLi:0,
    chosedRegion:''
   }
  },
  methods:{
    addClass(index){
      this.nowIndex=index;
    },
    addClassLi(index){
      this.nowIndexLi=index;
    },
    confirm(){
      console.log(this.regionList[this.nowIndex].region[this.nowIndexLi].address);
      this.chosedRegion=this.regionList[this.nowIndex].region[this.nowIndexLi].address;
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
.buildList .activeLi{
  color:#f0954e;
}
.buildList .activeLi .right{
  width:1.72rem;
  height:1.6rem;
  background:url(../../../static/img/right.png) no-repeat;
  background-size:contain;
  display:inline-block;
  vertical-align:middle;
  float:right;
  margin-right:3.2rem;
  margin-top:1rem;
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
