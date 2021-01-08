
<template>
  <div id="backstage_bg">
    <img id="shu_badge" src="../../assets/shu_pic.png" />
    <div id="darkblue_bg">
      <el-button @click="jmp('/')" type="primary" id="logout">退出登录</el-button>
    </div>
    <div id="lightblue_sidebar">
      <el-button @click="jmp('tutorial')" type="primary" id="tutorial">申报指南</el-button><br />
      <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" type="primary" id="apply">申请</el-button><br />
      <el-button @click="jmp('myapplications')" type="primary" id="myapplies">我的申请</el-button><br />
      <el-button @click="jmp('approve')" type="primary" id="approve">项目审批</el-button>
    </div>
    <div id="applies">
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_program')" @mouseleave="hide_applies()" type="primary" id="apply">项目申请</el-button><br />
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_personal')" @mouseleave="hide_applies()" type="primary" id="apply">个人申请</el-button><br />
        <el-button @mouseenter.native="show_applies()" @mouseleave.native="hide_applies()" @click="jmp('apply_other')" @mouseleave="hide_applies()" type="primary" id="apply">其他申请</el-button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "backstage_bg",
  data() {
    return {};
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
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#applies{
  width:140px;
  position:absolute;
  top:100px;
  left:140px;
  z-index: 5;
  display: none;
}
#darkblue_bg {
  width: 1920px;
  height: 70px;
  background-image: linear-gradient(#245086);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
#shu_badge {
  height: 86px;
  width: 216px;
  position: absolute;
  top: 0px;
  left: 0px;
}
#lightblue_sidebar {
  height: 1010px;
  width: 140px;
  background-image: linear-gradient(#bfe1fd);
  position: absolute;
  top: 70px;
  left: 0px;
  visibility: visible;
  z-index: 1;
  border-right: 3px solid;
  border-right-color: #245086;
}
button {
  font-size: 15px;
  height: 30px;
  width: 140px;
  background-image: linear-gradient(#769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial {
  font-size: 15px;
  height: 30px;
  width: 140px;
  background-image: linear-gradient(#245086, #769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial:hover {
  height: 30px;
  width: 140px;
  background-image: linear-gradient(#66b1ff);
  border-radius: 0px;
  border: none;
}
button#tutorial:active {
  height: 30px;
  width: 140px;
  background-image: linear-gradient(#3a8ee6);
  border-radius: 0px;
  border: none;
}
button#logout{
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1750px;
  top: 18px;
  font-size: 15px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 2;
}
.content
{
  background-image: linear-gradient(#F0F8FA);
  position: absolute;
  left:140px;
  top: 70px;
  height:1010px;
  width:1780px;
}
</style>