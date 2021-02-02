<template>
  <div>
    <!--<div id="tutorial-button01-father">
      <div id="tutorial-button01">{{tutorial_button01_data}}</div>
    </div>-->
    <div id="tutorial-title01">{{tutorial_title01_data}}</div>
    <!--<img id="tutorial_img01" v-bind:src="tutorial_img01_data.src"/>-->
    <div id="steps">
  <el-steps direction="vertical" active="3" space="50px">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
</div>
  </div>
</template>

<script>
export default {
  name: "tutorial",
  data() {
    return {
      tutorial_button01_data: "下载模板",
      tutorial_title01_data: "申报指南",
      tutorial_img01_data:  {
         src: require('../../../assets/tutorial_img01.png')
      }
    };
  }
};
</script>

<style scoped>
#tutorial-button01-father {
  display: flex;
  position: absolute;
  top: 5%;
  left: 8%;
  width: 8%;
  height: 4%;
  background-color: #245086;
}
#tutorial-button01 {
  color: #ffffff;
  font-size: 88%;
  margin: auto;
}
#tutorial-title01 {
  position: absolute;
  top: 2.5%;
  left: 33%;
  width: 30%;
  height: 4%;
  font-size: 32px;
}
#tutorial_img01 {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 55%;
  height: 85%;
}
#steps{
  position:absolute;
  left:5%;
  top:10%;
}
</style>