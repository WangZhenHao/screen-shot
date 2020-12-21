<template>
  <div class="wechat-wrap">
    <div class="flex-box wechat-list right justify-end rel">
      <div class="right-desc bg-f rel">
        <div class="right-triangle"></div>
        <div>傻亮</div>
      </div>
      <img class="right-header" src="@/assets/image/home/me.jpg" />
    </div>
    <div class="flex-box wechat-list left rel">
      <img class="left-header" src="@/assets/image/home/you.jpg" />
      <div class="left-desc bg-f rel">
        <div class="left-triangle"></div>
        <div>在，找我有什么事呢</div>
      </div>
    </div>
    <div class="flex-box wechat-list right justify-end rel">
      <div class="right-desc bg-f rel">
        <div class="right-triangle"></div>
        <div>你是真的傻</div>
      </div>
      <img class="right-header" src="@/assets/image/home/me.jpg" />
    </div>
    <div class="flex-box wechat-list left rel">
      <img class="left-header" src="@/assets/image/home/you.jpg" />
      <div class="left-desc bg-f rel">
        <div class="left-triangle"></div>
        <div>嗯嗯，不要和其他人说哦!</div>
      </div>
    </div>
    <div class="flex-box wechat-list left rel">
      <img class="left-header" src="@/assets/image/home/you.jpg" />
      <div class="left-desc bg-f rel">
        <div class="left-triangle"></div>
        <div>眼圈都黑，转了5k给一个妹子，裸聊不成，反而被骗了</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wechat-wrap {
  width: 750px;
  height: auto;
  font-size: 28px;
  background: #ebebeb;
  padding: 26px 25px;
  // transform: scale(0.5);
  color: #000;
  .wechat-list {
    margin-bottom: 26px;
  }
  .left-header,
  .right-header {
    height: 82px;
    width: 82px;
    border-radius: 10px;
  }
  .left-desc,
  .right-desc {
    margin-left: 18px;
    padding: 20px;
    border-radius: 10px;
    font-size: 28px;
    max-width: 552px;
    // &::after {
    //   position: absolute;
    //   width: 24px;
    //   height: 24px;
    //   background: url(../images/rec-txt-bg.png) 1px -31px no-repeat;
    //   left: -24px;
    //   top: 27px;
    // }
  }
  .left-triangle {
    position: absolute;
    left: -25px;
    top: 27px;
    width: 24px;
    height: 24px;
    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-style: solid;
      border-width: 10px 10px 10px 10px;
      border-color: transparent #fff transparent transparent;
    }
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      left: 14px;
      border-radius: 100%;
      background: #fff;
    }
  }
  .right {
    .right-desc {
      margin-right: 18px;
      margin-left: 0px;
      background: #95ec69;
    }
  }
  .right-triangle {
    position: absolute;
    right: -24px;
    top: 27px;
    width: 24px;
    height: 24px;
    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-style: solid;
      border-width: 10px 10px 10px 10px;
      border-color: transparent transparent transparent#95ec69;
    }
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      left: 3px;
      border-radius: 100%;
      background: #95ec69;
    }
  }
}
</style>
