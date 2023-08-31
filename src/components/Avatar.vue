<template>
  <img
    class="Avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是一个字符串
      required: true, // 属性必传
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.Avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  max-width: 100%;
}
</style>
