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
        <div class='acceptBox'>
          <h3><span></span>优先级：5级最高</h3>
          <mt-radio
            align="right"
           :options="options">
          </mt-radio>
        </div>
        <div class='btnBox'>
          <mt-button type="primary" class='ok'>确定</mt-button>
          </mt-popup>
        </div>

      </div>
      
      
       
    </div>
</template>

<script>

export default {
  name:'repairAccept',
  data(){
   return {
      list:[
        {
          number:5,
          id:'five'
        },
         {
          number:4,
          id:'four'
         },
         {
          number:3,
          id:'three'
         },
         {
          number:2,
          id:'two'
         },
         {
          number:1,
          id:'one'
         }

      ],
      nowIndex:0,
      options:[
          {
            label: '5',
            value: '5',
            
          },
          {
            label: '4',
            value: '4'
          },
          {
            label: '3',
            value: '3'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '1',
            value: '1'
          }
      ]
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
.acceptBox h3{
  font-size:1.2rem;
  height:4rem;
  line-height:4rem;
  color:#000;
}
.acceptBox span{
  display:inline-block;
  width:1.28rem;
  height:1.36rem;
   background:url(../../../static/img/grade.png) no-repeat;
  background-size:contain;
  margin:0rem  0 0 1.6rem;
  vertical-align:middle;
}
.list{
  width:80%;
  margin:0 auto;
}
.list li{
  height:3.28rem;
  width:100%;
  margin-bottom:0.96rem;


}
.list button{
  width:100%;
  height:100%;
  border:3px solid #009eec;
  background:#fff;
  border-radius:5px;
}

.list .five button{
  border:3px solid #ff520d;
  color:#ff520d;
}
.list .four button{
  border:3px solid #ffa906;
  color:#ffa906;
}
.list .three button{
  border:3px solid #00a0e8;
  color:#00a0e8;
}
.list .two button{
  border:3px solid #42d6c6;
  color:#42d6c6;
}
.list .one button{
  border:3px solid #73d3fb;
  color:#73d3fb;
}
.list .active button{
  background:url(../../../static/img/correct.png) no-repeat center  #ff9934;
  border:none;
  color:#fff;
}
.title{
  font-size:1.2rem;
  height:4rem;
  line-height:4rem;
  color:#000;
  text-indent:1rem;
  background:#fff;
}
#contentBox{
  background:#f6f6f6;
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
