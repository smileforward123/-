<template>
  <div id="app">
    <mt-header fixed :title="title" >
      <router-link to="/" slot="left" v-show='isShowBack'>
          <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <p>{{title}}</p>
    <p>{{$route.query.title}}</p>
    <p>{{$route.path}}</p>
    <keep-alive>
        <router-view></router-view> 
    </keep-alive>
    
    
    
  </div>
</template>

<script>


export default {
  name: 'app',
  
 
  data (){
   return {
      titleList:[
        '消息','报修','帮助','我的'
      ]
   }
  },
  computed:{
    title(){
      console.log(this.$route.query.title);
      console.log(this.$route.query.title==undefined);
      return this.$route.query.title==undefined?'消息':this.$route.query.title;
    },
    isShowBack(){
        var a=this.$route.query.title==undefined?'消息':this.$route.query.title;
        console.log(a);
        var index=this.titleList.indexOf(a);
        console.log(index);
        return index==-1;
    }
  },
  methods:{
    
  }
  
  
}
</script>

<style scoped>



</style>
