<template>
  <div id="approve">
    <el-button-group id="top">
      <el-button style="display:none;" type="primary" id="mishu">学院秘书审批</el-button>
      <el-button style="display:none;" type="primary" id="weiyuan">委员审批</el-button>
      <el-button style="display:none;" type="primary" id="weiyuanzhang">委员长审批</el-button>
      <el-button style="display:none;" type="primary" id="lingdao">领导审批</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "approve",
  data() {
    return {};
  },
  mounted(){
      if(localStorage.getItem("identity").includes("委员长"))this.show("weiyuanzhang")
      if(localStorage.getItem("identity").includes("科研秘书"))this.show("mishu")
      if(localStorage.getItem("identity").includes("部门领导"))this.show("lingdao")
      if(localStorage.getItem("identity").includes("委员"))this.show("weiyuan")
  },
  methods:{
    show: function(id){
      document.getElementById(id).style.display="inline";
    },
    hide: function(id){
      document.getElementById(id).style.display="none";
    },
  }
};
</script>
<style scoped>
#top {
  width: 100%;
  height: 40px;
  background-color:#b1d5fa;
  position: absolute;
  display: block;
  font-size: 0px;
  top: 0%;
  left: 0%;
}
button{
  float:left;
  font-size: 18px;
  height: 100%;
  width: 150px;
  background-image: linear-gradient(#003d7a);
  border-radius: 0px;
  border: none;
}
</style>