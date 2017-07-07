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
        <div class='region' v-for='(item,index) in regionList'>
            <h3 @click='addClass(index)' :class="{active:nowIndex==index}"><span class='icon'></span>{{item.name}}
            <span class='arrow'></span></h3>
            <ul class='buildList' v-show='nowIndex==index' 
            >
              <li v-for='(item,index) in regionList.nameList' 
              @click='addClassLi(index)' 
              :class="{activeLi:nowIndexLi==index}">{{item.name}}<span class='right'></span></li>
            </ul>
        </div>
        <div class='btnBox'>
          <mt-button type="primary" class='ok'>转交</mt-button>
          </mt-popup>
        </div>

      </div>
      
      
       
    </div>
</template>

<script>

export default {
  name:'repairProgress',
  data(){
   return {
     regionList:[
       {
        name:"新中新",
        nameList:[
          {name:"lii"},{name:"kkkk"},{name:"mmmmm"}
        ]
      },
      {
        name:"天津大学",
        nameList:[
          {name:"lmiiy"},{name:"rty"},{name:"vbnn"}
        ]
      },
      {
        name:"山东大学",
        nameList:[
          {name:"aa"},{name:"vcdf"},{name:"ersd"}
        ]
      }
     ],
     nowIndex:0,
     nowIndexLi:0,
    
   }
  },
  methods:{
    addClass(index){
      this.nowIndex=index;
    },
    addClassLi(index){
    this.nowIndexLi=index;
    }
  }
  
}
</script>

<style scoped>
.title{
  font-size:1.2rem;
  height:4rem;
  line-height:4rem;
  color:#000;
  text-indent:1rem;
  background:#fff;
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
  margin-top:1rem;
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
</style>
