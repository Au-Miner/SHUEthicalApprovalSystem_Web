<template>
  <div>
    <template>
      <el-table
        ref="multipleTable"
        :data="projectList.userApplicationList"
        style="width: 96%; height: 100%"
        id="list"
      >
        <el-table-column type="expand" width="1">
          <template slot-scope="props">
            <el-form inline class="table-expand">
              <el-form-item label="项目类别">
                <span>{{ props.row.projectType }}</span>
              </el-form-item>
              <el-form-item label="研究方向">
                <span>{{ props.row.direction }}</span>
              </el-form-item>
              <br />
              <el-form-item label="项目摘要">
                <span>{{ props.row.projectAbstract }}</span>
              </el-form-item>
              <br />
              <el-form-item label="项目单位">
                <span>{{ props.row.institution }}</span>
              </el-form-item>
              <br />
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
              </el-form-item>
              <br />
              <el-form-item label="预定的起止时间">
                <span>{{ props.row.scheduleTime }}</span>
              </el-form-item>
              <el-form-item label="申请创建时间">
                <span>{{ props.row.creationTime }}</span>
              </el-form-item>
              <br />
              <el-form-item label="申请同意时间">
                <span>{{ props.row.beginTime }}</span>
              </el-form-item>
              <!--
              <el-form-item label="执行期">
                <span>{{ props.row.executionTime }}</span>
              </el-form-item>-->
              <el-form-item label="结束时间">
                <span>{{ props.row.endTime }}</span>
              </el-form-item>
              <br />
              <el-form-item
                v-if="
                  props.row.rejectReason != '' && props.row.rejectReason != null
                "
                label="驳回原因"
              >
                <span>{{ props.row.rejectReason }}</span>
              </el-form-item>
              <br />

              <el-form-item label="下载">
                <el-button
                  size="mini"
                  type="primary"
                  @click="download(props.row.applicationFile)"
                  >下载附件</el-button
                >
                <el-button
                  size="mini"
                  type="primary"
                  @click="download(props.row.applicationPdf)"
                  >下载PDF</el-button
                >
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
              </el-form-item>
              <br />
              <el-form-item
                v-if="
                  props.row.status == '未提交' || props.row.status == '驳回修改'
                "
                label
              >
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"
                    @click="confirmSubmit(props.row.id)"
                    >提交</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="confirmDelete(props.row.id)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="
                      updateProjectDialogVisible = true;
                      updateId = props.row.id;
                      getProjectInfo(props.row.id);
                    "
                    >修改</el-button
                  >
                </template>
              </el-form-item>
              <br />
              <el-form-item
                v-if="
                  props.row.status == '确认项目状态' ||
                  props.row.status == '暂未立项'
                "
                label="项目状态确认"
              >
                <el-select
                  size="mini"
                  v-model="value"
                  filterable
                  placeholder="确认项目状态"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-button
                  size="mini"
                  type="primary"
                  @click="confirmProject(props.row.id)"
                  >确认项目状态</el-button
                >
              </el-form-item>

              <el-form-item
                v-if="
                  props.row.status.search('执行情况表') != -1 &&
                  props.row.status.search('待审核') == -1 &&
                  props.row.type == '2'
                "
                label="执行情况表"
              >
                <el-upload
                  class="upload"
                  action="/api/file/upload"
                  :headers="headers"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-success="uploadExecuteInfo"
                  multiple
                  accept=".pdf"
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >上传执行情况表</el-button
                  >
                </el-upload>
              </el-form-item>
              <el-form-item
                v-if="
                  props.row.status.search('总结') != -1 &&
                  props.row.status.search('待审核') == -1 &&
                  props.row.type == '2'
                "
                label="总结"
              >
                <template slot-scope="scope">
                  <el-upload
                    class="upload"
                    action="/api/file/upload"
                    :headers="headers"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadSummary"
                    multiple
                    accept=".pdf"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">上传总结</el-button>
                  </el-upload>
                </template>
              </el-form-item>

              <el-form-item
                v-if="
                  props.row.status.search('待提交') != -1 &&
                  props.row.status.search('跟踪') == -1 &&
                  props.row.type == '2'
                "
                label=""
              >
                <el-button
                  size="medium"
                  type="success"
                  @click="othersProcessManagement(props.row.id)"
                  >确认上传</el-button
                >
              </el-form-item>

              <el-form-item
                v-if="
                  props.row.status == '执行情况表待提交' &&
                  props.row.type == '0'
                "
                label="执行情况表"
              >
                <template slot-scope="scope">
                  <el-upload
                    class="upload"
                    action="/api/file/upload"
                    :headers="headers"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadExecuteInfo"
                    multiple
                    accept=".pdf"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary"
                      >上传执行情况表</el-button
                    >
                    <div slot="tip" class="el-upload__tip">只能上传pdf</div>
                  </el-upload>
                  <el-button
                    size="medium"
                    type="success"
                    @click="articleProcessManagement(props.row.id)"
                    >确认上传</el-button
                  >
                </template>
              </el-form-item>

              <!--<el-form-item
                v-if="
                  props.row.status == '伦理工作总结待提交' &&
                  props.row.type == '0'
                "
                label="执行情况表"
              >
                <template slot-scope="scope">
                  <el-upload
                    class="upload"
                    action="/api/file/upload"
                    :headers="headers"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadSummary"
                    multiple
                    accept=".pdf"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary"
                      >上传总结</el-button
                    >
                    <div slot="tip" class="el-upload__tip">只能上传pdf</div>
                  </el-upload>
                  <el-button
                    size="medium"
                    type="success"
                    @click="articleProcessManagement(props.row.id)"
                    >确认上传</el-button
                  >
                </template>
              </el-form-item>
