
<template>
  <div id="title_Start01">
    <img id="picture01" src="../assets/shu_pic.png" />
    <div id="background01"></div>
  </div>
</template>

<script>
export default {
  name: "Title_Start01",
  data() {
    return {};
  }
};

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background01 {
  width: 1920px;
  height: 170px;
  background-image: linear-gradient(#245086, #5581b5 70%);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  /* display: none; */
}
#picture01 {
  height: 180px;
  width: 430px;
  position: absolute;
  top: 0px;
  left: 15px;
}
</style>


