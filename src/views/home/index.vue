<template>
  <div class="home">
    <!-- <el-button :loading="loading" type="primary" @click="screenShot"
      >点击截屏</el-button
    > -->
    <div class="flex-box">
      <wechart ref="wechart"></wechart>
      <div class="home-right">
        <dialog-plate></dialog-plate>
        <el-button :loading="loading" type="primary" @click="screenShot"
          >点击截屏</el-button
        >
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
      loading: false
    };
  },
  methods: {
    close() {
      this.dialogVisible = false;
      setTimeout(() => {
        this.$refs.imageWrap.innerHTML = "";
      }, 1000);
    },
    screenShot() {
      const newNode = this.cloneNode(this.$refs.wechart.wechatWrap);

      this.loading = true;
      html2canvas(newNode, {
        allowTaint: true
      }).then(canvas => {
        this.dialogVisible = true;
        this.loading = false;

        document.body.removeChild(newNode);

        this.$nextTick(() => {
          this.$refs.imageWrap.appendChild(canvas);
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
