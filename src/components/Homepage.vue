
<template >
  <div class="block">
    <div id="title_Start">
      <img id="picture01" src="../assets/shu_pic.png" />
      <div id="background01"></div>
      <div id="title_text01">项目伦理申报中心</div>
      <el-button @click="clickEvent03" type="primary" id="button01">活动展示</el-button>
      <el-button @click="clickEvent02" type="primary" id="button02">上大信息</el-button>
      <el-button @click="jmp('login')" type="primary" id="button03">我要申报</el-button>
    </div>

    <div id="carousel_Map" @wheel.prevent="handleScroll1">
      <el-carousel trigger="click"> 
        <el-carousel-item v-for="item in imgList1" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="knowledge_Ethics" style="display:none">
      <div id="knowledge_Ethics_page01">
          <el-button type="primary"
           icon="el-icon-back"
          id="knowledge_Ethics_Getback"
                @click="clickEvent01"
          >
            返回</el-button>
          <div id="knowledge_Ethics_left01">
              <div id="knowledge_Ethics_left01_text01">关于·上大</div>
              <div id="knowledge_Ethics_left01_text02">自强不息 &nbsp 先天下之忧而忧 &nbsp 后天下之乐而乐</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id01"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id02">
            <div class="knowledge_Ethics_block01_num01">35742</div>
            <div class="knowledge_Ethics_block01_txt01">全日制学生</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id03"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id04"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id05"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id06">
                        <div class="knowledge_Ethics_block01_num01">3289</div>
            <div class="knowledge_Ethics_block01_txt01">教师</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id07">
                        <div class="knowledge_Ethics_block01_num01">95</div>
            <div class="knowledge_Ethics_block01_txt01">本科招生专业</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id08"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id09">
                        <div class="knowledge_Ethics_block01_num01">1922</div>
            <div class="knowledge_Ethics_block01_txt01">上大创办时间</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id10"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id11">
                        <div class="knowledge_Ethics_block01_num01">46</div>
            <div class="knowledge_Ethics_block01_txt01">博士招生专业</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id12"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id13"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id14">
                        <div class="knowledge_Ethics_block01_num01">23482</div>
            <div class="knowledge_Ethics_block01_txt01">本科生</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id15"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id16"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id17">
                        <div class="knowledge_Ethics_block01_num01">6</div>
            <div class="knowledge_Ethics_block01_txt01">两院院士</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id18">
                        <div class="knowledge_Ethics_block01_num01">12447</div>
            <div class="knowledge_Ethics_block01_txt01">研究生</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id19">

          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id20">
                                    <div class="knowledge_Ethics_block01_num01">742</div>
            <div class="knowledge_Ethics_block01_txt01">外国留学生</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id21"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id22"></div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id23">
                        <div class="knowledge_Ethics_block01_num01">242</div>
            <div class="knowledge_Ethics_block01_txt01">图书馆藏书(万册)</div>
          </div>
          <div class="knowledge_Ethics_block01" id="knowledge_Ethics_block01_id24"></div>
          </div>
    </div>

    <div id="mainbody_Interface" style="display:inline">
      <div id="title_text02">科技伦理服务系统·要闻</div>
      <!-- <el-button type="primary" icon="el-icon-arrow-up"></el-button>  -->
      <el-button class="el-icon-arrow-up" id="mainbody_Interface_returnBotton" @click="handleScroll2"></el-button>
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

    <div id="background" style="display:inline">
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
      <div id="background_text03" class="background_class01">{{mainbody_Text11}}</div>
      <div id="background_text04" class="background_class01">{{mainbody_Text12}}</div>
      <div id="background_text05" class="background_class01">{{mainbody_Text13}}</div>
      <div id="background_text06" class="background_class01">{{mainbody_Text14}}</div>
      <div id="background_text07" class="background_class01">{{mainbody_Text15}}</div>
      <div id="background_text08" class="background_class01">{{mainbody_Text16}}</div>
      <div id="background_text09" class="background_class01">{{mainbody_Text17}}</div>
      <div id="background_text10" class="background_class01">{{mainbody_Text18}}</div>
      <div id="background_text11" class="background_class01">{{mainbody_Text19}}</div>
      <div id="background_text12" class="background_class01">{{mainbody_Text20}}</div>
    </div>
  </div>
