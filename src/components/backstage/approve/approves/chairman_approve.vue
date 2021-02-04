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
              <span>{{ props.row.endTime }}</span> </el-form-item
            ><br />
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
                <el-button
                  :disabled="props.row.applicationFile == ''"
                  size="mini"
                  type="primary"
                  @click="download(props.row.applicationFile)"
                  >下载附件</el-button
                >
                <el-button
                  :disabled="props.row.applicationPdf == ''"
                  size="mini"
                  type="primary"
                  @click="download(props.row.applicationPdf)"
                  >下载PDF</el-button
                >
                <div v-if="props.row.status!='委员长终审'">
                <el-button
                  :disabled="props.row.executeInfo == ''"
                  size="mini"
                  type="primary"
                  @click="download(props.row.executeInfo)"
                  >下载执行情况表格</el-button
                >
                <el-button
                  :disabled="props.row.summary == ''"
                  size="mini"
                  type="primary"
                  @click="download(props.row.summary)"
                  >下载总结</el-button
                >
                   <el-button
                  :disabled="props.row.trackFile == ''"
                  size="mini"
                  type="primary"
                  @click="download(props.row.trackFile)"
                  >下载后跟踪文件</el-button
                >
                </div>            
              </template>
            </el-form-item>
            <br />
            <el-form-item label="" v-if="props.row.status=='执行情况表与总结待审核'||props.row.status=='执行情况表待审核'
            ||props.row.status=='跟踪情况表待审核'||props.row.status=='伦理工作总结待审核'">
              <!--按钮，无名称-->
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="success"
                    @click="confirm(props.row.id, 1)"
                    >批准</el-button
                  >
                <el-button
                    size="mini"
                    type="danger"
                    @click="confirm(props.row.id, -1)"
                    >驳回</el-button
                  >
              </template>
            </el-form-item>
            <br />
            <el-form-item label v-if='props.row.status=="委员长终审"'>
              <!--按钮，无名称-->
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  @click="dialogTableVisible = true"
                  >批准</el-button
                >
                <el-button
                    size="mini"
                    type="warning"
                    @click="confirmReject(props.row.id, 0)"
                    >修改</el-button
                  >
                <el-button
                    size="mini"
                    type="danger"
                    @click="confirmReject(props.row.id,-1)"
                    >驳回</el-button
                  >
                <el-dialog
                  width="90%"
                  title="委员任命"
                  :visible.sync="dialogTableVisible"
                  append-to-body
                >
                <div style="float:right;">
                  <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.userId"
                      :label="item.name"
                      :value="item.userId"
                    >
                    </el-option>
                  </el-select>
                  <el-button
                  size="medium"
                  type="primary"
                  @click="confirmAppoint(props.row.id)"
                  >确认</el-button>
                  </div>
                  <el-table
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
                    <el-table-column
                      width="200"
                      prop="officePhone"
                      label="办公室电话"
                    >
                    </el-table-column>
                    <el-table-column
                      width="200"
                      prop="mobilePhone"
                      label="移动电话"
                    >
                    </el-table-column>
                    <!--<el-table-column width="200" prop="pending" label="待定">
                    </el-table-column>-->
                  </el-table>
                </el-dialog>
              </template>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column width="100" prop="id" label="项目编号"></el-table-column>
      <el-table-column
        width="200"
        prop="name"
        label="项目名称"
      ></el-table-column>
      <el-table-column
        width="200"
        prop="userId"
        label="用户Id"
      ></el-table-column>
      <el-table-column
        width="250"
        prop="creationTime"
        label="创建时间"
      ></el-table-column>
      <el-table-column width="200" prop="type" label="类型"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
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
  </div>
</template>

<script>
import axios from "axios";
import {Download} from "@/components/commonScript.js";
export default {
  name: "chairman_approve",
  data() {
    return {
      information: "",
      textarea: "",
      value: "",
      options: [],
      dialogTableVisible: false,
      memberlist: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    approvalTrack: function(applicationId,method){
      if(this.textarea==''&&method==-1){
                      this.$message.error('未填写驳回原因');return;}
      axios({
                method:'post',
                url:'/chairman/approvalTrack',
                data:{
                    applicationId: applicationId,
                    rejectReason: this.textarea,
                    state: method,
                }
            }).then((res)=>
            {
                if(res.data.code===200)
                {
                    this.$message({
          message: '成功',
          type: 'success'
        });
                      this.load();
                }
                else this.$message.error(res.data.message);
                      this.load();
            }).catch((err)=>{
                this.$message.error(err);
            })
            this.load();
    },
    confirm(applicationId,method){
      if(this.textarea==''&&method==-1){this.$message.error('未填写驳回原因');return;}
      this.$confirm("您确定要"+ (method==1?"批准":"驳回") +"项目：" +applicationId+"吗？", "确认信息", {
        type: "info",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then((res) => {
          this.$message({
            type: "info",
            message: "进行审批",
          });
          this.approvalTrack(applicationId,method)
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: "放弃审批",
          });
        });
    },
    reject: function(applicationId,method){
      axios({
                method:'post',
                url:'/chairman/rejection',
                data:{
                    applicationId: applicationId,
                    rejectReason: this.textarea,
                    state: method,
                }
            }).then((res)=>
            {
                if(res.data.code===200)
                {
                    this.$message({
          message: '成功',
          type: 'success'
        });
                      this.load();
                }
                else this.$message.error(res.data.message);
                      this.load();
            }).catch((err)=>{
                this.$message.error(err);
            })
            this.load();
    },
    confirmReject: function(applicationId,method){
      if(this.textarea==''&&method!=1){this.$message.error('未填写驳回原因');return;}
      this.$confirm("您确定要修改/驳回项目：" +applicationId+"吗？", "确认信息", {
        type: "warning",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then((res) => {
          this.$message({
            type: "info",
            message: "进行审批",
          });
          this.reject(applicationId,method)
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: "放弃审批",
          });
        });
    },
    confirmAppoint: function (applicationId) {
      this.$confirm("您确定要委任" + this.value + "为项目"+applicationId+"的委员吗？", "确认信息", {
        distinguishCancelAndClose: true,
        type: "warning",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then((res) => {
          this.$message({
            type: "info",
            message: "进行委任",
          });
          this.appoint(applicationId)
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: "放弃委任",
          });
        });
    },
    appoint:function(applicationId){
      axios({
                method:'post',
                url:'/chairman/assign',
                data:{
                    applicationId: applicationId,
                    userId: this.value
                }
            }).then((res)=>
            {
                if(res.data.code===200)
                {
                    this.$message({
          message: '成功',
          type: 'success'
        });
                }
                else this.$message.error(res.data.message);
            }).catch((err)=>{
                this.$message.error(err);
            })
            this.load();
    },
    download: function (url) {
      Download(url);
    },
    change(event) {
      this.$forceUpdate();
    },
    contract(row) {
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
            row.applicationPdf = res.data.data.applicationPdf;
            row.executeInfo = res.data.data.executeInfo;
            row.summary = res.data.data.summary;
            row.trackFile = res.data.data.trackFile;
            row.id = res.data.data.id;
            this.$refs.multipleTable.toggleRowExpansion(row, true);
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    load: function () {
      this.textarea="";
      axios({
        url: "/chairman/auditSet",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.information = res.data.data;
          } else this.information = res.data.code;
        })
        .catch((err) => {
          this.$message.error(err);
        });
      axios({
        url: "/chairman/memberList",
        method: "get",
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.memberlist = res.data;
            this.options = res.data.data;
          } else this.memberlist = res.data.code;
        })
        .catch((err) => {
          this.$message.error(err);
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