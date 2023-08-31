<template>
  <div class="TextEraser-container">
    <div>
      {{ text }}
    </div>
    <div class="eraser" :style="{ animationDuration: duration + 's' }">
      <span>
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.TextEraser-container {
  opacity: 0.5;
  background-clip: border-box;
  border-radius: 10px;
  padding: 10px 1.5em;
  @property --p {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: false;
  }
  @bg-color: @lightWords;
  position: relative;
  background: @bg-color;

  .eraser {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background: linear-gradient(to right, #0000 var(--p), @bg-color var(--p));
    animation: erase 5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes erase {
    to {
      --p: 100%;
    }
  }
}
</style>