</template>


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
      mainbody_Text10: "校内通知",
      mainbody_Text11: "上海大学信息网",
      mainbody_Text12: "上海大学信息网",
      mainbody_Text13: "上海大学信息网",
      mainbody_Text14: "上海大学信息网",
      mainbody_Text15: "上海大学信息网",
      mainbody_Text16: "上海大学信息网",
      mainbody_Text17: "上海大学信息网",
      mainbody_Text18: "上海大学信息网",
      mainbody_Text19: "上海大学信息网",
      mainbody_Text20: "上海大学信息网"
    };
  },
  methods: {
    clickEvent01: function() {
      // this.choice = 0;
      var change3 = document.getElementById("knowledge_Ethics");
      var change4 = document.getElementById("mainbody_Interface");
      var change5 = document.getElementById("background");
      change4.style.display = "inline";
      change5.style.display = "inline";
      $("#knowledge_Ethics").animate({left: '100%'}, 600);
            var timer = setTimeout(function(){
            change3.style.display = "none";
        },600);
      // change1.style.zIndex="10";
      // change2.style.zIndex=10;
      // console.log(change1.style.zIndex);
      // console.log(change2.style.zIndex);
      // console.log("标题打开！");
      // console.log("标题下轮播图打开！");
    },
    clickEvent02: function() {
      var change3 = document.getElementById("knowledge_Ethics");
      var change4 = document.getElementById("mainbody_Interface");
      var change5 = document.getElementById("background");
      change3.style.display = "inline";
      change4.style.display = "none";
      change5.style.display = "none";
      $("#knowledge_Ethics").animate({left: '0px'}, 600);
    },
    clickEvent03: function() {
      $("#mainbody_Interface").animate({top: '125px'}, 600);
      $("#background").animate({top: '-758px'}, 1);
    },
    jmp: function(path) {
      this.$router.push(path);
    },
    handleScroll1: function(e) {
      // console.log(e.wheelDelta);
      // console.log(typeof(e.wheelDelta));
      if (e.wheelDelta == -120) {
        // var tmp = document.getElementById("mainbody_Interface");
        // tmp.style.transition='width 2s'; 

        // var target = 'mainbody_Interface';
        // var target_roll_height = $('#' + target).offset().top;
        // $("html,body").animate({scrollTop: target_roll_height}, 800);

        $("#mainbody_Interface").animate({top: '125px'}, 600);
        $("#background").animate({top: '-758px'}, 600);
      }
    },
    handleScroll2: function(e) {
      $("#mainbody_Interface").animate({top: '938px'}, 600);
      $("#background").animate({top: '55px'}, 600);
    },
  }
};
</script>




<style>
#title_Start {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  /* height: 170px; */
  /* height: 125px; */
  height: 13.3%;
  z-index: 10;
}
#title_Start:hover #background01 {
  transition: all 0.3s ease-in;
  width: 100%;
  height: 125px;
  background-color: #245086;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
  opacity: 1;
}
#background01 {
  transition: all 0.3s ease-in;
  width: 100%;
  height: 125px;
  background-image: linear-gradient(#245086, #3375b6 90%);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
  opacity: 0.8;
  transition: background-image 4s;
  -webkit-transition:background-image 4s;
}
#picture01 {
  height: 180px;
  width: 22.4%;
  position: absolute;
  top: 0px;
  left: 0.8%;
  z-index: 10;
}
#title_text01 {
  height: 40px;
  width: 20%;
  position: absolute;
  left: 17.3%;
  top: 53px;
  font-size: 25px;
  color: #fefefe;
  z-index: 10;
}
#button01 {
  height: 40px;
  width: 7.3%;
  position: absolute;
  left: 62.5%;
  top: 55px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 10;
}
#button02 {
  height: 40px;
  width: 7.3%;
  position: absolute;
  left: 74.2%;
  top: 55px;
  font-size: 20px;
  color: #fefefe;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  z-index: 10;
}
#button03 {
  height: 40px;
  width: 7.3%;
  position: absolute;
  left: 85.9%;
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
  width: 100%;
  height: 86.65%;
  top: 125px;
  left: 0px;
  z-index: 9;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--left {
  position: absolute;
  top: 405px;
  width: 4.2%;
  height: 80px;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
}
#carousel_Map .el-carousel__arrow.el-carousel__arrow--right {
  position: absolute;
  top: 405px;
  width: 4.2%;
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
  width: 5.2%;
  height: 8px;
}
#carousel_Map .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 812px;
}
</style>




