<template>
  <div>
    <template>
      <el-table
        ref="multipleTable"
        :data="memberlist.data"
        style="width: 95%; height: 100%"
        id="list"
      >
        <el-table-column width="150" prop="name" label="姓名">
        </el-table-column>
        <el-table-column width="150" prop="userId" label="用户Id">
        </el-table-column>
        <el-table-column width="200" prop="department" label="学院">
        </el-table-column>
        <el-table-column width="200" prop="education" label="学历">
        </el-table-column>
        <el-table-column width="200" prop="identity" label="身份">
        </el-table-column>
        <el-table-column width="200" prop="officePhone" label="办公室电话">
        </el-table-column>
        <el-table-column width="200" prop="mobilePhone" label="移动电话">
        </el-table-column>
        <el-table-column width="200" prop="pending" label="待定">
        </el-table-column>
        <el-table-column width="350" fixed="right" label="选项">
          <template slot-scope="scope">
            <div style="width: 250px; float: left">
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
            <div style="text-align: right; float: right">
              <el-button size="medium" type="primary" @click="appoint()"
                >委派</el-button
              >
            </div></template
          ></el-table-column
        ></el-table
      ></template
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      memberlist: "",
      options: [],
      value: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    appoint: function () {},
    load: function () {
      axios({
        url: "/chairman/memberList",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.memberlist = res.data;
          } else this.memberlist = res.data.code;
        })
        .catch((err) => {
          alert(err);
        });
      axios({
        url: "/chairman/auditSet",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.options = res.data.data.auditResList;
          } else {
            this.$alert("错误代码" + res.data.code, "错误", {
              confirmButtonText: "确定",
            });
          }
        })
        .catch((err) => {
          alert(err);
        });
      console.log(this.options);
    },
  },
};
</script>
<style scoped>
#list {
  left: 25px;
  top: 25px;
}
>>> .el-table__expand-icon {
  visibility: hidden;
}
</style>