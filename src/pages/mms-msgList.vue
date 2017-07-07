<template>
    <div>
        <div id='contentBox'>
          <ul class='list'
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="50">
            <li v-for='(item,index) in list'>
              <h3 class='title clear'>
                <span class='txt'>{{item.title}}</span>
                <strong class='del' @click='del'></strong>
              </h3>
              <p class='detail'>{{item.content}}</p>
              <p class='time'><span class='timeIcon'></span><time>2017-02-11 15:45:54</time></p>
            </li>
           
          </ul>
          <div class='loadBox' v-show='loading'>
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </div>
          
        </div>
       <footerNav></footerNav>
    </div>
    
</template>

<script>
import  footerNav from '../components/mt-footer'
import { MessageBox } from 'mint-ui';
export default {
  name: 'msg',
  components:{
    footerNav
  },
  data(){
   return {
     loading:false,
     list:[
       {
         title:'[照明类]关于充值机无法...',
         content:'您的服务订单已由[天津卓越新中新]王小姐受理，正在安排执行人员。'

       },
       {
         title:'[照明类]关于充值机无法1111111',
         content:'您的服务订单已由[天津卓越新中新]王小姐受理，正在安排执行人员。'

       },
       {
         title:'[照明类]关于充值机无法2222',
         content:'您的服务订单已由[天津卓越新中新]王小姐受理，正在安排执行人员。'

       }
       


     ]
   }
  },
  methods:{
    del(){
      MessageBox({
        message: '您确定要删除此项吗?',
        showCancelButton: true
      });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        //console.log(last);
        for (let i = 1; i <= 3; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }

}
</script>

<style scoped>
#contentBox{
  
   background:#f6f6f6;
  width:100%;
  box-sizing:border-box;
  
}
.list{
  padding-bottom:1.28rem;padding-left:1.48rem;
  background:#fff;
 
}

.list li{
  padding: 0.04rem 1.6rem 0.84rem 0;
  border-bottom:1px solid #e8e8e8;
}
.list li:nth-last-child(1){
  border-bottom:none;
}
.list .title{
  font-size:1.28rem;
  line-height:2.96rem;
  color:#3d3d3d;
  font-weight:bold;
  margin-top:0.04rem ;
}
.list .txt{
  float:left;
  width:14.6rem;
  overflow:hidden;
  vertical-align:middle;
  white-space:nowrap;
  text-overflow:ellipsis;

}
.list .del{

float:right;
width:2rem;
height:2rem;
vertical-align:middle;
background:url(../../static/img/del.png) no-repeat;
margin-top:0.3rem;
background-size:contain;

  
}
.list .detail{
  font-size:1.04rem;
  line-height:1.84rem;
  color:#6f6f6f;
}
.list .time{
  font-size:1rem;
  line-height:2.2rem;
  color:#8c8c8c;


}
.list .timeIcon{
  display:inline-block;
  width:1.2rem;
  height:1.2rem;
  background:url(../../static/img/time.png) no-repeat;
  background-size:contain;
  margin-right:0.3rem;

}
.loadBox{
  width:100%;
  text-align:center;
  height: 50px;
  line-height: 50px;
}

</style>
