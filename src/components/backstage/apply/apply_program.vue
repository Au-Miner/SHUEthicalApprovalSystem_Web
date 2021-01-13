<template>
  <!-- <p style="color: red; left:25px; position:absolute;">项目申请</p> -->
  <div>
    <div class="apply_program_class" id="apply_program_first">
      <div class="apply_program_class2" id="apply_program_name01">申请须知</div>
      <div class="apply_program_class1" id="apply_program_name02">说明:</div>
      <div class="apply_program_class1" id="apply_program_name03">1、 本部伦理审查所有环节均不收取任何费用</div>
      <div class="apply_program_class1" id="apply_program_name04">2、 本部伦理审查范围：</div>
      <div class="apply_program_class1" id="apply_program_name05">(1) 拟开展的动物实验项目（项目申报阶段）;</div>
      <div class="apply_program_class1" id="apply_program_name06">(2) 在本单位实验动物楼开展的动物实验项目（以本部代养协议为准）。</div>
      <div
        class="apply_program_class1"
        id="apply_program_name07"
      >3、 完成整个审查流程一般需要10个工作日，如信息不完整或申请表填写问题较多时，审查时间将会延长，因此请申请人务必按要求认真准备</div>
      <div class="apply_program_class1" id="apply_program_name08">申请材料，如有问题请及时邮件沟通。</div>
      <div class="apply_program_class1" id="apply_program_name09">4、 附件要求：</div>
      <div
        class="apply_program_class1"
        id="apply_program_name10"
      >（1） 拟开展的动物实验项目（项目申报阶段）：按申请表内容提供有关附件；</div>
      <div
        class="apply_program_class1"
        id="apply_program_name11"
      >（2） 已经在本部实施的动物实验项目：除申请表所述附件外，还需提供所使用动物的有效质量合格证、本部有效代养协议、本部实验服务</div>
      <div class="apply_program_class1" id="apply_program_name12">结算依据和明细、以及对应的付款通知和发票/校内转账凭证等；</div>
      <div class="apply_program_class1" id="apply_program_name13">（3） 根据审查意见提供其他有关材料；</div>
      <div
        class="apply_program_class1"
        id="apply_program_name14"
      >（4） 为确保审查效率，附件请以原件或清晰的照片打印件、扫描打印件、复印件的方式提供，以原件形式提交的附件经审核后将退还申请</div>
      <div class="apply_program_class1" id="apply_program_name15">人。</div>
      <div class="apply_program_class2" id="apply_program_name16">/*以上为互联网内容，仅作为内容填充*/</div>
      <el-button type="primary" plain id="apply_program_button01" @click="clickEvent01">同意</el-button>
    </div>

    <div id="apply_program_next" style="display:none">
      <!-- label-width="auto" -->
      <!-- label-position="left" -->
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="序号" label-width="20%" class="apply_program_input01">
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="项目单位" label-width="20%" class="apply_program_input01">
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="项目名称" label-width="20%" class="apply_program_input01">
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="项目起止时间" label-width="20%" class="apply_program_input01">
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="项目类别" label-width="10%">
          <el-radio-group v-model="form.resource">
            <el-radio label="A.新药物临床实验" class="apply_program_programClass"></el-radio>
            <el-radio label="B.新器械临床实验" class="apply_program_programClass"></el-radio>
            <el-radio label="C.新技术应用" class="apply_program_programClass"></el-radio>
            <el-radio label="D.人体标本收集" class="apply_program_programClass"></el-radio>
            <br />
            <el-radio
              label="E.其他（请注明）："
              class="apply_program_programClass"
              id="apply_program_programId05"
            ></el-radio>
            <el-col :span="10">
              <el-input v-model="form.name" id="apply_program_programInput"></el-input>
            </el-col>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="9">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="9">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>

        <el-form-item label="活动形式">
          <el-col :span="20">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply_program",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    clickEvent01: function() {
      var temp = document.getElementById("apply_program_first");
      temp.style.display = "none";
      temp = document.getElementById("apply_program_next");
      temp.style.display = "inline";
    },
    onSubmit() {
      console.log("submit!");
    }
  }
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
  text-align: left;
}
.apply_program_class2 {
  text-align: center;
}
#apply_program_button01 {
  position: relative;
  margin-top: 4%;
}
</style>  

<style>
#apply_program_next {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 80%;
  height: 80%;
}
.apply_program_input01 {
  float: left;
  width: 50%;
}
.el-form-item__label {
  float: left;
  text-align: center;
}
.apply_program_programClass {
  height: 45px;
}
#apply_program_programInput {
  position: relative;
  left: 90%;
  width: 100%;
  height: 30px;
  margin-top: -10%;
}
#apply_program_programId05 {
  position: relative;
  left: -45%;
}
</style>