<template>
  <!-- <p style="color: red; left:25px; position:absolute;">教学页</p> -->
  <div>
    <div id="tutorial-button01-father">
      <div id="tutorial-button01">{{tutorial_button01_data}}</div>
    </div>
    <div id="tutorial-title01">{{tutorial_title01_data}}</div>
    <img id="tutorial_img01" v-bind:src="tutorial_img01_data.src"/>
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
</style>