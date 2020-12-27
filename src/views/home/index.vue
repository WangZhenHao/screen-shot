<template>
  <div class="home">
    <div class="flex-box">
      <wechart :list="list" ref="wechart"></wechart>
      <div class="home-right p-l-ten">
        <dialog-plate :role="1" @add-content="addContentHandel"></dialog-plate>
        <dialog-plate
          class="p-t-ten"
          :role="0"
          @add-content="addContentHandel"
        ></dialog-plate>
        <div class="p-t-ten">
          <el-button :loading="loading" type="success" @click="screenShot"
            >生成截屏</el-button
          >
          <el-button @click="clearAll">清空截屏信息</el-button>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
      <div ref="imageWrap"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import dialogPlate from "./components/dialoguePlate.vue";
import wechart from "./components/wechact.vue";

export default {
  name: "Home",
  components: {
    wechart,
    dialogPlate
  },
  data: function() {
    return {
      dialogVisible: false,
      loading: false,
      list: []
    };
  },
  methods: {
    addContentHandel(e) {
      this.list.push(e);
    },
    close() {
      this.dialogVisible = false;
      setTimeout(() => {
        this.$refs.imageWrap.innerHTML = "";
      }, 500);
    },
    clearAll() {
      this.list = [];
    },
    screenShot() {
      if (!this.list.length) {
        this.$message({
          message: "请先输入内容",
          type: "warning"
        });
        return;
      }
      const newNode = this.cloneNode(this.$refs.wechart.wechatWrap);

      this.loading = true;
      html2canvas(newNode, {
        allowTaint: true
      }).then(canvas => {
        this.dialogVisible = true;
        this.loading = false;

        this.$nextTick(() => {
          this.$refs.imageWrap.appendChild(canvas);
          document.body.removeChild(newNode);
        });
      });
    },
    cloneNode(node) {
      const newNode = node.cloneNode(true);
      newNode.style.height = node.scrollHeight + "px";
      newNode.style.position = "fixed";
      newNode.style.left = 9999 + "px";
      newNode.style.transform = "unset";
      document.body.appendChild(newNode);

      return newNode;
    }
  }
};
</script>
<style lang="scss" scoped></style>