<style>
#knowledge_Ethics  {
  position: absolute;
  top: 0px;
  left: 100%;
  width: 100%;
  z-index: 10;
  height: 0px;
  /* height: 100%; */
}
#knowledge_Ethics_Getback {
  border-radius: 200px;
  border-width: 3px;
  border-color: aliceblue;
  position: absolute;
  top: 60px;
  width: 6%;
  height: 60px;
  left: 2.6%;
  background-color: rgba(255, 255, 255, 0);
  opacity: 0.7;
  font-size: 120%;
  z-index: 10;
}
/* #knowledge_Ethics_left .el-carousel {
  position: absolute;
  width: 65%;
  height: 937px;
  top: 0px;
  left: 0px;
} */
/* #knowledge_Ethics_left .el-carousel__arrow.el-carousel__arrow--right {
  position: absolute;
  top: 405px;
  width: 4.2%;
  height: 80px;
  left: 2.6%;
  background-color: rgb(240, 137, 137);
  opacity: 0.5;
  font-size: 30px;
  display: none;
}
#knowledge_Ethics_left .el-carousel__arrow.el-carousel__arrow--right:hover {
  opacity: 0.7;
  display: none;
}
#knowledge_Ethics_left .el-carousel__arrow.el-carousel__arrow--left {
  display: none;
}
#knowledge_Ethics_left .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 937px;
}
#knowledge_Ethics_left .el-carousel__button {
  width: 5.2%;
  height: 8px;
}
#knowledge_Ethics_left .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 937px;
}
#knowledge_Ethics_right {
  position: absolute;
  width: 35%;
  height: 937px;
  top: 0px;
  left: 65%;
}
.knowledge_Ethics_right_class {
  position: relative;
  top: 5%;
  left: 5%;
  width: 90%;
  font-size: 120%;
  text-align: left;
  z-index: 7;
  color: #d3dce6;
}
#knowledge_Ethics_right_pic01 {
  position: absolute;
  width: 35%;
  height: 937px;
  top: 0px;
  left: 65%;
  z-index: 6;
} */
</style>



<style>
#mainbody_Interface #background_pic01 {
  height: 864px;
  width: 21.8%;
  position: absolute;
  top: 391px;
  left: 0px;
  z-index: 7;
}
#mainbody_Interface .el-carousel__item:nth-child(n) {
  height: 382px;
}
#mainbody_Interface #background_pic02 {
  height: 479px;
  width: 17.6%;
  position: absolute;
  top: 776px;
  left: 82.3%;
  z-index: 7;
}
#mainbody_Interface #title_text02 {
  height: 170px;
  width: 37.6%;
  position: absolute;
  top: 85px;
  left: 31.25%;
  font-size: 40px;
  z-index: 8;
  text-align: center;
}
#mainbody_Interface #mainbody_carousel_pic01 {
  height: 382px;
  width: 35.3%;
  position: absolute;
  top: 225px;
  left: 13.9%;
  z-index: 8;
}
#mainbody_Interface #mainbody_carousel_pic02 {
  height: 382px;
  width: 35.3%;
  position: absolute;
  top: 637px;
  left: 50.8%;
  z-index: 8;
}
</style>




<style>
#mainbody_Interface {
  background-color: #eeebea;
  position: absolute;
  top: 937px;
  width: 100%;
  height: 1265px;
  left: 0px;
  z-index: 9;
}
#mainbody_Interface_returnBotton {
  position: absolute;
  left: 4%;
  top: 70px;
  width: 5%;
  height: 60px;
  z-index: 8;
    font-size: 200%;
}
#mainbody_Interface #mainbody_Interface_background_pic01 {
  position: absolute;
  left: 33.9%;
  top: 1110px;
  width: 6.25%;
  height: 80px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_background_pic02 {
  position: absolute;
  left: 53.1%;
  top: 1110px;
  width: 6.25%;
  height: 80px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_background_text01 {
  position: absolute;
  left: 39.8%;
  top: 1110px;
  width: 6.25%;
  height: 80px;
  z-index: 8;
  font-size: 20px;
  color: #94070a;
  line-height: 80px;
}
#mainbody_Interface #mainbody_Interface_background_text02 {
  position: absolute;
  left: 59.1%;
  top: 1110px;
  width: 6.25%;
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
  left: 50.8%;
  top: 225px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div02 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 69.2%;
  top: 225px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div03 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 50.8%;
  top: 428px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div04 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 69.2%;
  top: 428px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div05 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 13.9%;
  top: 637px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div06 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 32.3%;
  top: 637px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div07 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 13.9%;
  top: 840px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
#mainbody_Interface #mainbody_Interface_div08 {
  background: url(../assets/mainbody_Interface_pic01.png) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
  background-color: white;
  position: absolute;
  left: 32.3%;
  top: 840px;
  width: 16.9%;
  height: 176px;
  z-index: 8;
}
</style>




