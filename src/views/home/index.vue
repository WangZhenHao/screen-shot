<template>
  <div class="home">
    <div class="flex-box">
      <wechart
        :list="list"
        :title="title"
        ref="wechart"
      ></wechart>
      <div class="home-right p-l-ten">
        <!-- <dialog-nar-bar></dialog-nar-bar> -->
        <dialog-wetchat-title v-model="title"></dialog-wetchat-title>
        <dialog-plate
          :role="1"
          @add-content="addContentHandel"
          class="p-t-ten"
        ></dialog-plate>
        <dialog-plate
          :role="0"
          @add-content="addContentHandel"
          class="p-t-ten"
        ></dialog-plate>

        <div class="p-t-ten">
          <el-button
            :loading="loading"
            @click="screenShot"
            type="success"
          >生成截屏</el-button>
          <el-button @click="clearAll">清空截屏信息</el-button>
        </div>
      </div>
    </div>

    <el-dialog
      :before-close="close"
      :visible.sync="dialogVisible"
      title="提示"
      width="60%"
    >
      <div ref="imageWrap"></div>
      <span
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="close">取 消</el-button>
        <el-button
          @click="close"
          type="primary"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import dialogWetchatTitle from './components/dialogWetchatTitle.vue';
import dialogPlate from './components/dialoguePlate.vue';
import dialogNarBar from './components/dialogNarBar.vue';
import wechart from './components/wechact.vue';

export default {
  name: 'Home',
  components: {
    wechart,
    dialogPlate,
    dialogWetchatTitle,
    // dialogNarBar,
  },
  data: function () {
    return {
      dialogVisible: false,
      loading: false,
      title: '微信对话制作',
      list: [
        // {
        //   role: 0,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   type: 1,
        //   receipted: "send"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   type: 1,
        //   receipted: "receive"
        // }
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试2"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试3"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试4"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试5"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试6"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试7"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试8"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试9"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试10"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试11"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试12"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试13"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试14"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试15"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试16"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试17"
        // },
        // {
        //   role: 1,
        //   header:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3225172089,2012026749&fm=15&gp=0.jpg",
        //   desc: "测试18"
        // }
      ],
    };
  },
  watch: {
    title(e) {
      console.log(e);
    },
  },
  methods: {
    addContentHandel(e) {
      this.list.push(e);
    },
    close() {
      this.dialogVisible = false;
      setTimeout(() => {
        this.$refs.imageWrap.innerHTML = '';
      }, 500);
    },
    clearAll() {
      this.title = '';
      this.list = [];
    },
    screenShot() {
      // if (!this.list.length) {
      //   this.$message({
      //     message: "请先输入内容",
      //     type: "warning"
      //   });
      //   return;
      // }
      const newNode = this.cloneNode(this.$refs.wechart.wechatWrap);

      this.loading = true;
      html2canvas(newNode, {
        allowTaint: true,
      }).then((canvas) => {
        this.dialogVisible = true;
        this.loading = false;

        this.$nextTick(() => {
          this.$refs.imageWrap.appendChild(canvas);
          document.body.removeChild(newNode);
        });
      });
    },
    cloneNode(node) {
      const newNode = node.cloneNode(true);
      newNode.style.height = node.scrollHeight + 'px';
      newNode.style.position = 'fixed';
      newNode.style.left = 0 + 'px';
      newNode.style.top = 9999 + 'px';
      newNode.style.transform = 'unset';
      document.body.appendChild(newNode);

      return newNode;
    },
  },
};
</script>
<style lang="scss" scoped></style>
