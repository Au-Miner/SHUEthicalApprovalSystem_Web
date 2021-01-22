<template>
  <div>
    <template>
      <el-table
        :data="memberlist.data"
        style="width: 95%;height: 100%;"
        id="list"
      >
        <el-table-column width="150" fixed prop="name" label="姓名">
        </el-table-column>
        <el-table-column width="150" fixed prop="userId" label="用户Id">
        </el-table-column>
        <el-table-column width="200" prop="gender" label="性别">
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
        <el-table-column width="150" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      memberlist: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
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
        .catch(() => {
          console.log("error occur");
        });
    },
  },
};
</script>
<style scoped>
#list{
  left:25px;
  top: 25px;
}
</style>