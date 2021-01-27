<template>
  <div>
    <template>
      <el-table
        ref="multipleTable"
        :data="information.userApplicationList"
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
                <span>{{ props.row.direction }}</span> </el-form-item
              ><br />
              <el-form-item label="项目摘要">
                <span>{{ props.row.projectAbstract }}</span> </el-form-item
              ><br />
              <el-form-item label="项目单位">
                <span>{{ props.row.institution }}</span> </el-form-item
              ><br />
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
                <span>{{ props.row.memberAgent }}</span> </el-form-item
              ><br />
              <el-form-item label="预定的起止时间">
                <span>{{ props.row.scheduleTime }}</span>
              </el-form-item>
              <el-form-item label="申请创建时间">
                <span>{{ props.row.creationTime }}</span> </el-form-item
              ><br />
              <el-form-item label="申请同意时间">
                <span>{{ props.row.beginTime }}</span>
              </el-form-item>
              <el-form-item label="执行期">
                <span>{{ props.row.executionTime }}</span>
              </el-form-item>
              <el-form-item label="结束时间">
                <span>{{ props.row.endTime }}</span>
              </el-form-item>
              <br />
              <el-form-item label="">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="download(props.row.applicationFile)"
                    >下载附件</el-button
                  >
                  <el-button
                    :disabled="props.row.status != '未提交'"
                    size="mini"
                    type="success"
                    @click="confirmSubmit(props.row.id)"
                    >提交</el-button
                  >
                  <el-button
                    :disabled="props.row.status != '未提交'"
                    size="mini"
                    type="danger"
                    @click="confirmDelete(props.row.id)"
                    >删除</el-button
                  >
                </template>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          width="150"
          fixed
          prop="id"
          label="项目编号"
        ></el-table-column>
        <!--<el-table-column width="200" prop="ordernum" label="ordernum"></el-table-column>-->
        <el-table-column
          width="200"
          fixed
          prop="name"
          label="项目名称"
        ></el-table-column>
        <!--<el-table-column width="200" prop="userId" label="用户Id"></el-table-column>-->
        <el-table-column
          width="200"
          prop="creationTime"
          label="创建时间"
        ></el-table-column>
        <el-table-column
          width="200"
          prop="beginTime"
          label="开始时间"
        ></el-table-column>
        <el-table-column width="200" prop="type" label="类型"></el-table-column>
        <el-table-column
          width="200"
          prop="status"
          label="状态"
        ></el-table-column>
        <el-table-column width="150" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="expand(scope.row)"
              >展开</el-button
            >
            <el-button size="mini" type="info" @click="contract(scope.row)"
              >收起</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "myapplications",
  data() {
    return {
      information: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    submitApplication: function (id) {
      axios({
        method: "get",
        url: "/user/submitApplicationDemo?applicationId=" + id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$alert("项目编号为" + id + "的申请已提交", "提交成功", {
              confirmButtonText: "确定",
            });
          } else alert(res.data.code);
        })
        .catch((err) => {
          alert(err);
        });
        this.load();
    },
    confirmSubmit:function(id){
      this.$confirm("您确定要提交项目编号为" + id + "的项目吗？", "确认信息", {
        distinguishCancelAndClose: true,
        type: "success",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then(() => {
          this.submitApplication(id)
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: "放弃申请",
          });
        });
    },
    confirmDelete: function (id) {
      this.$confirm("您确定要删除项目编号为" + id + "的项目吗？", "确认信息", {
        distinguishCancelAndClose: true,
        type: "warning",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "已删除",
          });
          this.deleteApplication(id)
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: "放弃删除",
          });
        });
    },
    deleteApplication: function (id) {
      axios({
        method: "get",
        url: "/user/deleteApplicationDemo?applicationId=" + id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$alert("项目编号为" + id + "的申请已被删除", "删除成功", {
              confirmButtonText: "确定",
            });
          } else alert(res.data.code);
        })
        .catch((err) => {
          alert(err);
        });
        this.load();
    },
    download: function (url) {
      axios({
        method: "get",
        url: "/file/download?fileAddress=" + url,
        data: {},
        responseType: "blob"
      })
        .then((res) => {
          var new_element = document.createElement('a');
          new_element.download = res.config.url.slice(res.config.url.search('---')+3);
          new_element.style.display = 'none';
          var blob = new Blob([res.data]);
          new_element.href = URL.createObjectURL(blob);
          document.body.appendChild(new_element);
          new_element.click();
          document.body.removeChild(new_element);
        })
        .catch((err) => {
          alert(err);
        });
    },
    contract: function (row) {
      this.$refs.multipleTable.toggleRowExpansion(row, false);
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
        .catch((err) => {
          alert(err);
        });
    },
    load: function () {
      axios({
        url: "/user/applicationList",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.information = res.data.data;
          } else this.information = res.data.code;
        })
        .catch((err) => {
          alert(err);
        });
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
</style>