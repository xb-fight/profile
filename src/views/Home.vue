<template>
  <div class="Home-container" @wheel="handleWheel">
    <div
      ref="imgContainer"
      class="item"
      :style="{
        transform: `translateY(${-index * imgHeight}px)`,
      }"
      @transitionend="handleTransitionEnd"
    >
      <img class="img" v-for="(item, i) in imgs" :key="i" :src="item" />
    </div>
    <div class="text">
      <text-eraser :text="text" :duration="5" />
    </div>
    <div class="dot-container">
      <div
        class="dot"
        v-for="(item, i) in imgs"
        :key="i"
        @click="imgGo(i)"
        :class="{ selected: i === index }"
      ></div>
    </div>

    <div class="arrow-up arrow" @click="imgGo(index - 1)" v-show="index !== 0">
      <Icon type="arrowUp" />
    </div>
    <div
      class="arrow-down arrow"
      @click="imgGo(index + 1)"
      v-show="index !== imgs.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/home-bg1.jpg";
import img2 from "@/assets/home-bg2.jpg";
import img3 from "@/assets/home-bg3.jpg";
import Icon from "@/components/Icon";
import TextEraser from "@/components/TextEraser";
export default {
  components: { Icon, TextEraser },

  data() {
    return {
      index: 0, //第几张图片
      imgs: [img1, img2, img3],
      imgHeight: 0,
      text: "talk is cheap, show me the code",
      isWheeling: false,
    };
  },
  methods: {
    imgGo(n) {
      this.index = n;
    },
    handleResize() {
      this.imgHeight = this.$refs.imgContainer.clientHeight;
    },
    handleWheel(e) {
      if (this.isWheeling) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.isWheeling = true;
        this.index -= 1;
      } else if (e.deltaY > 5 && this.index < this.imgs.length - 1) {
        this.isWheeling = true;
        this.index += 1;
      }
    },
    handleTransitionEnd() {
      this.isWheeling = false;
    },
  },
  mounted() {
    this.imgHeight = this.$refs.imgContainer.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.Home-container {
  position: relative;
  width: 100%;
  height: 100%;

  .item {
    // overflow: hidden;
    height: 100%;
    width: 100%;
    transition: 0.5s;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .dot-container {
    position: absolute;
    top: 50%;
    right: 40px;
    width: 30px;
    padding: 5px 0px;
    border-radius: 10px;
    box-shadow: -3px 3px 3px 2px rgb(5, 4, 6);
    .dot {
      margin: 7px auto;
      width: 10px;
      height: 10px;
      background: @words;
      border-radius: 50%;
      &.selected {
        background: @lightWords;
        transform: scale(1.2);
      }
    }
  }

  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: darken(@words, 30%);
    font-size: 24px;
    &-up {
      top: 30px;
      animation: jump-up 2s infinite ease-in-out;
    }
    &-down {
      bottom: 30px;
      animation: jump-down 2s infinite ease-in-out;
    }
  }

  .text {
    position: absolute;
    top: 10px;
    right: 10px;
    color: @words;
    font-size: 2em;
  }

  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translateY(-@jump);
    }
    50% {
      transform: translateY(@jump);
    }
    100% {
      transform: translateY(-@jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translateY(@jump);
    }
    50% {
      transform: translateY(-@jump);
    }
    100% {
      transform: translateY(@jump);
    }
  }
}
</style>