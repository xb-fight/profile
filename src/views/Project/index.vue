<<template>
  <div class="Project-container">
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/taobao/' target='_blank'>
            项目名：淘宝静态页面
          </a>
        </h2>
        <p>
          项目描述： 构建静态的淘宝商城项目 主要是对HTML CSS一些应用，包括一些二级菜单，轮播图和布局的应用
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/douban/' target='_blank'>
            项目名：豆瓣静态页面
          </a>
        </h2>
        <p>
          项目描述： 依照豆瓣官网构建的部分页面， 主要是应用雪碧图，以及在透明度上的应用
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/formElement/' target='_blank'>
            项目名：表单元素
          </a>
        </h2>
        <p>
          项目描述： 一个简单的表单元页面
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/billi/' target='_blank'>
            项目名：b站登录页面
          </a>
        </h2>
        <p>
          项目描述： 构建b站的的登陆页面，主要是对表单元素和遮盖层和雪碧图的应用
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/notice/' target='_blank'>
            项目名：公告组件
          </a>
        </h2>
        <p>
          项目描述： 配合js实现的公告组价，每个一秒切换一次内容。
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/twoMenu/' target='_blank'>
            项目名：动态二级菜单
          </a>
        </h2>
        <p>
          项目描述： 配合js实现的动态二级菜单，当一级菜单激活时，这类的二级菜单才会显示
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/dTable/' target='_blank'>
            项目名：动态表格
          </a>
        </h2>
        <p>
          项目描述：动态表格，可同时选中全部数据也可选中单行数据，可以根据每一列的属性对数据进行排序
        </p>
      </div>
    </div>
    <div class='project-item'>
      <div class="info">
        <h2>
          <a href='https://xb-fight.github.io/threeMenu/' target='_blank'>
            项目名：三级联动菜单
          </a>
        </h2>
        <p>
          项目描述：三级联动，每一级的可选内容根据上一级的选择而改变
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
}
</style>