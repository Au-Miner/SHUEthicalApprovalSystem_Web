<template>
  <!-- <p style="color: red; left:25px; position:absolute;">项目申请</p> -->
  <div>
    <div class="apply_program_class" id="apply_program_first">
      <div class="apply_program_class2" id="apply_program_name01">申请须知</div>
      <div class="apply_program_class1" id="apply_program_name02">说明:</div>
      <div class="apply_program_class1" id="apply_program_name03">
        1、 本部伦理审查所有环节均不收取任何费用
      </div>
      <div class="apply_program_class1" id="apply_program_name04">
        2、 本部伦理审查范围：
      </div>
      <div class="apply_program_class1" id="apply_program_name05">
        (1) 拟开展的动物实验项目（项目申报阶段）;
      </div>
      <div class="apply_program_class1" id="apply_program_name06">
        (2) 在本单位实验动物楼开展的动物实验项目（以本部代养协议为准）。
      </div>
      <div class="apply_program_class1" id="apply_program_name07">
        3、
        完成整个审查流程一般需要10个工作日，如信息不完整或申请表填写问题较多时，审查时间将会延长，因此请申请人务必按要求认真准备
      </div>
      <div class="apply_program_class1" id="apply_program_name08">
        申请材料，如有问题请及时邮件沟通。
      </div>
      <div class="apply_program_class1" id="apply_program_name09">
        4、 附件要求：
      </div>
      <div class="apply_program_class1" id="apply_program_name10">
        （1） 拟开展的动物实验项目（项目申报阶段）：按申请表内容提供有关附件；
      </div>
      <div class="apply_program_class1" id="apply_program_name11">
        （2）
        已经在本部实施的动物实验项目：除申请表所述附件外，还需提供所使用动物的有效质量合格证、本部有效代养协议、本部实验服务
      </div>
      <div class="apply_program_class1" id="apply_program_name12">
        结算依据和明细、以及对应的付款通知和发票/校内转账凭证等；
      </div>
      <div class="apply_program_class1" id="apply_program_name13">
        （3） 根据审查意见提供其他有关材料；
      </div>
      <div class="apply_program_class1" id="apply_program_name14">
        （4）
        为确保审查效率，附件请以原件或清晰的照片打印件、扫描打印件、复印件的方式提供，以原件形式提交的附件经审核后将退还申请
      </div>
      <div class="apply_program_class1" id="apply_program_name15">人。</div>
      <div class="apply_program_class2" id="apply_program_name16">
        /*以上为互联网内容，仅作为内容填充*/
      </div>
      <el-button
        type="primary"
        plain
        id="apply_program_button01"
        @click="clickEvent01"
        >同意</el-button
      >
    </div>

    <div id="apply_program_next" style="display: none">
      <el-form ref="form" :model="form">
        <el-row>
          <el-form-item
            label="项目附件"
            label-width="150"
            class="apply"
          >
            <el-col :span="1">
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
              </el-upload>
            </el-col>
            <el-col :span="6">
              <div>
                  只能上传rar,zip,7z格式的文件
                </div>
            </el-col>
          </el-form-item>
        </el-row>

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
          <el-form-item label="电子邮箱" class="apply" id="apply_program_email">
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

      <el-button type="primary" plain id="apply_submit" @click="Submit"
        >提交申请</el-button
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "apply_program",
  watch:{
      Watch_project_type(val){
        switch(val) {
          case 'A.新药物临床实验':
            this.form.project_type='新药物临床实验';
            this.disable_type_input=true;
            this.project_typeE="";
            break;
          case 'B.新器械临床实验':
            this.form.project_type='新器械临床实验';
            this.disable_type_input=true;
            this.project_typeE="";
            break;
          case 'C.新技术应用':
            this.form.project_type='新技术应用';
            this.disable_type_input=true;
            this.project_typeE="";
            break;
          case 'D.人体标本收集':
            this.form.project_type='人体标本收集';
            this.disable_type_input=true;
            this.project_typeE="";
            break;
          case 'E.其他（请注明）':
            this.form.project_type=this.project_typeE;
            this.disable_type_input=false;
            break;
} 
      }
  },
  computed: {
    headers() {
      return {
        Authorization: localStorage.getItem("token"),
      }
    },
    Watch_project_type(){
      return this.watch_project_type;
      }
  },
  data() {
    return {
      fileList: [],
      disable_type_input:true,
      project_typeE:"",
      watch_project_type:"",
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
        type: 0,//这个是funding source但我不知道为什么被命名为type了，请千万注意！！！
        temp: [],
        project_type: "",
        desc: "",
        application_file:""
      },
    };
  },
  methods: {
    change(event) {
      this.$forceUpdate();
      this.form.project_type=this.project_typeE;
    },
    saveInfo(){
      localStorage.setItem("email", this.form.email);
      localStorage.setItem("fax",this.form.fax); 
      localStorage.setItem("id", this.form.id);
      localStorage.setItem("institution", this.form.institution);
      localStorage.setItem("name", this.form.name);
      localStorage.setItem("office_phone", this.form.office_phone);
      localStorage.setItem("phone",this.form.phone); 
    },
    handleSuccess(response, file, fileList) {
      //console.log(response.data);
      this.form.application_file=response.data;
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
    clickEvent01: function () {
      var temp = document.getElementById("apply_program_first");
      temp.style.display = "none";
      temp = document.getElementById("apply_program_next");
      temp.style.display = "inline";
    },
    onSubmit() {
      console.log("submit!");
    },
    Submit: function () {
      this.saveInfo();
      if(this.form.application_file==""){
        this.$message.error("您忘记上传文件了!");
        return;
      }
      axios({
        method: "post",
        url: "/user/createApplicationForProjectDemo",
        data: {
          application_file: this.form.application_file,
          application_type: 0,
          email: this.form.email,
          fax: this.form.fax,
          funding_source: this.form.type,
          id: 0,
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
      .then(res => {
          if (res.data.code == 200) {
            this.saveInfo();
            this.$message({
          message: '成功，请在我的申请中提交项目',
          type: 'success'
        });
            this.$router.replace("/backstage/myapplications").catch((err) => {err;});
          }else this.$message.error(res.data.message);
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    fundingSource: function (choice) {
      this.form.type = choice;
    },
  },
};
</script>

<style>
.apply_program_class {
  position: relative;
  top: 5%;
  width: 80%;
  left: 10%;
  font-size: 150%;
  font-weight: bold;
}
.apply_program_class1 {
  position: relative;
  top: 100px;
  text-align: left;
}
.apply_program_class2 {
  position: relative;
  top: 100px;
  text-align: center;
}
#apply_program_button01 {
  position: relative;
  margin-top: 10%;
}
</style>  
