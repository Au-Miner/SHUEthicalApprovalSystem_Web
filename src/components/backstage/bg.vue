
<template>
  <div id="backstage_bg">
    <div id="darkblue_bg">
      <img id="shu_badge" src="../../assets/shu_pic.png" />
      <div id="info">欢迎: {{information}}</div>
      <el-button size="mini" id="changeInfo" type="text" @click="changeInfoDialogVisible = true">修改信息</el-button>
      <el-dialog
      title="修改个人信息"
      :visible.sync="changeInfoDialogVisible"
      width="25%"
      append-to-body
      >
      <el-form label-width="100px" :model="infoForm">
        <el-form-item label="邮箱">
          <el-input v-model="infoForm.email"></el-input>
          </el-form-item>
          <el-form-item label="传真">
            <el-input v-model="infoForm.fax"></el-input>
            </el-form-item>
            <el-form-item label="移动电话">
              <el-input v-model="infoForm.mobilePhone"></el-input>
              </el-form-item>
              <el-form-item label="办公室电话">
              <el-input v-model="infoForm.officePhone"></el-input>
              </el-form-item>
              </el-form>
              <el-button size="mini" type="primary" @click="updateInfo()">确认修改</el-button>
      </el-dialog>
      <el-button size="mini" @click="logout()" type="primary" id="logout">退出登录</el-button>
    </div>
    <div id="el-sidebar">
    <el-menu
      router
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#f0f8fa"
      text-color="#000"
      active-text-color="#245086">
      <el-menu-item @click="jmp('tutorial')" index="1">
        <template slot="title">
          <i class="el-icon-question"></i>
          <span @click="jmp('tutorial')">申报指南</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span>申请</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="jmp('apply_program')" index="2-1">项目申请</el-menu-item>
          <el-menu-item @click="jmp('apply_personal')" index="2-2">文章申请</el-menu-item>
          <el-menu-item @click="jmp('apply_other')" index="2-2">其他申请</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item @click="jmp('myapplications')" index="3">
        <i class="el-icon-notebook-2"></i>
        <span @click="jmp('myapplications')" slot="title">我的申请</span>
      </el-menu-item>
      <el-menu-item @click="jmp('approve')" :disabled="disableApprove" index="4">
        <i class="el-icon-s-check"></i>
        <span @click="jmp('approve')" slot="title">项目审批</span>
      </el-menu-item>
    </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </ul>
    </div> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "backstage_bg",
  data() {
    return {
      information: "",
      changeInfoDialogVisible: false,
      infoForm: { email: "", fax: "", mobilePhone: "", officePhone: "" },
      disableApprove:true,
    };
  },
  mounted() {
    this.info_update();
    var identities = JSON.parse(localStorage.getItem('identity'));
    if (
      !identities.includes("普通用户") 
     ) this.disableApprove = false;
  },
  methods: {
    handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
    updateInfo() {
      axios({
        method: "post",
        url: "/user/updateInfo",
        data: {
          email: this.infoForm.email,
          fax: this.infoForm.fax,
          mobilePhone: this.infoForm.mobilePhone,
          officePhone: this.infoForm.officePhone,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem("email", this.infoForm.email);
            localStorage.setItem("office_phone", this.infoForm.officePhone);
            localStorage.setItem("phone", this.infoForm.mobilePhone);
            localStorage.setItem("fax", this.infoForm.fax);
            this.changeInfoDialogVisible = false;
            this.$alert("您已成功修改个人信息", "修改成功", {
              confirmButtonText: "确认",
              type: "success",
            });
          } else
            this.$alert(res.data.message, "修改失败", {
              confirmButtonText: "确认",
              type: "info",
            });
        })
        .catch((err) => {
          alert(err);
        });
    },
    jmp: function (path) {
      this.$router.replace("/backstage/" + path).catch((err) => {
        err;
      });
    },
    info_update() {
      axios({
        url: "/user/info?userId=" + localStorage.getItem("userId"),
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.information = res.data.data.name + " " + res.data.data.userId;
            localStorage.setItem("email", res.data.data.email);
            this.infoForm.email = res.data.data.email;
            localStorage.setItem("institution", res.data.data.department);
            localStorage.setItem("office_phone", res.data.data.officePhone);
            this.infoForm.officePhone = res.data.data.officePhone;
            localStorage.setItem("phone", res.data.data.mobilePhone);
            this.infoForm.mobilePhone = res.data.data.mobilePhone;
          } else this.information = res.data.code;
        })
        .catch(() => {
          console.log("error occur");
        });
    },
    logout() {
      localStorage.clear();
      this.$router.push("/").catch((err) => {
        err;
      });
    },
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- background: rgba(0, 0, 0, 0); -->
<style scoped>
#info {
  width: 200px;
  right: 15%;
  top: 26px;
  font-size: 18px;
  position: absolute;
  color: white;
}
button#logout {
  background: rgba(0, 0, 0, 0);
  height: 10%;
  width: 5%;
  position: absolute;
  left: 90%;
  top: 22%;
  font-size: 18px;
  color: white;
  border: 0px;
  z-index: 5;
}
button#changeInfo {
  background: rgba(0, 0, 0, 0);
  height: 10%;
  width: 5%;
  position: absolute;
  right: 10%;
  top: 22%;
  font-size: 18px;
  color: white;
  border: 0px;
  z-index: 5;
}
#darkblue_bg {
  width: 100%;
  height: 100px;
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
.el-menu--popup {
width: 200px;
}
#el-sidebar{
  bottom: 0px;
  width: 200px;
  top: 100px;
  left: 0%;
  position: absolute;
  background-image: linear-gradient(#f0f8fa);
}
.content {
  background-image: linear-gradient(#f0f8fa);
  position: absolute;
  left: 200px;
  top: 100px;
  bottom: 0px;
  right: 0px;
  overflow: auto;
}
</style>