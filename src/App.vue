<template>
  <div class="app">
    <Layout>
      <template #left>
        <SideAside />
      </template>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
import SideAside from "@/components/SideAside.vue";

export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Layout,
    SideAside,
  },
};
</script>

<style scoped lang='less'>
.app {
  width: 100vw;
  height: 100vh;
}
</style>