-->

              <el-form-item
                v-if="
                  props.row.status.search('执行情况表') != -1 &&
                  props.row.status.search('待审核') == -1 &&
                  props.row.type == '1'
                "
                label="执行情况表"
              >
                <el-upload
                  class="upload"
                  action="/api/file/upload"
                  :headers="headers"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-success="uploadExecuteInfo"
                  multiple
                  accept=".pdf"
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >上传执行情况表</el-button
                  >
                </el-upload>
              </el-form-item>
              <el-form-item
                v-if="
                  props.row.status.search('总结') != -1 &&
                  props.row.status.search('待审核') == -1 &&
                  props.row.type == '1'
                "
                label="总结"
              >
                <template slot-scope="scope">
                  <el-upload
                    class="upload"
                    action="/api/file/upload"
                    :headers="headers"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadSummary"
                    multiple
                    accept=".pdf"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">上传总结</el-button>
                  </el-upload>
                </template>
              </el-form-item>

              <el-form-item
                v-if="
                  props.row.status.search('待提交') != -1 &&
                  props.row.status.search('跟踪') == -1 &&
                  props.row.type == '1'
                "
                label=""
              >
                <el-button
                  size="medium"
                  type="success"
                  @click="projectProcessManagement(props.row.id)"
                  >确认上传</el-button
                >
              </el-form-item>

              <el-form-item
                v-if="props.row.status == '跟踪情况表待提交'"
                label="跟踪情况表"
              >
                <template slot-scope="scope">
                  <el-upload
                    class="upload"
                    action="/api/file/upload"
                    :headers="headers"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="uploadTrackFile"
                    multiple
                    accept=".pdf"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary"
                      >上传跟踪情况表</el-button
                    >
                    <div slot="tip" class="el-upload__tip">只能上传pdf</div>
                  </el-upload>
                  <el-button
                    size="medium"
                    type="success"
                    @click="trackManagement(props.row.id)"
                    >确认上传</el-button
                  >
                </template>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          width="125"
          prop="id"
          label="项目编号"
        ></el-table-column>
        <!--<el-table-column width="200" prop="ordernum" label="ordernum"></el-table-column>-->
        <el-table-column
          width="400"
          prop="name"
          label="项目名称"
        ></el-table-column>
        <!--<el-table-column width="200" prop="userId" label="用户Id"></el-table-column>-->
        <el-table-column
          width="200"
          prop="creationTime"
          label="创建时间"
        ></el-table-column>
        <el-table-column prop="beginTime" label="开始时间"></el-table-column>
        <!--<el-table-column width="75" prop="type" label="类型"></el-table-column>-->
        <el-table-column
          width="175"
          prop="status"
          label="状态"
          fixed="right"
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
    <!--临时解决措施-->
    <el-dialog
      title="修改项目信息"
      :visible.sync="updateProjectDialogVisible"
      fullscreen
      append-to-body
    >
      <div>
        <el-upload
          class="upload-demo"
          action="/api/file/upload"
          :headers="headers"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-success="handleSuccess"
          multiple
          :limit="1"
          accept=".rar,.zip,.7z"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传rar,zip,7z格式的文件,若无修改不需要点击上传
          </div>
        </el-upload>

        <el-form ref="form" :model="form">
          <el-row>
            <el-form-item
              label="项目单位"
              label-width="150"
              class="apply"
              id="apply_program_institution"
            >
              <el-col :span="6">
                <el-input v-model="form.institution"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item
              label="项目名称"
              label-width="150"
              class="apply"
              id="apply_program_name"
            >
              <el-col :span="12">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="起止时间" id="apply_program_timeLabel01">
              <el-col :span="8">
                <el-date-picker
                  type="date"
                  placeholder="开始日期"
                  v-model="form.time1"
                  style="width: 100%"
                  id="apply_program_time1"
                  class="apply"
                  value-format="yyyy-MM"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="1" id="apply_program_timeCol01"
                >----------</el-col
              >
              <el-col :span="8">
                <el-date-picker
                  placeholder="结束日期"
                  v-model="form.time2"
                  style="width: 100%"
                  id="apply_program_time2"
                  class="apply"
                  value-format="yyyy-MM"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item label="项目类别" id="el-form-item01">
              <el-radio-group v-model="watch_project_type">
                <el-col :span="20">
                  <el-radio label="A.新药物临床实验" class="apply"></el-radio>
                  <el-radio label="B.新器械临床实验" class="apply"></el-radio>
                  <el-radio label="C.新技术应用" class="apply"></el-radio>
                  <el-radio label="D.人体标本收集" class="apply"></el-radio>
                  <el-radio label="E.其他（请注明）" class="apply"></el-radio>
                </el-col>
                <el-col :span="4">
                  <el-input
                    size="mini"
                    @input="change($event)"
                    :disabled="disable_type_input"
                    v-model="project_typeE"
                    id="apply_program_programInput"
                  ></el-input>
                </el-col>
              </el-radio-group>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item
              label="办公电话"
              class="apply"
              id="apply_program_office_phone"
            >
              <el-col :span="6">
                <el-input v-model="form.office_phone"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item label="传真" class="apply" id="apply_program_fax">
              <el-col :span="6">
                <el-input v-model="form.fax"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item label="手机" class="apply" id="apply_program_phone">
              <el-col :span="6">
                <el-input v-model="form.phone"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item
              label="电子邮箱"
              class="apply"
              id="apply_program_email"
            >
              <el-col :span="6">
                <el-input v-model="form.email"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item
              label="目前主要研究方向"
              class="apply"
              id="apply_program_project_direction"
            >
              <el-col :span="12">
                <el-input v-model="form.project_direction"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item label="经费来源">
              <el-col :span="12">
                <el-checkbox-group v-model="form.temp">
                  <el-checkbox
                    label="政府"
                    name="temp"
                    class="apply"
                    @click="fundingSource(1)"
                  ></el-checkbox>
                  <el-checkbox
                    label="基金会"
                    name="temp"
                    class="apply"
                    @click="fundingSource(2)"
                  ></el-checkbox>
                  <el-checkbox
                    label="国际组织"
                    name="temp"
                    class="apply"
                    @click="fundingSource(3)"
                  ></el-checkbox>
                  <el-checkbox
                    label="其他"
                    name="temp"
                    class="apply"
                    @click="fundingSource(4)"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item
              label="研究内容摘要："
              prop="desc"
              class="apply"
              id="apply_program_project_abstract"
            >
              <el-input
                type="textarea"
                autosize
                v-model="form.project_abstract"
              ></el-input>
            </el-form-item>
          </el-row>
        </el-form>

        <el-button type="primary" id="apply_submit" @click="Update"
          >修改完成</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>


