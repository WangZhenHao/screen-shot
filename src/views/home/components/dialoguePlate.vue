<template>
  <div class="color-6">
    <div class="p-b-five">
      {{ this.role === 1 ? "我的聊天框" : "她/他的聊天框" }}
    </div>
    <div class="flex-box">
      <div class="upload-header rel">
        <input
          @change="changeHandle"
          class="abs width-100 height-100 upload-input"
          type="file"
        />
        <img
          class="upload-header-img abs width-100 height-100"
          v-show="url"
          :src="url"
        />
        <div
          v-show="!url"
          class="upload-tips text-center abs width-100 height-100"
        >
          <i class="el-icon-upload"></i>
        </div>
      </div>

      <div class="flex-box p-l-ten">
        <div class="font-14">聊天内容:</div>
        <div class="area-wrap p-l-five">
          <el-input
            type="textarea"
            laceholder="请输入内容"
            v-model="desc"
            style="height: 82px;"
          ></el-input>
        </div>
      </div>
    </div>
    <div>
      <el-button class="m-t-five" type="primary" @click="addContent"
        >生成信息</el-button
      >
      <el-button class="m-t-five" @click="clearContent">清空聊天框</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    role: Number,
    default() {
      return 1;
    }
  },
  data() {
    return {
      url: "",
      desc: ""
    };
  },
  methods: {
    clearContent() {
      this.url = this.desc = "";
    },
    addContent() {
      if (!this.url) {
        this.$message({
          message: "请上传头像",
          type: "warning"
        });
        return;
      } else if (!this.desc) {
        this.$message({
          message: "请输入内容",
          type: "warning"
        });
        return;
      }

      this.$emit("add-content", {
        header: this.url,
        desc: this.desc,
        role: this.role
      });

      this.desc = "";
    },
    changeHandle(e) {
      const url = this.getObjectURL(e.target.files[0]);
      this.url = url;
    },
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }
  }
};
</script>
<style lang="scss" scoped>
.upload-header {
  width: 82px;
  height: 82px;
  .upload-input {
    opacity: 0;
    z-index: 2;
  }
  .upload-header-img {
    z-index: 1;
  }
  .upload-tips {
    z-index: 1;
    line-height: 82px;
    background: #f7f7f7;
    font-size: 30px;
  }
}
.area-wrap {
  width: 250px;
  height: 40px;
  // & > input {
  //   font-size: 14px;
  //   border: 1px solid #eee;
  //   border-radius: 8px;
  //   outline: none;

  // }
  ::v-deep .el-textarea__inner {
    height: 100%;
  }
}
</style>