<style>
#background {
  position: absolute;
  left: 0px;
  top: 55px;
  width: 100%;
  height: 580px;
} 
#background_fake {
  position: absolute;
  left: 0px;
  top: 2147px;
  width: 100%;
  height: 580px;
  background-color: #0c4175;
}
#background .background_class01 {
  font-size: 20px;
  color: #a0bcd8;
  width: 10.4%;
  z-index: 8;
  height: 50px;
  position: absolute;
}
#background #background_text03 {
  left: 28.6%;
  top: 2287px;
}
#background #background_text04 {
  left: 28.6%;
  top: 2347px;
}
#background #background_text05 {
  left: 28.6%;
  top: 2407px;
}
#background #background_text06 {
  left: 28.6%;
  top: 2467px;
}
#background #background_text07 {
  left: 28.6%;
  top: 2527px;
}
#background #background_text08 {
  left: 39.1%;
  top: 2287px;
}
#background #background_text09 {
  left: 39.1%;
  top: 2347px;
}
#background #background_text10 {
  left: 39.1%;
  top: 2407px;
}
#background #background_text11 {
  left: 39.1%;
  top: 2467px;
}
#background #background_text12 {
  left: 39.1%;
  top: 2527px;
}
#background #background_pic01 {
  position: absolute;
  left: 4.2%;
  top: 2157px;
  width: 3.125%;
  height: 60px;
  z-index: 8;
}
#background #background_pic02 {
  position: absolute;
  left: 53.1%;
  top: 2157px;
  width: 3.125%;
  height: 60px;
  z-index: 8;
}
#background #background_text01 {
  position: absolute;
  left: 5.2%;
  top: 2171px;
  width: 10.4%;
  height: 60px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
}
#background #background_text02 {
  position: absolute;
  left: 54.68%;
  top: 2171px;
  width: 10.4%;
  height: 60px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
}
#background #background_line {
  position: absolute;
  left: 4.2%;
  top: 2171px;
  width: 91.7%;
  height: 47px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
#background #background_pic03 {
  position: absolute;
  left: 4.1%;
  top: 2247px;
  width: 18.75%;
  height: 400px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
#background #background_pic04 {
  position: absolute;
  left: 58.85%;
  top: 2247px;
  width: 39.6%;
  height: 469px;
  font-size: 20px;
  color: #a0bcd8;
  z-index: 8;
  border-bottom: 2px solid #a0bcd8;
}
</style>


