<template>
    <div>
        <div id='contentBox'>
            <div class='addImgBox'>
                <mt-field  placeholder="描述..." type="textarea" rows="3"></mt-field>
                <div class='uploadBox'>
                    <canvas id="myCanvas" style="display: none" ></canvas>
                    <span><i class="uploadImg"></i>添加图片</span>
                    <input type="file" name="" multiple="multiple" id="insertimg" >
                </div>
            </div>
            <ul class='chooseList'>
                <li class='classify' @click='show'>
                    <strong></strong>选择分类<span class='txt'>{{chooseOption}}</span>
                </li>
                <router-link class='section' :to="{path:'chooseSection',query:{title:'选择区域'}}" tag='li'>
                   <strong></strong> 选择区域<span class='txt'></span>
                </router-link>
                <li class='address'>
                  <strong></strong>  <input type='text' placeholder='请填写详细地址...'/>
                </li>
            </ul>
            

        </div>
        <div class='btnBox'>
                <mt-button type="primary">提交</mt-button>
        </div>
        <mt-popup
          v-model="popupVisible"
          position="bottom"
          modal='true'>
          <div class='option'>
            <span v-for='(item,index) in optionList' :class='{active:index==nowIndex}' @click='addClass(index)'>{{item.name}}</span>
         </div>
         <mt-button type="primary" class='cancel' @click='cancelHandle'>取消</mt-button><mt-button type="primary" class='confirm' @click='confirmHandle'>确定</mt-button>
        </mt-popup>
    </div>
</template>

<script>
export default {
  name: 'addFile',
  data(){
    return {
      popupVisible:false,
      optionList:[
       {name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"},{name:"照明电器"}

      ],
      nowIndex:0,
      chooseOption:""
    }
  },
  methods:{
    show(){
      this.chooseOption=[];
      this.popupVisible=true;
    },
    cancelHandle(){
        this.popupVisible=false;
        this.nowIndex=-1;
    },
    addClass(index){
     this.nowIndex=index;
    },
    confirmHandle(){
      this.chooseOption=this.optionList[this.nowIndex].name;
      this.popupVisible=false;

    }

  }
  
}
</script>

<style scoped>
.v-modal{
    top:0;
}
#contentBox{
  background:#f6f6f6;
  width:100%;
  box-sizing:border-box;
  /*height:40rem;*/
  overflow-y:auto;
  bottom:0;
}

.addImgBox{
    background:#fff;
    margin-bottom:0.68rem;
}
.uploadImg {
    display: inline-block;
    vertical-align: middle;
    width: 5.08rem;
    height: 5.08rem;
    margin-right: 0.4rem;
    background:url(../../static/img/addImg.png) no-repeat;
    background-size:contain;
    margin-left:1.6rem;
}
.uploadBox{
    position: relative;
    padding-bottom:2.5rem;
}
#insertimg {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;

}
.chooseList{
    background:#fff;
}
.chooseList li{
    border-top:1px solid #eeeeee;
    font-size:1.2rem;
    line-height:4.48rem;
    text-indent:1.08rem;


}
.chooseList li strong{
    
    /*margin-left:1.68rem;*/
    margin-right:0.48rem;
    display:inline-block;
    width:2rem;
    height:2rem; 
    vertical-align:middle;
}
.chooseList li .txt{
  display:inline-block;
}
.classify strong{
    background:url(../../static/img/classify.png) no-repeat;
    background-size:contain;


}
.section strong{
    background:url(../../static/img/section.png) no-repeat;
    background-size:contain;
}
.address strong{
    background:url(../../static/img/address.png) no-repeat;
    background-size:contain;
}
.btnBox{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:4.48rem;

}
.mint-popup-bottom{
    width:100%;
}
.mint-button--primary{
    background:#f59549;
    width:100%;
    height:100%;
}
.option{
  display:flex;
  display: -moz-flex; 
  display: -webkit-flex; 
  width:100%;
  justify-content:flex-start;
  align-items:center; 
  flex-wrap:wrap;

}
.option span{
  font-size:1.04rem;
  width:33.3%;
  height:3.6rem;
  line-height:3.6rem;
  color:#3d3d3d;
  background:#fff;
  border-right:1px solid #c7c7c7;
  border-bottom:1px solid #c7c7c7;
  text-align:center;
 
  box-sizing:border-box;


 // margin: 0.6rem 0;

}
.option .active{
  background: #f59549;
  color:#fff;
}
.cancel{
    height:3.69rem;
    background:#fff;
    color:#393939;
    margin-top:0.48rem;
    border-top:1px solid #f1f1f1;
    width:50%;

}
.confirm{
  width:50%;
  height:3.69rem;
  margin-top:0.48rem;
  border-top:1px solid #f1f1f1;
  background:#f59549;
}
</style>
