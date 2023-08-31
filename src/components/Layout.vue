<template>
  <div class="Layout-container">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    flex-shrink: 0;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
  .right {
    flex-shrink: 0;
    overflow: hidden;
  }
}
</style>