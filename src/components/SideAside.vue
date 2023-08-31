<template>
  <div class="SideAside-container">
    <!-- ? 本地资源如何导入 -->
    <Avatar :url="url" :size="150" />
    <Menu />
    <Contact />
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/var.less";
.SideAside-container {
  width: 100%;
  height: 100%;
  background: transparent;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: @dark;
  .Avatar-container {
    margin: 20px auto;
    box-sizing: border-box;
  }
  .Contact-container {
    margin: 20px;
    margin-left: 0.5em;
  }
  .Menu-container {
    margin: 24px;
  }
}
</style>


<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import img from "@/assets/picture.jpg";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      url: img,
    };
  },
};
</script>