<style>
#knowledge_Ethics_left01 {
  width: 20%;
    position: absolute;
    left: 0%;
    top: -300%;
    height: 937px;
    /* height: 1057px; */
    background: url(../assets/knowledge_ethics_pic05.jpg) center center no-repeat; 
    background-size: cover;
        z-index: 9;
}
#knowledge_Ethics_left01_text01 {
  color: #ffffff;
  font-size: 45px;
  text-align: center;
    width: 15%;
    position: absolute;
    left: 30%;
    top: 30%;
    height: 937px;
    z-index: 9;
}
#knowledge_Ethics_left01_text02 {
    color: #ffffff;
    font-size: 25px;
  text-align: center;
    width: 1%;
    position: absolute;
    left: 58%;
    top: 15%;
    height: 937px;
    z-index: 9;
}
.knowledge_Ethics_block01 {
  width: 13.333%;
  height: 234.25px;
  /* background-color: aqua; */
}
#knowledge_Ethics_block01_id01 {
    position: absolute;
    left: 20%;
    top: 0px;
    z-index: 9;
    background-color: #6780ad;
}
#knowledge_Ethics_block01_id02 {
    position: absolute;
    left: 20%;
    top: 234.25px;
    z-index: 9;
    background-color: #4B6695;
}
#knowledge_Ethics_block01_id03 {
    position: absolute;
    left: 20%;
    top: 468.5px;
    z-index: 9;
    background-color: #263E64;
    background: url(../assets/SHU_pic05.jpg) center center no-repeat; 
    background-size: cover;
}
#knowledge_Ethics_block01_id04 {
    position: absolute;
    left: 20%;
    top: 702.75px;
    z-index: 9;
    background-color: #5B75A3;
}
#knowledge_Ethics_block01_id05 {
    position: absolute;
    left: 33.33%;
    top: 0px;
    z-index: 9;
    background-color: #4B6695;
}
#knowledge_Ethics_block01_id06 {
    position: absolute;
    left: 33.33%;
    top: 234.25px;
    z-index: 9;
    background-color: #5772A1;
}
#knowledge_Ethics_block01_id07 {
    position: absolute;
    left: 33.33%;
    top: 468.5px;
    z-index: 9;
    background-color: #6780AD;
}
#knowledge_Ethics_block01_id08 {
    position: absolute;
    left: 33.33%;
    top: 702.75px;
    z-index: 9;
    background-color: #314B7D;
}
#knowledge_Ethics_block01_id09 {
    position: absolute;
    left: 46.67%;
    top: 0px;
    z-index: 9;
    background-color: #385284;
}
#knowledge_Ethics_block01_id10 {
    position: absolute;
    left: 46.67%;
    top: 234.25px;
    z-index: 9;
    background-color: #263D64;
    background: url(../assets/SHU_pic02.jpg) center center no-repeat; 
    background-size: cover;
}
#knowledge_Ethics_block01_id11 {
    position: absolute;
    left: 46.67%;
    top: 468.5px;
    z-index: 9;
    background-color: #355081;
}
#knowledge_Ethics_block01_id12 {
    position: absolute;
    left: 46.67%;
    top: 702.75px;
    z-index: 9;
    background-color: #466193;
        background: url(../assets/SHU_pic07.jpg) center center no-repeat; 
    background-size: cover;
}
#knowledge_Ethics_block01_id13 {
    position: absolute;
    left: 60%;
    top: 0px;
    z-index: 9;
    background-color: #445D8C;
}
#knowledge_Ethics_block01_id14 {
    position: absolute;
    left: 60%;
    top: 234.25px;
    z-index: 9;
    background-color: #2F497A;
}
#knowledge_Ethics_block01_id15 {
    position: absolute;
    left: 60%;
    top: 468.5px;
    z-index: 9;
    background-color: #416090;
    background: url(../assets/SHU_pic03.jpg) center center no-repeat; 
    background-size: cover;
}
#knowledge_Ethics_block01_id16 {
    position: absolute;
    left: 60%;
    top: 702.75px;
    z-index: 9;
    background-color: #36578B;
}
#knowledge_Ethics_block01_id17 {
    position: absolute;
    left: 73.33%;
    top: 0px;
    z-index: 9;
    background-color: #5B75A3;
}
#knowledge_Ethics_block01_id18 {
    position: absolute;
    left: 73.33%;
    top: 234.25px;
    z-index: 9;
    background-color: #3A578A;
}
#knowledge_Ethics_block01_id19 {
    position: absolute;
    left: 73.33%;
    top: 468.5px;
    z-index: 9;
    background-color: #5B75A3;
}
#knowledge_Ethics_block01_id20 {
    position: absolute;
    left: 73.33%;
    top: 702.75px;
    z-index: 9;
    background-color: #445D8C;
}
#knowledge_Ethics_block01_id21 {
    position: absolute;
    left: 86.67%;
    top: 0px;
    z-index: 9;
    background-color: #405A89;
}
#knowledge_Ethics_block01_id22 {
    position: absolute;
    left: 86.67%;
    top: 234.25px;
    z-index: 9;
    background-color: #314E7F;
    background: url(../assets/SHU_pic04.jpg) center center no-repeat; 
    background-size: cover;
}
#knowledge_Ethics_block01_id23 {
    position: absolute;
     left: 86.67%;
    top: 468.5px;
    z-index: 9;
    background-color: #2F497A;
}
#knowledge_Ethics_block01_id24 {
    position: absolute;
    left: 86.67%;
    top: 702.75px;
    z-index: 9;
    background-color: #395486;
}
.knowledge_Ethics_block01_num01 {
  font-size: 400%;
  color: #ffffff;
    margin-top: 56px;
}
.knowledge_Ethics_block01_txt01 {
  font-size: 150%;
  color: #ffffff;
}
</style>