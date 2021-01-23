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
      <el-form ref="form" :model="form">
        <el-form-item
          label="序号"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block1"
        >
          <el-col :span="12">
            <el-input v-model="form.block1"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="项目单位"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block2"
        >
          <el-col :span="12">
            <el-input v-model="form.block2"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="项目名称"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block3"
        >
          <el-col :span="12">
            <el-input v-model="form.block3"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="项目起止时间"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block4"
        >
          <el-col :span="12">
            <el-input v-model="form.block4"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="项目类别" label-width="10%" id="el-form-item01">
          <el-radio-group v-model="form.resource">
            <el-radio label="A.新药物临床实验" class="apply_program_programClass" style="height:20px"></el-radio>
            <el-radio label="B.新器械临床实验" class="apply_program_programClass" style="height:20px"></el-radio>
            <el-radio label="C.新技术应用" class="apply_program_programClass" style="height:20px"></el-radio>
            <el-radio label="D.人体标本收集" class="apply_program_programClass" style="height:20px"></el-radio>
            <br />
            <el-radio
              label="E.其他（请注明）："
              class="apply_program_programClass"
              id="apply_program_programId05"
              style="height:20px"
            ></el-radio>
            <el-col :span="10">
              <el-input v-model="form.block5" id="apply_program_programInput"></el-input>
            </el-col>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="姓名"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block6"
        >
          <el-col :span="12">
            <el-input v-model="form.block6"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="性别"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block7"
        >
          <el-col :span="12">
            <el-input v-model="form.block7"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="学历"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block8"
        >
          <el-col :span="12">
            <el-input v-model="form.block8"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="科室"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block9"
        >
          <el-col :span="12">
            <el-input v-model="form.block9"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="办公电话"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block10"
        >
          <el-col :span="12">
            <el-input v-model="form.block10"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="传真"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block11"
        >
          <el-col :span="12">
            <el-input v-model="form.block11"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="电话"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block12"
        >
          <el-col :span="12">
            <el-input v-model="form.block12"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="电子邮箱"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block13"
        >
          <el-col :span="12">
            <el-input v-model="form.block13"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="目前主要研究方向"
          label-width="20%"
          class="apply_program_input01"
          id="apply_program_block14"
        >
          <el-col :span="20">
            <el-input v-model="form.block14"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="经费来源" label-width="10%">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="政府" name="type" class="apply_program_moneyFromClass"></el-checkbox>
            <el-checkbox label="基金会" name="type" class="apply_program_moneyFromClass"></el-checkbox>
            <el-checkbox label="国际组织" name="type" class="apply_program_moneyFromClass"></el-checkbox>
            <el-checkbox label="其他" name="type" class="apply_program_moneyFromClass"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          label="研究内容摘要："
          prop="desc"
          label-width="30%"
          class="apply_program_input01"
          id="apply_program_block15"
        >
          <el-input type="textarea" v-model="form.block15"></el-input>
        </el-form-item>
        <el-form-item
          label="申请人（项目负责人）承诺："
          prop="desc"
          label-width="30%"
          class="apply_program_input01"
          id="apply_program_block16"
        >
          <el-input type="textarea" v-model="form.block16"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain id="apply_program_button02" @click="clickEvent02">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply_program",
  data() {
    return {
      form: {
        block1: "",
        block2: "",
        block3: "",
        block4: "",
        block5: "",
        block6: "",
        block7: "",
        block8: "",
        block9: "",
        block10: "",
        block11: "",
        block12: "",
        block13: "",
        block14: "",
        block15: "",
        block16: "",
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
        clickEvent02: function() {
      var temp = document.getElementById("apply_program_first");
      temp.style.display = "inline";
      temp = document.getElementById("apply_program_next");
      temp.style.display = "none";
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

<style>
#apply_program_next {
  position: absolute;
  top: 5%;
  left: 25%;
  width: 50%;
  height: 150%;
}
.apply_program_input01 {
  position: relative;
  left: 20%;
  width: 80%;
}
#apply_program_programInput {
  position: relative;
  top: 20px;
  left: 90%;
  width: 100%;
  height: 30px;
  margin-top: -10%;
}
#apply_program_programId05 {
  position: relative;
  top: 20px;
  height: 20px;
  left: -45%;
}
.apply_program_input01 {
  position: relative;
  margin-top: 3%;
}
#el-form-item01 {
  position: relative;
  margin-top: 3%;
}
#apply_program_block6 {
  position: relative;
  margin-top: 5%;
}
#apply_program_block14 {
  position: relative;
  left: 10%;
}
.apply_program_moneyFromClass {
  width: 12%;
  position: relative;
  left: -8%;
}
#apply_program_block15 {
  position: relative;
  left: 0%;
}
#apply_program_block16 {
  position: relative;
  left: 0%;
}
#apply_program_button02 {
  position: relative;
  top: 1%;
}
</style>