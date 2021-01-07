
<template>
  <div id="backstage_bg">
    <img id="shu_badge" src="../../assets/shu_pic.png" />
    <div id="pureblue_bg"></div>
    <div id="lightblue_sidebar">
      <el-button type="primary" id="tutorial">申报指南</el-button><br />
      <el-button type="primary" id="apply">申请</el-button><br />
      <el-button type="primary" id="myapplies">我的申请</el-button><br />
      <el-button type="primary" id="approve">项目审批</el-button>
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
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pureblue_bg {
  width: 1920px;
  height: 70px;
  background-image: linear-gradient(#245086);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  /* display: none; */
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
  height: 30px;
  width: 140px;
  background-image: linear-gradient(#769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial {
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