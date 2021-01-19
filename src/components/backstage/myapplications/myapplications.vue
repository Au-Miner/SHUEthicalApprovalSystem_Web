<template>
  <div>
    <template>
      <el-table
        :data="information.userApplicationList"
        style="width: 95%;height: 100%;"
      >
        <el-table-column width="150" fixed prop="id" label="项目编号">
        </el-table-column>
        <el-table-column width="200" prop="ordernum" label="ordernum">
        </el-table-column>
        <el-table-column width="200" fixed prop="name" label="项目名称">
        </el-table-column>
        <el-table-column width="200" prop="userId" label="用户Id">
        </el-table-column>
        <el-table-column width="200" prop="creationTime" label="创建时间">
        </el-table-column>
        <el-table-column width="200" prop="beginTime" label="开始时间">
        </el-table-column>
        <el-table-column width="200" prop="type" label="类型">
        </el-table-column>
        <el-table-column width="200" prop="status" label="状态">
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
        .catch(() => {
          console.log("error occur");
        });
    },
  },
};
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>