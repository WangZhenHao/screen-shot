<template>
  <div ref="wechart" class="rel wechart">
    <div ref="wechatWrap" class="wechat-wrap">
      <div class="wechart-title"></div>
      <template v-for="(item, index) in list">
        <div
          :key="index"
          v-if="item.role === 1"
          class="flex-box wechat-list right justify-end rel"
        >
          <div class="right-desc bg-f rel">
            <div class="right-triangle"></div>
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
        return [
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "怎么样，跟我玩？我吃屎的时候，你们还在喝奶呢！"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc:
              "告诉你，屎我天天吃，现在根本没有人放在眼里，狗都怕我。和我玩？还嫩着呢"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "回家好好吃饭，喝水去，这个世界的屎我说了算。。。"
          },

          {
            role: 1,
            header: "https://s3.ax1x.com/2020/12/21/rBBKkd.jpg",
            desc: "嗯嗯，好的，我去吃宵夜去了"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "去吧，屎都是我的，你耗子尾汁，好好反省"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "怎么样，跟我玩？我吃屎的时候，你们还在喝奶呢！"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc:
              "告诉你，屎我天天吃，现在根本没有人放在眼里，狗都怕我。和我玩？还嫩着呢"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "回家好好吃饭，喝水去，这个世界的屎我说了算。。。"
          },

          {
            role: 1,
            header: "https://s3.ax1x.com/2020/12/21/rBBKkd.jpg",
            desc: "嗯嗯，好的，我去吃宵夜去了"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "去吧，屎都是我的，你耗子尾汁，好好反省"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "怎么样，跟我玩？我吃屎的时候，你们还在喝奶呢！"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc:
              "告诉你，屎我天天吃，现在根本没有人放在眼里，狗都怕我。和我玩？还嫩着呢"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "回家好好吃饭，喝水去，这个世界的屎我说了算。。。"
          },

          {
            role: 1,
            header: "https://s3.ax1x.com/2020/12/21/rBBKkd.jpg",
            desc: "嗯嗯，好的，我去吃宵夜去了"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "去吧，屎都是我的，你耗子尾汁，好好反省"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "去吧，屎都是我的，你耗子尾汁，好好反省"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "怎么样，跟我玩？我吃屎的时候，你们还在喝奶呢！"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc:
              "告诉你，屎我天天吃，现在根本没有人放在眼里，狗都怕我。和我玩？还嫩着呢"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "回家好好吃饭，喝水去，这个世界的屎我说了算。。。"
          },

          {
            role: 1,
            header: "https://s3.ax1x.com/2020/12/21/rBBKkd.jpg",
            desc: "嗯嗯，好的，我去吃宵夜去了"
          },
          {
            role: 0,
            header: "https://s3.ax1x.com/2020/12/21/rBB1pt.jpg",
            desc: "去吧，屎都是我的，你耗子尾汁，好好反省"
          }
        ];
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.wechart = this.$refs.wechart;
    this.wechatWrap = this.$refs.wechatWrap;

    console.log(this.wechatWrap.scrollHeight);
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
