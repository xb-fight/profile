<template>
  <div class="Pager-container">
    <a :class="{ disable: current === 1 }" @click="pagerChange(1)">|&lt</a>
    <a :class="{ disable: current === 1 }" @click="pagerChange(current - 1)"
      >&lt</a
    >
    <a
      v-for="i in pagerDate"
      @click="pagerChange(i)"
      :class="{ actived: current === i }"
      >{{ i }}</a
    >
    <a
      :class="{ disable: current === totlePager }"
      @click="pagerChange(current + 1)"
      >&gt</a
    >
    <a
      :class="{ disable: current === totlePager }"
      @click="pagerChange(totlePager)"
    >
      &gt|</a
    >
  </div>
</template>

<style lang='less' scoped>
@import "~@/styles/var.less";
.Pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 1.6em;
    text-align: center;
    // margin: 10px 5px;
    cursor: pointer;
    &.actived {
      color: @words;
      font-weight: bolder;
      cursor: text;
    }
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    totle: {
      type: Number,
      required: true,
    },
    limitPager: {
      type: Number,
      default: 10,
    },
    visiblePager: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totlePager() {
      return Math.ceil(this.totle / this.limitPager);
    },
    // 当前页码数据
    minPager() {
      if (this.current - Math.floor(this.visiblePager / 2) < 1) {
        return 1;
      }
      return this.current - Math.floor(this.visiblePager / 2);
    },
    maxPager() {
      if (this.minPager + this.visiblePager - 1 > this.totlePager) {
        return this.totlePager;
      }
      return this.minPager + this.visiblePager - 1;
    },
    pagerDate() {
      let nums = [];
      for (let i = this.minPager; i <= this.maxPager; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    pagerChange(i) {
      if (i < 1) {
        i = 1;
      }
      if (i > this.totlePager) {
        i = this.totlePager;
      }
      this.$emit("pageChange", i);
    },
  },
};
</script>