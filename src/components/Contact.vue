<template>
  <ul class="contact-container">
    <li>
      <a target="_blanck" href="https://github.com/xb-fight">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>小北</span>
      </a>
    </li>
    <li>
      <a target="_blanck" href="mailto:2495349774@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>2495349774@qq.com</span>
      </a>
    </li>
    <li>
      <a
        target="_blanck"
        href="tencent://message/?Menu=yes&uin=2495349774&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2495349774</span>
      </a>
    </li>
    <li>
      <a target="_blanck">
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>a2495349774</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
}
</style>