<script>
import axios from "axios";
import { Download } from "@/components/commonScript.js";
// import func from "../../../vue-temp/vue-editor-bridge";
export default {
  name: "myapplications",
  watch: {
    Watch_project_type(val) {
      switch (val) {
        case "A.新药物临床实验":
          this.form.project_type = "新药物临床实验";
          this.disable_type_input = true;
          this.project_typeE = "";
          break;
        case "B.新器械临床实验":
          this.form.project_type = "新器械临床实验";
          this.disable_type_input = true;
          this.project_typeE = "";
          break;
        case "C.新技术应用":
          this.form.project_type = "新技术应用";
          this.disable_type_input = true;
          this.project_typeE = "";
          break;
        case "D.人体标本收集":
          this.form.project_type = "人体标本收集";
          this.disable_type_input = true;
          this.project_typeE = "";
          break;
        case "E.其他（请注明）":
          this.form.project_type = this.project_typeE;
          this.disable_type_input = false;
          break;
      }
    },
  },
  computed: {
    headers() {
      return {
        Authorization: localStorage.getItem("token"),
      };
    },
    Watch_project_type() {
      return this.watch_project_type;
    },
  },
  data() {
    return {
      projectList: "",
      value: "",
      options: [
        {
          value: 0,
          label: "暂未立项",
        },
        {
          value: 1,
          label: "未获批",
        },
        {
          value: 2,
          label: "获批资助",
        },
      ],
      updateId: "",
      updateProjectDialogVisible: false,
      fileList: [],
      disable_type_input: true,
      project_typeE: "",
      watch_project_type: "",
      form: {
        institution: localStorage.getItem("institution"),
        name: "",
        time1: "",
        time2: "",
        office_phone: localStorage.getItem("office_phone"),
        fax: localStorage.getItem("fax"),
        phone: localStorage.getItem("phone"),
        email: localStorage.getItem("email"),
        project_direction: "",
        project_abstract: "",
        type: 0,
        temp: [],
        project_type: "",
        desc: "",
        application_file: "",
      },
      ExecuteInfo: "",
      summary: "",
      trackFile: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    othersProcessManagement: function (id) {
      axios({
        method: "post",
        url: "/user/othersProcessManagement",
        data: {
          executeInfo: this.ExecuteInfo,
          summary: this.summary,
          id: id,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.ExecuteInfo = "";
      this.summary = "";
      this.load();
    },
    uploadTrackFile: function (response, file, fileList) {
      //console.log(response.data);
      this.trackFile = response.data;
    },
    uploadSummary: function (response, file, fileList) {
      //console.log(response.data);
      this.summary = response.data;
    },
    projectProcessManagement: function (id) {
      axios({
        method: "post",
        url: "/user/projectProcessManagement",
        data: {
          executeInfo: this.ExecuteInfo,
          summary: this.summary,
          id: id,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.ExecuteInfo = "";
      this.summary = "";
      this.load();
    },
    trackManagement: function (id) {
      axios({
        method: "post",
        url: "/user/trackManagement",
        data: {
          trackFile: this.trackFile,
          id: id,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.TrackFile = "";
      this.load();
    },
    articleProcessManagement: function (id) {
      if (this.ExecuteInfo == "") {
        this.$message.error("您忘记上传文件了!");
        return;
      }
      axios({
        method: "post",
        url: "/user/articleProcessManagement",
        data: {
          executeInfo: this.ExecuteInfo,
          id: id,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.ExecuteInfo = "";
      this.load();
    },
    uploadExecuteInfo: function (response, file, fileList) {
      //console.log(response.data);
      this.ExecuteInfo = response.data;
    },
    getProjectInfo: function (id) {
      axios({
        method: "get",
        url: "/user/applicationInfo?applicationId=" + id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.form.institution = res.data.data.institution;
            this.form.name = res.data.data.name;
            this.form.project_direction = res.data.data.direction;
            this.form.project_abstract = res.data.data.projectAbstract;
            this.form.application_file = res.data.data.applicationFile;
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    Update: function () {
      if (this.form.application_file == "") {
        this.$message.error("您忘记上传文件了!");
        return;
      }
      axios({
        method: "post",
        url: "/user/updateApplicationDemoForProject",
        data: {
          application_file: this.form.application_file,
          application_type: 0, //项目类型可修改，待增加按钮
          email: this.form.email,
          fax: this.form.fax,
          funding_source: this.form.type,
          id: this.updateId,
          institution: this.form.institution,
          name: this.form.name,
          office_phone: parseInt(this.form.office_phone),
          phone: parseInt(this.form.phone),
          project_abstract: this.form.project_abstract,
          project_direction: this.form.project_direction,
          project_type: this.form.project_type,
          schedule_time: this.form.time1 + "-" + this.form.time2,
          user_id: parseInt(localStorage.getItem("userId")),
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
            this.updateProjectDialogVisible = false;
            this.load();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    fundingSource: function (choice) {
      this.form.type = choice;
    },
    change(event) {
      this.$forceUpdate();
      this.form.project_type = this.project_typeE;
    },
    handleSuccess(response, file, fileList) {
      //console.log(response.data);
      this.form.application_file = response.data;
    },
    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    handlePreview(file) {
      //console.log(file.name);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    confirmProject: function (id) {
      axios({
        method: "post",
        url: "/user/confirm",
        data: {
          applicationId: id,
          state: this.value,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.load();
    },
    submitApplication: function (id) {
      axios({
        method: "get",
        url: "/user/submitApplicationDemo?applicationId=" + id,
        data: {},
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.load();
    },
    confirmSubmit: function (id) {
      this.$confirm("您确定要提交项目编号为" + id + "的项目吗？", "确认信息", {
        distinguishCancelAndClose: true,
        type: "success",
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then(() => {
          this.submitApplication(id);
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
        .then((res) => {
          this.$message({
            type: "info",
            message: "进行删除",
          });
          this.deleteApplication(id);
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
            this.$message({
              message: "成功",
              type: "success",
            });
          } else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.load();
    },
    download: function (url) {
      Download(url);
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
            row.rejectReason = res.data.data.rejectReason;
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
      (this.ExecuteInfo = ""),
        (this.summary = ""),
        axios({
          url: "/user/applicationList",
          method: "get",
        })
          .then((res) => {
            if (res.data.code === 200) {
              this.projectList = res.data.data;
            } else this.projectList = res.data.code;
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