<template>
  <div>
    <img id="loginBG" src="../assets/loginBG.jpg" />
    <div id="loginTable">
    <div id="hint"></br>登录</br><p style="font-size:15px;position:relative;left:28%;">您正在登陆到: 上海大学伦理审批系统</p></div>
      <el-input v-model="userId" placeholder="userId" /><br />
      <el-input v-model="password" type="password" placeholder="password" /><br />
      <el-button id="loginButton" @click="login()" type="primary">登录</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      password: "",
      userId: "",
    };
  },
  methods: {
    login: function () {
      axios({
        method: "post",
        url: "/login",
        data: {
          password: this.password,
          userId: this.userId,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("userId", res.data.data.userId);
            localStorage.setItem("name", res.data.data.name);
            localStorage.setItem("identity",JSON.stringify(res.data.data.identity));
            localStorage.setItem("department", res.data.data.department);
            this.$router.push("backstage");
          } else this.$message.error(res.data.message);;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
  },
};
</script>

<style scoped>
#loginBG {
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  left:0px;
  top:0px;
  background-size: cover;
}
#loginTable{
    border-top-color: rgb(39, 80, 133);
    border-top-width: 10px;
    border-top:solid;
    background-image: linear-gradient(rgba(255, 255, 255,0.8));
    height:350px;
    width:350px;
    position:absolute;
    right:5%;
    top:25%;
}
.el-input{
    width:80%;
    height:50px;
}
#loginButton{
    width:80%;
    background:  rgb(39, 80, 133);
    border:0px;
}
#loginButton:active {
  background-image: linear-gradient(#125aa8);
  border-radius: 0px;
  border: none;
}
#hint{
    left:-32.5%;
    position:relative;
    color:rgb(39, 80, 133);
    font-size:25px;
}
</style>