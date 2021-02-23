<template>
  <div class="color-6">
    <div class="p-b-five">{{ this.role === 1 ? "我的聊天框" : "她/他的聊天框" }}</div>
    <div class="flex-box">
      <div class="upload-header rel">
        <input
          @change="changeHandle"
          class="abs width-100 height-100 upload-input"
          type="file"
        />
        <img
          :src="url"
          class="upload-header-img abs width-100 height-100"
          v-show="url"
        />
        <div
          class="upload-tips text-center abs width-100 height-100"
          v-show="!url"
        >
          <i class="el-icon-upload"></i>
        </div>
      </div>

      <div class="flex-box p-l-ten">
        <div class="font-14">聊天内容:</div>
        <div class="area-wrap p-l-five">
          <el-input
            laceholder="请输入内容"
            style="height: 82px;"
            type="textarea"
            v-model="desc"
          ></el-input>
        </div>
      </div>
    </div>
    <div>
      <el-button
        @click="addContent"
        class="m-t-five"
        type="primary"
      >生成信息</el-button>
      <el-button
        @click="clearContent"
        class="m-t-five"
      >清空聊天框</el-button>
    </div>
    <div class="p-t-ten">
      <div class="font-14">转账设置：</div>
      <div>
        <el-input
          placeholder="请输入转账金额"
          style="width: 100px;"
          v-model="money"
        ></el-input>
        <span class="p-l-five">元</span>
        <span class="p-l-ten">
          <el-button
            @click="addTransferAccounts(1, 'receive')"
            class="m-t-five"
            type="primary"
          >已领取转账</el-button>
          <el-button
            @click="addTransferAccounts(1, 'send')"
            class="m-t-five"
            type="primary"
          >已被领取转账</el-button>
          <el-button
            @click="addTransferAccounts(2, 'send')"
            class="m-t-five"
            type="primary"
          >未领取转账</el-button>
        </span>
      </div>
    </div>
    <div class="p-t-ten">
      <div class="font-14">红包设置：</div>
      <el-input
        placeholder="请输入转账金额"
        style="width: 100px;"
        v-model="redPaketMoney"
      ></el-input>
      <span class="p-l-five">元</span>
      <span class="p-l-ten">
        <el-button
          @click="addTransferAccounts(1, 'receive')"
          class="m-t-five"
          type="primary"
        >已领取转账</el-button>
        <el-button
          @click="addTransferAccounts(1, 'send')"
          class="m-t-five"
          type="primary"
        >已被领取转账</el-button>
        <el-button
          @click="addTransferAccounts(2, 'send')"
          class="m-t-five"
          type="primary"
        >未领取转账</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    role: Number,
    default() {
      return 1;
    },
  },
  data() {
    return {
      url: '',
      desc: '',
      money: '',
      redPaketMoney: '',
    };
  },
  methods: {
    clearContent() {
      this.url = this.desc = '';
    },
    addTransferAccounts(type, receipted) {
      if (!this.url) {
        this.$message({
          message: '请上传头像',
          type: 'warning',
        });
        return;
      } else if (!this.money) {
        this.$message({
          message: '请输入金额',
          type: 'warning',
        });

        return;
      }

      this.$emit('add-content', {
        header: this.url,
        type,
        role: this.role,
        receipted,
        money: Number(this.money).toFixed(2),
      });
    },
    addContent() {
      if (!this.url) {
        this.$message({
          message: '请上传头像',
          type: 'warning',
        });
        return;
      } else if (!this.desc) {
        this.$message({
          message: '请输入内容',
          type: 'warning',
        });
        return;
      }

      this.$emit('add-content', {
        header: this.url,
        desc: this.desc,
        role: this.role,
        type: 0,
      });

      // this.desc = "";
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
    },
  },
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
