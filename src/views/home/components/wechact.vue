<template>
  <div ref="wechat" class="rel wechat">
    <div ref="wechatWrap" class="wechat-wrap">
      <phone-nav-bar></phone-nav-bar>
      <wechat-title :title="title"></wechat-title>
      <div class="wechat-content">
        <template v-for="(item, index) in contentList">
          <div
            :key="index"
            v-if="item.role === 1"
            class="flex-box wechat-list right justify-end rel"
          >
            <div class="right-desc bg-f rel">
              <div class="right-triangle"></div>
              <div
                data-html2canvas-ignore
                class="content-options right-options"
              >
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
      </div>
      <wechat-footer></wechat-footer>
    </div>
  </div>
</template>
<script>
import phoneNavBar from "./phoneNavBar";
import wechatTitle from "./wechatTitle";
import wechatFooter from "./wechatFooter";

export default {
  components: {
    wechatTitle,
    wechatFooter,
    phoneNavBar
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String
    }
  },
  watch: {
    list: {
      handler(newVal) {
        this.contentList = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      contentList: []
    };
  },
  mounted() {
    this.wechat = this.$refs.wechat;
    this.wechatWrap = this.$refs.wechatWrap;
  },
  methods: {
    delContent(index) {
      this.contentList.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.wechat {
  width: 375px;
  height: 100vh;
  max-height: 667px;
  min-height: 667px;
}
.wechat-wrap {
  position: absolute;
  left: calc(-750px / 2 / 2);
  top: calc(-100% / 2);
  width: 750px;
  font-size: 28px;
  background: #ebebeb;
  height: calc(100% * 2);
  overflow: auto;
  transform: scale(0.5);
  color: #000;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .wechat-content {
    padding: 26px 25px 0;
    // margin-top: 26px;
    min-height: calc(100% - 112px - 88px - 40px);
  }
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
