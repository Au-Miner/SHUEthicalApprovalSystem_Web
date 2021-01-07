<template>
  <div class="block">
    <div id="title_Start">
      <img id="picture01" src="../assets/shu_pic.png" />
      <div id="background01"></div>
      <div id="title_text01">项目伦理申报中心</div>
      <el-button type="primary" id="button01">活动展示</el-button>
      <el-button type="primary" id="button02">伦理常识</el-button>
      <el-button type="primary" id="button03">我要申报</el-button>
    </div>
    <div id="carousel_map">
      <el-carousel trigger="click" @blur="blurText"> 
        <el-carousel-item v-for="item in imgList" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      imgList: [
        {
          name: "lj",
          src: require("../assets/Carousel_Map_pic01.jpg"),
          title: "这是wql.jpg"
        },
        {
          name: "logo",
          src: require("../assets/Carousel_Map_pic02.png"),
          title: "这是czw.jpg"
        },
        {
          name: "bg",
          src: require("../assets/Carousel_Map_pic03.png"),
          title: "这是wql.jpg"
        }
      ]
    };
  }
};
</script>



<style>
.el-carousel {
  position: absolute;
  width: 1920px;
  height: 812px;
  top: 125px;
  left: 0px;
  z-index: -1;
}
.el-carousel button {
  position: absolute;
  top: 405px;
  width: 80px;
  height: 80px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
}
.el-carousel button:hover {
  background-color: rgb(240, 137, 137);
  opacity: 0.7;
  font-size: 30px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 812px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 812px;
}
</style>





<style scoped>
#background01 {
  width: 1920px;
  height: 170px;
  background-image: linear-gradient(#245086, #698cb6 70%);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  opacity: 0.9;
  /* display: none; */
}
#picture01 {
  height: 180px;
  width: 430px;
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 1;
}
#title_text01 {
  height: 40px;
  width: 330px;
  position: absolute;
  left: 390px;
  top: 45px;
  font-size: 40px;
  color: #fefefe;
}
#button01 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1200px;
  top: 65px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
}
#button02 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1425px;
  top: 65px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
}
#button03 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1650px;
  top: 65px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
}
</style>


