
<template>
  <div id="backstage_bg">
    <div id="darkblue_bg">
      <img id="shu_badge" src="../../assets/shu_pic.png" />
      <div id="info"><span>欢迎: {{information}}</span></div>
      <el-button @click="logout()" type="primary" id="logout">退出登录</el-button>
    </div>
    <div id="lightblue_sidebar">
      <el-button @click="jmp('tutorial')" type="primary" id="tutorial">申报指南</el-button><br />
      <el-button @mouseenter.native="show('applies')" @mouseleave.native="hide('applies')" type="primary" id="apply">申请</el-button><br />
      <el-button @click="jmp('myapplications')" type="primary" id="myapplies">我的申请</el-button><br />
      <el-button style="display:none;" @click="jmp('approve')" type="primary" id="approve">项目审批</el-button><br />
      <el-button @click="jmp('appointment')" type="primary" id="appointment">委员指派</el-button>
    </div>
    <div id="applies">
        <el-button @mouseenter.native="show('applies')" @mouseleave.native="hide('applies')" @click="jmp('apply_program')" @mouseleave="hide_applies()" type="primary" id="apply">项目申请</el-button><br />
        <el-button @mouseenter.native="show('applies')" @mouseleave.native="hide('applies')" @click="jmp('apply_personal')" @mouseleave="hide_applies()" type="primary" id="apply">个人申请</el-button><br />
        <el-button @mouseenter.native="show('applies')" @mouseleave.native="hide('applies')" @click="jmp('apply_other')" @mouseleave="hide_applies()" type="primary" id="apply">其他申请</el-button>
    </div>
    <div class="content">
      <router-view></router-view>
    </ul>
    </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "backstage_bg",
  data() {
    return {
      information:''
      }
  },
  mounted(){
    this.info_update()
    if(!localStorage.getItem('identity').includes('委员长')){
      this.hide("appointment");
    }
    if(localStorage.getItem('identity').includes('委员长')||
       localStorage.getItem('identity').includes('学院秘书')||
       localStorage.getItem('identity').includes('部门领导')||
       localStorage.getItem('identity').includes('委员')){
        this.show("approve");
    }
  },
  methods:{
    jmp: function(path){
      this.$router.push(path)
    },
    show: function(id){
      document.getElementById(id).style.display="inline";
    },
    hide: function(id){
      document.getElementById(id).style.display="none";
    },
    info_update(){
      axios({
        url:'/user/info?userId='+localStorage.getItem('userId'),
        method:'get',
      }).then((res)=>{
        if(res.data.code===200)
        {
          this.information = res.data.data.name+' '+res.data.data.userId;
        }
        else this.information = res.data.code;
      }).catch(()=>{
        console.log('error occur')
      })
    },
    logout(){
      localStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- background: rgba(0, 0, 0, 0); -->
<style scoped>
#info{
  width:200px;
  right:10%;
  top: 20px;
  font-size:18px;
  position:absolute;
  color:white;
}
button#logout{
  background:rgba(0, 0, 0, 0);
  height: 10%;
  width: 10%;
  position: absolute;
  left: 90%;
  top: 22%;
  font-size: 18px;
  color: #fefefe;
  border: 0px;
  z-index: 5;
}
#applies{
  width:200px;
  position:absolute;
  top:100px;
  left:200px;
  z-index: 5;
  display: none;
}
#darkblue_bg {
  width: 100%;
  height: 60px;
  background-image: linear-gradient(#245086);
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;
}
#shu_badge {
  height: 120%;
  width: 216px;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 2;
}
#lightblue_sidebar {
  bottom:0px;
  width: 200px;
  background-image: linear-gradient(#bfe1fd);
  position: absolute;
  top: 60px;
  left: 0%;
  visibility: visible;
  z-index: 1;
  border-right: 3px solid;
  border-right-color: #245086;
}
button {
  font-size: 18px;
  height: 40px;
  width: 100%;
  background-image: linear-gradient(#769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial {
  font-size: 18px;
  height: 40px;
  width: 100%;
  background-image: linear-gradient(#245086, #769dc5);
  border-radius: 0px;
  border: none;
}
button#tutorial:hover {
  background-image: linear-gradient(#66b1ff);
  border-radius: 0px;
  border: none;
}
button#tutorial:active {
  background-image: linear-gradient(#3a8ee6);
  border-radius: 0px;
  border: none;
}
.content
{
  background-image: linear-gradient(#F0F8FA);
  position: absolute;
  left:200px;
  top: 60px;
  bottom:0px;
  right:0px;
  overflow:auto;
}
</style>