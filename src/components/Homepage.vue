
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

    <div id="carousel_Map">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imgList1" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="knowledge_Ethics" style="display:none">
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

    <div id="mainbody_Interface" style="display:none">
      <div id="title_text02">科技伦理服务系统·要闻</div>
      <el-carousel trigger="focus" id="mainbody_carousel_pic01">
        <el-carousel-item v-for="item in imgList2" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" />
        </el-carousel-item>
      </el-carousel>
      <el-carousel trigger="focus" id="mainbody_carousel_pic02">
        <el-carousel-item v-for="item in imgList2" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" />
        </el-carousel-item>
      </el-carousel>
      <div id="mainbody_Interface_div01" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text01"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text01}}</div>
      </div>
      <div id="mainbody_Interface_div02" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text02"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text02}}</div>
      </div>
      <div id="mainbody_Interface_div03" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text03"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text03}}</div>
      </div>
      <div id="mainbody_Interface_div04" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text04"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text04}}</div>
      </div>
      <div id="mainbody_Interface_div05" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text05"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text05}}</div>
      </div>
      <div id="mainbody_Interface_div06" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text06"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text06}}</div>
      </div>
      <div id="mainbody_Interface_div07" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text07"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text07}}</div>
      </div>
      <div id="mainbody_Interface_div08" class="mainbody_Interface_text_class1">
        <div
          id="mainbody_Interface_text08"
          class="mainbody_Interface_text_class"
        >{{mainbody_Text08}}</div>
      </div>
      <div id="mainbody_Interface_div09">
        <img src="../assets/mainbody_Interface_pic02.png" id="mainbody_Interface_background_pic01" />
        <div id="mainbody_Interface_background_text01">{{mainbody_Text09}}</div>
      </div>
      <div id="mainbody_Interface_div10">
        <img src="../assets/mainbody_Interface_pic02.png" id="mainbody_Interface_background_pic02" />
        <div id="mainbody_Interface_background_text02">{{mainbody_Text10}}</div>
      </div>
      <img src="../assets/mainbody_Interface_pic04.png" alt id="background_pic01" />
      <img src="../assets/mainbody_Interface_pic03.png" alt id="background_pic02" />
    </div>

    <div id="background"  style="display:none">
      <div id="background_fake"></div>
      <div>
        <img src="../assets/background_pic03.jpg" alt id="background_pic01" />
        <div id="background_text01">快捷导航</div>
      </div>
      <div>
        <img src="../assets/background_pic04.jpg" alt id="background_pic02" />
        <div id="background_text02">国际交流</div>
      </div>
      <div id="background_line"></div>
      <img src="../assets/background_pic01.png" alt id="background_pic03" />
      <img src="../assets/background_pic02.png" alt id="background_pic04" />
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
      <div id="background_text03" class="background_class01"></div>
    </div>
  </div>
</template>






<style>
#background_fake {
  position: absolute;
  left: 0px;
  top: 1460px;
  width: 1920px;
  height: 580px;
  background-color: #0c4175;
}
#background #background_pic01 {
  position: absolute;
  left: 80px;
  top: 1470px;
  width: 60px;
  height: 60px;
  z-index: 8;
}
#background #background_pic02 {
  position: absolute;
  left: 1020px;
  top: 1470px;
  width: 60px;
  height: 60px;
  z-index: 8;
}
#background #background_text01 {
  position: absolute;
  left: 100px;
  top: 1484px;
  width: 200px;
  height: 60px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
}
#background #background_text02 {
  position: absolute;
  left: 1050px;
  top: 1484px;
  width: 200px;
  height: 60px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
}
#background #background_line {
  position: absolute;
  left: 80px;
  top: 1484px;
  width: 1760px;
  height: 47px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
#background #background_pic03 {
  position: absolute;
  left: 79px;
  top: 1554px;
  width: 360px;
  height: 400px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
#background #background_pic04 {
  position: absolute;
  left: 1130px;
  top: 1554px;
  width: 764px;
  height: 469px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
</style>





