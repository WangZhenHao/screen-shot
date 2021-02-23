<template>
  <div
    class="rel wechat"
    ref="wechat"
  >
    <div
      class="wechat-wrap"
      ref="wechatWrap"
    >
      <phone-nav-bar></phone-nav-bar>
      <wechat-title :title="title"></wechat-title>
      <div class="wechat-content">
        <template v-for="(item, index) in contentList">
          <div
            :key="index"
            class="flex-box wechat-list left rel"
            v-if="item.type === 2 && item.role === 0"
          >
            <img
              :src="item.header"
              class="left-header"
            />
            <div class="left-desc bg-f rel receipted unreceipted">
              <div class="left-triangle"></div>
              <div
                class="content-options left-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div class="receipted-detail flex-box items-center">
                <div class="receipted-image-wrap">
                  <img
                    class="width-100 height-100"
                    src="@/assets/image/home/icon/transfer.png"
                  />
                </div>
                <div class="receipted-desc color-f">
                  <div>¥{{ item.money }}</div>
                  <div class="font-24">{{ "转账给" + title }}</div>
                </div>
              </div>
              <div class="receipt width-100 bg-f">
                <!-- {{ item.desc }} -->
                微信转账
              </div>
            </div>
          </div>
          <div
            :key="index"
            class="flex-box wechat-list right justify-end rel"
            v-else-if="item.type === 2 && item.role === 1"
          >
            <div class="right-desc bg-f rel receipted unreceipted">
              <div class="right-triangle"></div>
              <div
                class="content-options right-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div class="receipted-detail flex-box items-center">
                <div class="receipted-image-wrap">
                  <img
                    class="width-100 height-100"
                    src="@/assets/image/home/icon/transfer.png"
                  />
                </div>
                <div class="receipted-desc color-f">
                  <div>¥{{ item.money }}</div>
                  <div class="font-24">{{ "转账给" + title }}</div>
                </div>
              </div>
              <div class="receipt width-100 bg-f">
                <!-- {{ item.desc }} -->
                微信转账
              </div>
            </div>
            <img
              :src="item.header"
              class="right-header"
            />
          </div>
          <div
            :key="index"
            class="flex-box wechat-list left rel"
            v-else-if="item.type === 1 && item.role === 0"
          >
            <img
              :src="item.header"
              class="left-header"
            />
            <div class="left-desc bg-f rel receipted">
              <div class="left-triangle"></div>
              <div
                class="content-options left-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div class="receipted-detail flex-box items-center">
                <div class="receipted-image-wrap">
                  <img
                    class="width-100 height-100"
                    src="@/assets/image/home/icon/receipted.png"
                  />
                </div>
                <div class="receipted-desc color-f">
                  <div>¥{{ item.money }}</div>
                  <div class="font-24">{{ item.receipted === "send" ? "已被领取" : "已领取" }}</div>
                </div>
              </div>
              <div class="receipt width-100 bg-f">
                <!-- {{ item.desc }} -->
                微信转账
              </div>
            </div>
          </div>
          <div
            :key="index"
            class="flex-box wechat-list right justify-end rel"
            v-else-if="item.type === 1 && item.role === 1"
          >
            <div class="right-desc bg-f rel receipted">
              <div class="right-triangle"></div>
              <div
                class="content-options right-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div class="receipted-detail flex-box items-center">
                <div class="receipted-image-wrap">
                  <img
                    class="width-100 height-100"
                    src="@/assets/image/home/icon/receipted.png"
                  />
                </div>
                <div class="receipted-desc color-f">
                  <div>¥{{ item.money }}</div>
                  <div class="font-24">{{ item.receipted === "send" ? "已被领取" : "已领取" }}</div>
                </div>
              </div>
              <div class="receipt width-100 bg-f">
                <!-- {{ item.desc }} -->
                微信转账
              </div>
            </div>
            <img
              :src="item.header"
              class="right-header"
            />
          </div>
          <div
            :key="index"
            class="flex-box wechat-list right justify-end rel"
            v-else-if="item.role === 1"
          >
            <div class="right-desc bg-f rel">
              <div class="right-triangle"></div>
              <div
                class="content-options right-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div>{{ item.desc }}</div>
            </div>
            <img
              :src="item.header"
              class="right-header"
            />
          </div>
          <div
            :key="index"
            class="flex-box wechat-list left rel"
            v-else-if="item.role === 0"
          >
            <img
              :src="item.header"
              class="left-header"
            />
            <div class="left-desc bg-f rel">
              <div class="left-triangle"></div>
              <div
                class="content-options left-options"
                data-html2canvas-ignore
              >
                <i
                  @click="delContent(index)"
                  class="el-icon-delete"
                ></i>
              </div>
              <div>{{ item.desc }}</div>
            </div>
          </div>
        </template>
      </div>
      <wechat-footer></wechat-footer>
    </div>
  </div>
</template>
<script>
import phoneNavBar from './phoneNavBar';
import wechatTitle from './wechatTitle';
import wechatFooter from './wechatFooter';

export default {
  components: {
    wechatTitle,
    wechatFooter,
    phoneNavBar,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    title: {
      type: String,
    },
  },
  watch: {
    list: {
      handler(newVal) {
        this.contentList = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      contentList: [],
    };
  },
  mounted() {
    this.wechat = this.$refs.wechat;
    this.wechatWrap = this.$refs.wechatWrap;
  },
  methods: {
    delContent(index) {
      this.contentList.splice(index, 1);
    },
  },
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
  .font-24 {
    font-size: 24px;
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
      content: '';
      display: block;
      width: 5px;
      height: 5px;
      border-style: solid;
      border-width: 10px 10px 10px 10px;
      border-color: transparent #fff transparent transparent;
    }
    &::after {
      content: '';
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
  // .right {
  .right-desc {
    margin-right: 18px;
    margin-left: 0px;
    background: #95ec69;
  }
  // }
  .right-triangle {
    position: absolute;
    right: -23px;
    top: 27px;
    width: 24px;
    height: 24px;
    &::before {
      content: '';
      display: block;
      width: 5px;
      height: 5px;
      border-style: solid;
      border-width: 10px 10px 10px 10px;
      border-color: transparent transparent transparent#95ec69;
    }
    &::after {
      content: '';
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
  .receipted {
    height: 146px;
    width: 440px;
    background: #fce1c3;
    padding: 0;
    .receipted-detail {
      height: calc(100% - 38px);
    }
    .receipted-image-wrap {
      width: 65px;
      height: 65px;
      background: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      margin-left: 26px;
      margin-right: 14px;
    }
    .receipt {
      height: 38px;
      font-size: 20px;
      line-height: 38px;
      padding-left: 24px;
      color: #b2b2b2;
      border-radius: 0 0 10px 10px;
    }
  }
  .receipted .left-triangle {
    &::before {
      border-color: transparent #fce1c3 transparent transparent;
    }
    &::after {
      background: #fce1c3;
    }
  }
  .receipted .right-triangle {
    &::before {
      border-color: transparent transparent transparent#fce1c3;
    }

    &::after {
      background: #fce1c3;
    }
  }
  .unreceipted {
    background: #fa9e3b;
    .receipted-image-wrap {
      background: transparent;
    }
  }

  .unreceipted .left-triangle {
    &::before {
      border-color: transparent #fa9e3b transparent transparent;
    }
    &::after {
      background: #fa9e3b;
    }
  }
  .unreceipted .right-triangle {
    &::before {
      border-color: transparent transparent transparent#fa9e3b;
    }

    &::after {
      background: #fa9e3b;
    }
  }
}
</style>
