
<template>
  <div id="backstage_bg">
    <div id="darkblue_bg">
      <img id="shu_badge" src="../../assets/shu_pic.png" />
      <div id="info"><span>欢迎: {{information}}</span></div>
      <el-button @click="logout()" type="primary" id="logout">退出登录</el-button>
    </div>
    <div id="lightblue_sidebar">
      <el-button @click="jmp('tutorial')" type="primary" id="tutorial">申报指南</el-button><br />
      <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" type="primary" id="apply">申请</el-button><br />
      <el-button @click="jmp('myapplications')" type="primary" id="myapplies">我的申请</el-button><br />
      <el-button @click="jmp('approve')" type="primary" id="approve">项目审批</el-button>
      <br><el-button @click="foo()" type="primary" id="test">测试</el-button>
    </div>
    <div id="applies">
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_program')" @mouseleave="hide_applies()" type="primary" id="apply">项目申请</el-button><br />
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_personal')" @mouseleave="hide_applies()" type="primary" id="apply">个人申请</el-button><br />
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_other')" @mouseleave="hide_applies()" type="primary" id="apply">其他申请</el-button>
    </div>
    <div class="content">
        <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <router-view></router-view>
    </ul>
    </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "backstage_bg",
  data() {
    return {
      information:''
      }
  },
  mounted(){
    this.info_update()
  },
  methods:{
    jmp: function(path){
      this.$router.push(path)
    },
    show_applies: function(){
      document.getElementById("applies").style.display="inline";
    },
    hide_applies: function(){
      document.getElementById("applies").style.display="none";
    },
    info_update(){
      axios({
        url:'/user/info?userId='+localStorage.getItem('userId'),
        method:'get',
      }).then((res)=>{
        if(res.data.code===200)
        {
          this.information = res.data.data.name+' '+res.data.data.userId;
        }
        else this.information = res.data.code;
      }).catch(()=>{
        console.log('error occur')
      })
    },
    logout(){
      localStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#info{
  width:200px;
  right:10%;
  top:35%;
  font-size:120%;
  position:absolute;
  color:white;
}
#applies{
  width:15%;
  position:absolute;
  top:15.5%;
  left:15%;
  z-index: 5;
  display: none;
}
#darkblue_bg {
  width: 100%;
  height: 10%;
  background-image: linear-gradient(#245086);
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;
}
#shu_badge {
  height: 120%;
  width: 216px;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 2;
}
#lightblue_sidebar {
  height: 90%;
  width: 15%;
  background-image: linear-gradient(#bfe1fd);
  position: absolute;
  top: 10%;
  left: 0%;
  visibility: visible;
  z-index: 1;
  border-right: 3px solid;
  border-right-color: #245086;
}
button {
  font-size: 18px;
  height: 6%;
  width: 100%;
  background-image: linear-gradient(#769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial {
  font-size: 18px;
  height: 6%;
  width: 100%;
  background-image: linear-gradient(#245086, #769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial:hover {
  background-image: linear-gradient(#66b1ff);
  border-radius: 0px;
  border: none;
}
button#tutorial:active {
  background-image: linear-gradient(#3a8ee6);
  border-radius: 0px;
  border: none;
}
button#logout{
  height: 10%;
  width: 10%;
  position: absolute;
  left: 90%;
  top: 22%;
  font-size: 18px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 5;
}
.content
{
  background-image: linear-gradient(#F0F8FA);
  position: absolute;
  left:15%;
  top: 10%;
  height:90%;
  width:85%;
  overflow:auto;
}
</style>