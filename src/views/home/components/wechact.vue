<template>
  <div ref="wechart" class="rel wechart">
    <div ref="wechatWrap" class="wechat-wrap">
      <div class="wechart-title"></div>
      <template v-for="(item, index) in contentList">
        <div
          :key="index"
          v-if="item.role === 1"
          class="flex-box wechat-list right justify-end rel"
        >
          <div class="right-desc bg-f rel">
            <div class="right-triangle"></div>
            <div data-html2canvas-ignore class="content-options right-options">
              <i @click="delContent(index)" class="el-icon-delete"></i>
            </div>
            <div>{{ item.desc }}</div>
          </div>
          <img class="right-header" :src="item.header" />
        </div>
        <div
          :key="index"
          v-else-if="item.role === 0"
          class="flex-box wechat-list left rel"
        >
          <img class="left-header" :src="item.header" />
          <div class="left-desc bg-f rel">
            <div class="left-triangle"></div>
            <div data-html2canvas-ignore class="content-options left-options">
              <i @click="delContent(index)" class="el-icon-delete"></i>
            </div>
            <div>
              {{ item.desc }}
            </div>
          </div>
        </div>
      </template>
      <div class="wechart-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    list: {
      handler(newVal) {
        this.contentList = newVal;
      },
      deep: true
    }
  },
  data() {
    return {
      contentList: []
    };
  },
  mounted() {
    this.wechart = this.$refs.wechart;
    this.wechatWrap = this.$refs.wechatWrap;
  },
  methods: {
    delContent(index) {
      this.contentList.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.wechart {
  width: 375px;
  height: 100vh;
  max-height: 667px;
}
.wechat-wrap {
  position: absolute;
  left: calc(-750px / 2 / 2);
  top: calc(-100% / 2);
  width: 750px;
  font-size: 28px;
  background: #ebebeb;
  padding: 26px 25px;
  height: calc(100% * 2);

  overflow: auto;
  transform: scale(0.5);
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
  }

  .content-options {
    position: absolute;
    cursor: pointer;
  }
  .right-options {
    left: -54px;
  }
  .left-options {
    right: -54px;
  }
  .left-triangle {
    position: absolute;
    left: -24px;
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
    right: -23px;
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
