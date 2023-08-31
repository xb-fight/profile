<template>
  <div class="ListLayout-container">
    <ul class="">
      <li
        v-for="item in listData"
        :key="item.id"
        @click.stop="handleClick(item)"
        :class="{ active: item.selected }"
      >
        <span class="name">{{ item.name }} </span>
        <ListLayout
          :listData="item.children"
          v-if="item.children"
          @select="handleClick"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListLayout",
  props: {
    listData: {
      type: Array, // [{id: 1,name:xb, children:{id:1-2, name:xh , .......}}]
      required: true,
    },
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
  },
  methods: {
    handleClick(item) {
      if (!item.selected) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.ListLayout-container {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 10px 0;
      margin-left: 1em;
      line-height: 40px;
      color: @words;
      cursor: pointer;

      .id {
        margin-right: 1em;
      }
    }
    .active {
      color: @primary;
      font-weight: bold;
    }
  }
}
</style>