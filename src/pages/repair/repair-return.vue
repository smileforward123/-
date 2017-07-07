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
        <div class='addImgBox'>
          <h3 class='title'>请填写退回原因</h3>
          <mt-field  placeholder="描述..." type="textarea" rows="5"></mt-field>
          <div class='uploadBox'>
                <canvas id="myCanvas" style="display: none" ></canvas>
                <span><i class="uploadImg"></i>添加图片</span>
                <input type="file" name="" multiple="multiple" id="insertimg" >
            </div>
        </div>
        <div class='btnBox'>
          <mt-button type="primary" class='ok'>退回</mt-button>
          </mt-popup>
        </div>

      </div>
      
      
       
    </div>
</template>

<script>

export default {
  name:'repairProgress',
 
  
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
