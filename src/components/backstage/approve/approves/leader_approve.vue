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
            <el-form-item label="项目类别">
              <span>{{ props.row.projectType }}</span>
            </el-form-item>
            <el-form-item label="研究方向">
              <span>{{ props.row.direction }}</span>
            </el-form-item><br />
            <el-form-item label="项目摘要">
              <span>{{ props.row.projectAbstract }}</span>
            </el-form-item><br />
            <el-form-item label="项目单位">
              <span>{{ props.row.institution }}</span>
            </el-form-item><br />
            <el-form-item label="学院秘书经办人">
              <span>{{ props.row.secretaryAgent }}</span>
            </el-form-item>
            <el-form-item label="部门领导经办人">
              <span>{{ props.row.leaderAgent }}</span>
            </el-form-item>
            <el-form-item label="委员长经办人">
              <span>{{ props.row.chairmanAgent }}</span>
            </el-form-item>
            <el-form-item label="委员经办人">
              <span>{{ props.row.memberAgent }}</span>
            </el-form-item><br />
            <el-form-item label="预定的起止时间">
              <span>{{ props.row.scheduleTime }}</span>
            </el-form-item>
            <el-form-item label="申请创建时间">
              <span>{{ props.row.creationTime }}</span>
            </el-form-item><br />
            <el-form-item label="申请同意时间">
              <span>{{ props.row.beginTime }}</span>
            </el-form-item>
            <el-form-item label="执行期">
              <span>{{ props.row.executionTime }}</span>
            </el-form-item>
            <el-form-item label="结束时间">
              <span>{{ props.row.endTime }}</span>
            </el-form-item><br />
            <el-form-item label="状态">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <br />
            <el-form-item label="修改意见">
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 50 }"
                placeholder="若批准则不需要输入"
                v-model="textarea"
                @input="change($event)"
              ></el-input>
            </el-form-item>
            <br />
            <el-form-item label="附件">
              <!--按钮，无名称-->
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="download(props.row.applicationFile)">下载附件</el-button>
              </template>
            </el-form-item>
            <br />
            <el-form-item label>
              <!--按钮，无名称-->
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="approval(1)">批准</el-button>
                <el-button size="mini" type="warning" @click="approval(0)">修改</el-button>
                <el-button size="mini" type="danger" @click="approval(-1)">驳回</el-button>
              </template>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column width="100" prop="id" label="项目编号"></el-table-column>
      <el-table-column width="200" prop="name" label="项目名称"></el-table-column>
      <el-table-column width="200" prop="userId" label="用户Id"></el-table-column>
      <el-table-column width="250" prop="creationTime" label="创建时间"></el-table-column>
      <el-table-column width="200" prop="type" label="类型"></el-table-column>
      <el-table-column width="200" prop="status" label="状态"></el-table-column>
      <el-table-column width="150" fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="expand(scope.row)">展开</el-button>
          <el-button size="mini" type="info" @click="contract(scope.row)">收起</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "leader_approve",
  data() {
    return {
      information: "",
      textarea: ""
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    download(url){
      axios({
        method: "get",
        url: "/file/download?fileAddress=" + url,
        data: {}
      })
        .then(res => {
          if (res.data.code === 200) {
            console.log(res.data);
          } else alert(res.data.code);
        })
        .catch(() => {
          alert("error");
        });
    },
    change(event) {
      this.$forceUpdate();
    },
    contract(row) {
      this.$refs.multipleTable.toggleRowExpansion(row, false);
    },
    print: function(sth) {
      console.log(sth);
    },
    expand: function(row) {
      axios({
        method: "get",
        url: "/user/applicationInfo?applicationId=" + row.id,
        data: {}
      })
        .then(res => {
          if (res.data.code === 200) {
            row.leaderAgent = res.data.data.leaderAgent;
            row.institution = res.data.data.institution;
            row.secretaryAgent = res.data.data.secretaryAgent;
            row.chairmanAgent = res.data.data.chairmanAgent;
            row.memberAgent = res.data.data.memberAgent;
            row.scheduleTime = res.data.data.scheduleTime;
            row.creationTime = res.data.data.creationTime;
            row.beginTime = res.data.data.beginTime;
            row.executionTime = res.data.data.executionTime;
            row.endTime = res.data.data.endTime;
            row.status = res.data.data.status;
            row.projectType = res.data.data.projectType;
            row.direction = res.data.data.direction;
            row.fundingSource = res.data.data.fundingSource;
            row.projectAbstract = res.data.data.projectAbstract;
            row.applicationFile = res.data.data.applicationFile;
            this.$refs.multipleTable.toggleRowExpansion(row, true);
          } else alert(res.data.code);
        })
        .catch(() => {
          alert("error");
        });
    },
    load: function() {
      axios({
        url: "/leader/auditSet",
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
    test_post() {}
  }
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