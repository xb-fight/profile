<template>
  <div class="ImageLoader-container">
    <img
      v-bind:src="src"
      alt=""
      @load="loadhandler"
      :style="{
        opacity: everythingDone ? 1 : 0.2,
        transition: duration + 'ms',
      }"
    />
    <img v-bind:src="placeholder" alt="" v-if="!imgLoaded" />
  </div>
</template>


<style lang="less" scoped>
.ImageLoader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5ms;
  }
  .opacity {
    opacity: 0;
  }
}
</style>


<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      imgLoaded: false,
      everythingDone: false,
    };
  },
  methods: {
    loadhandler() {
      this.imgLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>