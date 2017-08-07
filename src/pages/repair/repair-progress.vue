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
                <router-link class='remark'
                 :to="{path:'repairRemark',query:{'title':'补充说明'}}">补充说明</router-link>
              </p>
              <p class='time detail'>
                <span class='timeIcon'></span>
                <time>2017-02-11 15:58:15</time>
              </p>
            </div> 
          </div>
          
        </div>
        <div class='progressBox clear'>
          
          <ul class='list'>
            <li class='clear'>
              <div class='right'>
                <span class='statusLogo active'></span>
                <div class='statusDetail'>
                  <h3 class='detail progress'>
                  待确认，服务已由[天津卓越新中新新一阳工程师、刘工程师]执行完成</h3>
                  <p class='detail'>
                    <span class='title'>执行描述：</span>  充值机无法充值问题已经解决，是由于后台服务造成的
                  </p>
                  <div class='imgBox clear'>
                    <div></div><div></div><div></div>
                  </div>
                  <p class='detail'>操作者：杨工程师</p>
                  <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
            </li>
            <li class='clear'>
              
              
              <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <h3 class='detail'>执行中，服务已由[天津卓越新中新新一阳工程师、刘工程师]正在执行</h3>
                  <p class='detail'>
                    <span class='title'>未解决描述：</span>  充值机无法充值问题已经解决，是由于后台服务造成的
                  </p>
                  <div class='imgBox clear'>
                    <div></div><div></div><div></div>
                  </div>
                  <p class='detail'>操作者：杨工程师</p>
                  <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
            </li>
            <li class='clear'>
              <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <h3 class='detail'>执行中，服务已由[天津卓越新中新新一阳工程师、刘工程师]正在执行</h3>
                  <p class='detail'>操作者：杨工程师</p>
                  <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
              
            </li>
            <li  class='clear'>
              <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <p class='detail'><span>补充说明：</span>充值机无法充值可能是由于验钞机无法识别的缘故</p>
                  <p class='detail'>操作者：杨工程师</p>
                  <p class='detail'>
                    <span class='timeIcon'></span>
                    <time>2017-07-07 15:58</time>
                  </p>
                </div>
              </div>
              
            </li>
            <li class='clear'>
             <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <h3 class='detail'>已分配，服务已由分配给[天津卓越新中新新一阳工程师、刘工程师]</h3>
                 <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
            </li>
            <li class='clear'>
             <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <h3 class='detail'>已受理，服务已由[天津卓越新中新新一阳工程师、刘工程师]受理完成</h3>
                  <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
            </li>
            <li  class='clear'>
              <div class='right'>
                <span class='statusLogo'></span>
                <div class='statusDetail'>
                  <h3 class='detail'>已申请，服务已由[天津卓越新中新新一阳工程师、刘工程师]正在执行</h3>
                  <p class='detail'><span class='timeIcon'></span><time>2017-07-07 15:58</time></p>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <footerNav></footerNav>
      
       
    </div>
</template>

<script>
import  footerNav from '../../components/mt-footer'
export default {
  name:'repairProgress',
  components:{
    footerNav
  },
  
}
</script>

<style scoped>
#contentBox{
  background:#f6f6f6;
  width:100%;
  box-sizing:border-box;
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
  color:#000;

}
.progressBox{
  margin-top:0.64rem;
  padding:1.52rem 1.6rem 0;
  background:#fff;
  
}
.progressBox .left{
  float:left;
}
.progressBox .right{
  float:right;
}
.list li{
 
  border-left: 1px dashed #dddddd;
  /*padding-left: 2.96rem;
  padding-top: 0.8rem;*/
  position:relative;

}
.list  .statusLogo.active{
  display:inline-block;
  width:1rem;
  height:1rem;
  background:url(../../../static/img/active.png) no-repeat;
  background-size:contain;
  position:absolute;
  left:-0.5rem;
  top:0;
}
.list  .statusLogo{
  display:inline-block;
  width:1rem;
  height:1rem;
  background:#c5c5c5;
  border-radius:50%;
  position:absolute;
  left:-0.5rem;
  top:0;
}
.list .statusDetail{
  margin-left:0.6rem;
   border-bottom:1px solid #e4e4e4;
   padding-bottom:0.8rem;
}
.list li .detail{
  font-size:1.08rem;
  line-height:1.6rem;
  color:#8e8e8e;
 
}
.imgBox div{
  width:6rem;
  height:6rem;
  float:left;
  margin-right:0.8rem;
  background:pink;
}
.right .title{
  color:#3c3c3c;
}
</style>
