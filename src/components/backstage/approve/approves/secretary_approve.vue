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
          <el-form inline class="table-expand">
            <el-form-item label="领导单位">
              <span>{{ props.row.leaderAgent }}</span>
            </el-form-item>
            <br />
            <el-form-item label="修改意见">
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 50 }"
                placeholder="若批准则不需要输入"
                v-model="textarea"
                @input="change($event)"
              >
              </el-input>
            </el-form-item><br />
            <el-form-item label=""><!--按钮，无名称-->
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="approval(1)">批准</el-button>
                <el-button size="mini" type="warning" @click="approval(0)">修改</el-button>
                <el-button size="mini" type="danger" @click="approval(-1)">驳回</el-button>
              </template>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column width="100" prop="id" label="项目编号">
      </el-table-column>
      <el-table-column width="200" prop="name" label="项目名称">
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
          <el-button size="mini" type="primary" @click="expand(scope.row)"
            >展开</el-button
          >
          <el-button size="mini" type="info" @click="contract()"
            >收起</el-button
          >
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
      textarea: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    change(event){
      this.$forceUpdate();
    },
    contract() {
      this.$refs.multipleTable.toggleRowExpansion(row, false);
    },
    print: function (sth) {
      console.log(sth);
    },
    expand: function (row) {
      axios({
        method: "get",
        url: "/user/applicationInfo?applicationId=" + row.id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            row.leaderAgent = res.data.data.leaderAgent;
            this.$refs.multipleTable.toggleRowExpansion(row, true);
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
>>> .el-table__expand-icon {
  visibility: hidden;
}
</style>