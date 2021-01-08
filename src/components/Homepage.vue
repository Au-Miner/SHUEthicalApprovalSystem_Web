
<template >
  <div class="block">
    <div id="title_Start">
      <img id="picture01" src="../assets/shu_pic.png" />
      <div id="background01"></div>
      <div id="title_text01">项目伦理申报中心</div>
      <el-button type="primary" id="button01">活动展示</el-button>
      <el-button type="primary" id="button02">伦理常识</el-button>
      <el-button @click="jmp('backstage')" type="primary" id="button03">我要申报</el-button>
    </div>

    <!-- <div id="carousel_Map">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imgList1" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>-->

    <div id="knowledge_Ethics">
      <el-carousel trigger="focus">
        <div v-if="choice > 0">
          <el-button
            type="warning"
            icon="el-icon-close"
            id="knowledge_Ethics_Getback"
            @click="clickEvent01"
          ></el-button>
          <el-carousel-item v-for="item in imgList2" :key="item.name">
            <img :src="item.src" style="height:100%;width:100%;" />
          </el-carousel-item>
        </div>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// import func from '../vue-temp/vue-editor-bridge';
export default {
  name: "Homepage",
  data() {
    return {
      choice: 1,
      imgList1: [
        {
          name: "lj",
          src: require("../assets/Carousel_Map_pic01.jpg"),
          title: "wqlsb.jpg"
        },
        {
          name: "logo",
          src: require("../assets/Carousel_Map_pic02.png"),
          title: "czwnb.jpg"
        },
        {
          name: "bg",
          src: require("../assets/Carousel_Map_pic03.png"),
          title: "3.jpg"
        }
      ],
      imgList2: [
        {
          name: "lj",
          src: require("../assets/knowledge_ethics_pic01.jpg"),
          title: "4.jpg"
        },
        {
          name: "logo",
          src: require("../assets/knowledge_ethics_pic02.jpg"),
          title: "5.jpg"
        },
        {
          name: "bg",
          src: require("../assets/knowledge_ethics_pic03.jpg"),
          title: "6.jpg"
        }
      ]
    };
  },
  methods: {
    clickEvent01: function() {
      // this.choice = 0;
      var wocao = document.getElementById("knowledge_Ethics");
      wocao.style.animation="animation:mymove 5s infinite";
        //  wocao.style.display="none";
    },
    jmp: function(path){
      this.$router.push(path)
    }
  }
};
</script>




<style>
#title_Start {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 170px;
  z-index: 2;
}
#title_Start:hover #background01 {
  transition: all 0.2s ease-in;
  width: 1920px;
  height: 125px;
  background-color: #245086;
  background-image: linear-gradient(#245086, #245086);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  opacity: 1;
}
#background01 {
  transition: all 0.2s ease-in;
  width: 1920px;
  height: 170px;
  background-image: linear-gradient(#245086, #698cb6 70%);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  opacity: 0.9;
  /* display: none; */
}
#picture01 {
  height: 180px;
  width: 430px;
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 2;
}
#title_text01 {
  height: 40px;
  width: 330px;
  position: absolute;
  left: 390px;
  top: 45px;
  font-size: 40px;
  color: #fefefe;
  z-index: 2;
}
#button01 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1200px;
  top: 55px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 2;
}
#button02 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1425px;
  top: 55px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 2;
}
#button03 {
  height: 40px;
  width: 140px;
  position: absolute;
  left: 1650px;
  top: 55px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 2;
}
</style>


<style>
#carousel_Map .el-carousel {
  position: absolute;
  width: 1920px;
  height: 812px;
  top: 125px;
  left: 0px;
  z-index: 0;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--left {
  position: absolute;
  top: 405px;
  width: 80px;
  height: 80px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--right {
  position: absolute;
  top: 405px;
  width: 80px;
  height: 80px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--left:hover {
  opacity: 0.7;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--right:hover {
  opacity: 0.7;
}
#carousel_Map .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 812px;
}
#carousel_Map .el-carousel__button {
  width: 100px;
  height: 8px;
}
#carousel_Map .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 812px;
}
</style>




<style>
#knowledge_Ethics .el-carousel {
  position: absolute;
  width: 1920px;
  height: 812px;
  top: 125px;
  left: 0px;
  z-index: 0;
}
#knowledge_Ethics #knowledge_Ethics_Getback {
  border-radius: 100px;
  position: absolute;
  top: 405px;
  width: 80px;
  height: 80px;
  left: 50px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
  z-index: 3;
}
#knowledge_Ethics .el-carousel__arrow.el-carousel__arrow--right {
  position: absolute;
  top: 405px;
  width: 80px;
  height: 80px;
  left: 50px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
  display: none;
}
#knowledge_Ethics .el-carousel__arrow.el-carousel__arrow--right:hover {
  opacity: 0.7;
  display: none;
}
#knowledge_Ethics .el-carousel__arrow.el-carousel__arrow--left {
  display: none;
}
#knowledge_Ethics .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 812px;
}
#knowledge_Ethics .el-carousel__button {
  width: 100px;
  height: 8px;
}
#knowledge_Ethics .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 812px;
}
</style>