import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
/*主页面*/
import msg from '@/pages/mms-msgList'
import aboutMe from '@/pages/mms-aboutMe'
import addFile from '@/pages/mms-addFile'
import help from '@/pages/mms-help'
import repairs from '@/pages/mms-repairs'
//底部
import footerNav from '@/components/mt-footer'
//系统通知
import notice from '@/pages/mms-notice'
//帮助中心
import helpCenter from '@/pages/mms-helpCenter'
//帮助中心下的子页面
import accountSet from '@/pages/helpCenter/mms-accountSetHelpList'
import msgHelp from '@/pages/helpCenter/mms-msgHelpList'
import registerHelp from '@/pages/helpCenter/mms-registerHelpList'
import repairsGenre from '@/pages/helpCenter/mms-repairGenre'
import repairHelp from '@/pages/helpCenter/mms-repairHelpList'
//报修下面的子页面;
import repairProgress from '@/pages/repair/repair-progress'//报修进度：
import repairRemark from '@/pages/repair/repair-remark'//报修补充说明
import repairReturn from '@/pages/repair/repair-return'//报修退回
import repairEvaluate from '@/pages/repair/repair-evaluate'//报修是否解决
import repairFinish from '@/pages/repair/repair-finish'//报修完成
import repairAccept from '@/pages/repair/repair-accept'//报修受理
import repairDeliver from '@/pages/repair/repair-deliver'//报修转交
//填写报修单
import chooseSection from '@/pages/addFile/mms-chooseSection'
//问题详情页面;
import problemDetail from '@/pages/helpCenter/mms-problemDetail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    /*{
      path: '/*',
      component: msg,
    },*/
    {path: '/', redirect: '/msg'},
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/addFile',
      name: 'addFile',
      component: addFile
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/repairs',
      name: 'repairs',
      component: repairs,
      /*children:[
        {
          path:'repairProgress',
          name: 'repairProgress',
          component: repairProgress,
        }


      ]*/
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path:'/helpCenter',
      name: 'helpCenter',
      component: helpCenter
    },
    {
      path:'/accountSet',
      name: 'accountSet',
      component: accountSet
    },
    {
      path:'/msgHelp',
      name: 'msgHelp',
      component: msgHelp
    },
    {
      path:'/registerHelp',
      name: 'registerHelp',
      component: registerHelp

    },
    {
      path:'/repairsGenre',
      name: 'repairsGenre',
      component: repairsGenre

    },
    {
      path:'/repairHelp',
      name: 'repairHelp',
      component: repairHelp

    },
    {
      path:'/repairProgress',
      name: 'repairProgress',
      component: repairProgress

    },
    {
      path:'/chooseSection',
      name: 'chooseSection',
      component: chooseSection

    },
    {
      path:'/problemDetail',
      name: 'problemDetail',
      component: problemDetail

    },
    {
      path:'/repairRemark',
      name: 'repairRemark',
      component: repairRemark

    },
    {
      path:'/repairReturn',
      name: 'repairReturn',
      component: repairReturn

    },
    {
      path:'/repairEvaluate',
      name: 'repairEvaluate',
      component: repairEvaluate

    },
    {
      path:'/repairFinish',
      name: 'repairFinish',
      component: repairFinish

    },
    {
      path:'/repairAccept',
      name: 'repairAccept',
      component: repairAccept

    },
    {
      path:'/repairDeliver',
      name: 'repairDeliver',
      component: repairDeliver

    }
  ]
})