<script>
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
      ],
      mainbody_Text01: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text02: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text03: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text04: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text05: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text06: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text07: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text08: "上海大学与江西省签署新一轮战略合作协议",
      mainbody_Text09: "更多新闻",
      mainbody_Text10: "校内通知"
    };
  },
  methods: {
    clickEvent01: function() {
      // this.choice = 0;
      var change1 = document.getElementById("title_Start");
      var change2 = document.getElementById("carousel_Map");
      var change3 = document.getElementById("knowledge_Ethics");
      var change4 = document.getElementById("mainbody_Interface");
      var change5 = document.getElementById("background");
      change1.style.display = "inline";
      change2.style.display = "inline";
      change3.style.display = "none";
      change4.style.display = "none";
      change5.style.display = "none";
      // change1.style.zIndex="10";
      // change2.style.zIndex=10;
      // console.log(change1.style.zIndex);
      // console.log(change2.style.zIndex);
      // console.log("标题打开！");
      // console.log("标题下轮播图打开！");
    },
    clickEvent02: function() {
      var change1 = document.getElementById("title_Start");
      var change2 = document.getElementById("carousel_Map");
      var change3 = document.getElementById("knowledge_Ethics");
      var change4 = document.getElementById("mainbody_Interface");
      var change5 = document.getElementById("background");
      change1.style.display = "none";
      change2.style.display = "none";
      change3.style.display = "inline";
      change4.style.display = "none";
      change5.style.display = "none";
      // console.log("标题隐藏！");
      // console.log("标题下轮播图隐藏！");
    },
    clickEvent03: function() {
      var change1 = document.getElementById("title_Start");
      var change2 = document.getElementById("carousel_Map");
      var change3 = document.getElementById("knowledge_Ethics");
      var change4 = document.getElementById("mainbody_Interface");
      var change5 = document.getElementById("background");
      change1.style.display = "inline";
      change2.style.display = "none";
      change3.style.display = "none";
      change4.style.display = "inline";
      change5.style.display = "inline";
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
  z-index: 10;
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
  z-index: 9;
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
  z-index: 9;
  opacity: 0.9;
}
#picture01 {
  height: 180px;
  width: 430px;
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 10;
}
#title_text01 {
  height: 40px;
  width: 330px;
  position: absolute;
  left: 390px;
  top: 45px;
  font-size: 40px;
  color: #fefefe;
  z-index: 10;
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
  z-index: 10;
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
  z-index: 10;
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
  z-index: 10;
}
</style>


<style>
#carousel_Map .el-carousel {
  position: absolute;
  width: 1920px;
  height: 812px;
  top: 125px;
  left: 0px;
  z-index: 9;
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
  height: 937px;
  top: 0px;
  left: 0px;
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
  height: 937px;
}
#knowledge_Ethics .el-carousel__button {
  width: 100px;
  height: 8px;
}
#knowledge_Ethics .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 937px;
}
</style>



<style>
#mainbody_Interface #background_pic01 {
  height: 864px;
  width: 419px;
  position: absolute;
  top: 461px;
  left: 0px;
  z-index: 7;
}
#mainbody_Interface .el-carousel__item:nth-child(n) {
  height: 382px;
}
#mainbody_Interface #background_pic02 {
  height: 479px;
  width: 339x;
  position: absolute;
  top: 846px;
  left: 1581px;
  z-index: 7;
}
#mainbody_Interface #title_text02 {
  height: 170px;
  width: 529px;
  position: absolute;
  top: 205px;
  left: 696px;
  font-size: 40px;
  z-index: 8;
  text-align: center;
}
#mainbody_Interface #mainbody_carousel_pic01 {
  height: 382px;
  width: 678px;
  position: absolute;
  top: 295px;
  left: 267px;
  z-index: 8;
}
#mainbody_Interface #mainbody_carousel_pic02 {
  height: 382px;
  width: 678px;
  position: absolute;
  top: 707px;
  left: 975px;
  z-index: 8;
}
</style>




<style>
#mainbody_Interface {
  background-color: #eeebea;
  position: absolute;
  top: 125px;
  width: 1920px;
  height: 1525px;
  left: 0px;
}
#mainbody_Interface #mainbody_Interface_background_pic01 {
  position: absolute;
  left: 650px;
  top: 1180px;
  width: 120px;
  height: 80px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_background_pic02 {
  position: absolute;
  left: 1020px;
  top: 1180px;
  width: 120px;
  height: 80px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_background_text01 {
  position: absolute;
  left: 765px;
  top: 1180px;
  width: 120px;
  height: 80px;
  z-index: 8;
  font-size: 20px;
  color: #94070a;
  line-height: 80px;
}
#mainbody_Interface #mainbody_Interface_background_text02 {
  position: absolute;
  left: 1135px;
  top: 1180px;
  width: 120px;
  height: 80px;
  z-index: 8;
  font-size: 20px;
  color: #94070a;
  line-height: 80px;
}
#mainbody_Interface .mainbody_Interface_text_class1 {
  display: flex;
  border-bottom: 5px solid #94070a;
}
#mainbody_Interface .mainbody_Interface_text_class {
  margin: auto;
}
#mainbody_Interface #mainbody_Interface_div01 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  position: absolute;
  background-color: white;
  left: 975px;
  top: 295px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div02 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 1329px;
  top: 295px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div03 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 975px;
  top: 501px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div04 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 1329px;
  top: 501px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div05 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 267px;
  top: 707px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div06 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 621px;
  top: 707px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div07 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 267px;
  top: 913px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div08 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 621px;
  top: 913px;
  width: 324px;
  height: 176px;
  z-index: 8;
}
</style>