<template>
  <div class="home">
    <button @click="screenShot">点击截屏</button>
    <div class="screent-wrap">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
      <div ref="imageWrap"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    screenShot() {
      html2canvas(document.querySelector(".screent-wrap")).then(canvas => {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.imageWrap.appendChild(canvas);
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.screent-wrap {
  width: 750px;
  height: 1000px;
  margin: 0 auto;
  background: red;
}
</style>
