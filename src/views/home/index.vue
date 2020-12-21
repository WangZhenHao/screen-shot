<template>
  <div class="home">
    <button @click="screenShot">点击截屏</button>
    <wechart ref="wechart"></wechart>

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
import wechart from "./components/wechact.vue";

export default {
  name: "Home",
  components: {
    wechart
  },
  data: function() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    screenShot() {
      // let wrap = document.querySelector(".screent-wrap");
      // const x = wrap.offsetLeft;
      // const y = wrap.offsetTop;
      // console.log(x, y);
      console.log(this.$refs.wechart);
      html2canvas(this.$refs.wechart.$el, {}).then(canvas => {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.imageWrap.appendChild(canvas);
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
