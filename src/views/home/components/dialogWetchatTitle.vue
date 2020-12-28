<template>
  <div class="flex-box p-t-five" placeholder="请输入对话框标题">
    <div class="color-6">对话框标题:</div>
    <el-input
      style="width: 243px;margin-left: 77px;"
      :value="value"
      @input="changeHandle"
      clearable
    ></el-input>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    changeHandle(e) {
      this.$emit("input", e);
    }
  }
};
</script>
