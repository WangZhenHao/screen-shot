<!--
 * @Descriptions: 
 * @Autho: WangZhenHao
 * @Date: 2020-12-28 17:19:44
 * @LastEditTime: 2020-12-28 18:49:27
-->
<template>
  <div class="wechat-title flex-box items-center justify-s-b">
    <div class="wechat-title__left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="wechat-title__middle">{{ title }}</div>
    <div class="wechat-title__right">
      <i class="iconfont icon-more"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.wechat-title {
  height: 88px;
  line-height: 88px;
  font-size: 34px;
  // padding: 0 40px;
  .icon-fanhui {
    font-size: 44px;
    font-weight: 600;
  }
  &__left {
    margin-left: 25px;
  }
  &__right {
    margin-right: 36px;
  }
  .icon-more {
    font-size: 44px;
  }
  border-bottom: 2px solid #e1e1e1;
}
</style>
