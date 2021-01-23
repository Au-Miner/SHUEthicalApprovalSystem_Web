<template>
  <div id="info">
    <el-table
      ref="multipleTable"
      :data="information.auditResList"
      style="width: 95%; height: 100%"
      id="list"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-button type="success" plain @click="choice1" id="choice1Id">成功按钮</el-button>
            <el-button type="danger" plain @click="choice2" id="choice2Id">危险按钮</el-button>
            <el-button type="info" plain @click="choice3" id="choice3Id">信息按钮</el-button>
            <!-- <br /> -->
            <input type="text" value="请输入审批选择原因" id="input1Id">
          </el-form>
        </template>
      </el-table-column>

      <el-table-column width="150" fixed prop="id" label="项目编号"></el-table-column>
      <el-table-column width="200" fixed prop="name" label="项目名称"></el-table-column>
      <el-table-column width="200" prop="userId" label="用户Id"></el-table-column>
      <el-table-column width="200" prop="creationTime" label="创建时间"></el-table-column>
      <el-table-column width="200" prop="type" label="类型"></el-table-column>
      <el-table-column width="200" prop="status" label="状态"></el-table-column>
      <el-table-column width="150" fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="info" @click="choice4">审批</el-button>
          <el-button size="mini" type="success" @click="choice5">确定</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "secretary_approve",
  data() {
    return {
      information: "",
      applicationId: 0,
      rejectReason: " ",
      state: 0
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    print: function(sth) {
      console.log(sth);
    },
    load: function() {
      axios({
        url: "/secretary/auditSet",
        method: "get"
      })
        .then(res => {
          if (res.data.code === 200) {
            this.information = res.data.data;
          } else this.information = res.data.code;
        })
        .catch(() => {
          console.log("error occur");
        });
    },
    SecretaryApproval: function(Choice, Text = "") {
      axios({
        url: "/secretary/approval",
        method: "post",
        data: {
          applicationId: 0,
          rejectReason: Text,
          state: Choice
        }
      })
        .then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.data);
          }
        })
        .catch(() => {
          alert("error");
        });
    },
    choice1: function() {
      this.state = 1;
    },
    choice2: function() {
      this.state = 2;
    },
    choice3: function() {
      this.state = 3;
    },
    choice4: function() {
      // 显露按钮
    },
    choice5: function() { 
      this.SecretaryApproval(this.state, document.getElementById("input1Id").value);
    }
  }
};
</script>

<style scoped>
#list {
  left: 25px;
  top: 25px;
}
</style>