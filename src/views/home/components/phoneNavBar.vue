<!--
 * @Descriptions:   
 * @Autho: WangZhenHao
 * @Date: 2020-12-29 10:47:10
 * @LastEditTime: 2021-02-23 14:19:20
-->
<template>
  <div class="nav-bar flex-box items-center justify-s-b">
    <div class="nav-bar__left flex-box items-center">
      <img
        class="sigan m-l-12"
        src="@/assets/image/home/icon/signal5.png"
      />
      <span class="font-22 m-l-12">中国电信</span>
      <img
        class="wifi m-l-12"
        src="@/assets/image/home/icon/nw-wifi.png"
      />
    </div>
    <div class="nav-bar__middle text-center">10:59</div>
    <div class="nav-bar__right flex-box items-center justify-end">
      <img
        class="rotate m-l-12"
        src="@/assets/image/home/icon/i-top-dir.png"
      />
      <span class="font-24 m-l-12">50%</span>
      <div class="electric rel">
        <span class="electric-proress abs">
          <i></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 40px;
  line-height: 40px;
  .nav-bar__right {
    font-size: 24px;
    text-align: right;
    .electric {
      display: inline-block;
      width: 70px;
      height: 100%;
      background: url(../../../assets/image/home/icon/i-top-berry1.png)
        no-repeat;
    }
    .electric-proress {
      height: 15px;
      width: 41px;
      bottom: 12px;
      left: 12px;
      & > i {
        display: block;
        background: #333;
        width: 50%;
        height: 100%;
      }
    }
  }
  .font-22 {
    font-size: 22px;
  }
  .font-24 {
    font-size: 24px;
  }
  .nav-bar__right,
  .nav-bar__left {
    width: 33%;
    height: 100%;
  }
  .m-l-12 {
    margin-left: 12px;
  }
  .wifi {
    width: 30px;
    height: 20px;
  }
  .sigan {
    width: 33px;
    height: 20px;
  }
  .rotate {
    width: 30px;
    // width: ;
  }
}
</style>
