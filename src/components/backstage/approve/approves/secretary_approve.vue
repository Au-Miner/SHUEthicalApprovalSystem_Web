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
            <el-form-item label="领导单位">
              <span>{{ props.row.leaderAgent }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column width="150" fixed prop="id" label="项目编号">
      </el-table-column>
      <el-table-column width="200" fixed prop="name" label="项目名称">
      </el-table-column>
      <el-table-column width="200" prop="userId" label="用户Id">
      </el-table-column>
      <el-table-column width="200" prop="creationTime" label="创建时间">
      </el-table-column>
      <el-table-column width="200" prop="type" label="类型"> </el-table-column>
      <el-table-column width="200" prop="status" label="状态">
      </el-table-column>
      <el-table-column width="150" fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="info" @click="post(scope)"
            >详情</el-button
          >
          <el-button size="mini" type="success" @click="">批准 </el-button>
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
    };
  },
  mounted() {
    this.load();
  },
  methods: {
      print:function(sth){console.log(sth)},
    post: function (scope) {
      axios({
        method: "get",
        url: "/user/applicationInfo?applicationId=" + scope.row.id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.data);
            scope.row.leaderAgent=res.data.data.leaderAgent;
            this.$refs.multipleTable.toggleRowExpansion(scope.row,true);
            console.log(scope.$index);
          } else alert(res.data.code);
        })
        .catch(() => {
          alert("error");
        });
    },
    load: function () {
      axios({
        url: "/secretary/auditSet",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.information = res.data.data;
          } else this.information = res.data.code;
        })
        .catch(() => {
          console.log("error occur");
        });
    },
    test_post() {},
  },
};
</script>

<style scoped>
#list {
  left: 25px;
  top: 25px;
}
</style>