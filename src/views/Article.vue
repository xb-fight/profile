<template>
  <div class="Article-container">
    <h2 class="title">以下数据均为Mockjs模拟制成</h2>
    <Layout>
      <template v-slot:right>
        <div class="list-container">
          <ListLayout :listData="list" @select="listClick" />
        </div>
      </template>
      <div class="article-list-container">
        <ul>
          <li v-for="item in articleList.rows" :key="item.id">
            <div class="thumb" v-if="item.thumb">
              <router-link
                :to="{
                  name: 'ArticleDetail',
                  params: {
                    articleId: item.id,
                  },
                }"
              >
                <img :src="item.thumb" :alt="item.title" :title="item.title" />
              </router-link>
            </div>
            <div class="main">
              <router-link
                :to="{
                  name: 'ArticleDetail',
                  params: {
                    articleId: item.id,
                  },
                }"
              >
                <h2>{{ item.title }}</h2>
              </router-link>
              <div class="aside">
                <span>日期：{{ item.createDate }}</span>
                <span>浏览：{{ item.scanNumber }}</span>
                <span>评论：{{ item.commentNumber }}</span>
                <router-link
                  :to="{
                    name: 'ArticleCate',
                    params: {
                      categoryId: item.category.id,
                    },
                  }"
                  >{{ item.category.name }}</router-link
                >
              </div>
              <div class="desc">
                {{ item.description }}
              </div>
            </div>
          </li>
        </ul>
        <div class="pager">
          <Pager
            v-if="articleList.total"
            :totle="articleList.total"
            :current="page"
            :limit="limit"
            @pageChange="handlePageChange"
          />
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import ListLayout from "@/components/ListLayout";
import Layout from "@/components/Layout";
import Pager from "@/components/Pager";
import { getArticleType, getArticleList } from "@/api/article";
export default {
  components: {
    ListLayout,
    Layout,
    Pager,
  },
  data() {
    return {
      articleTypeList: [],
      articleList: [],
    };
  },
  computed: {
    page() {
      return +this.$route.query.page || 1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      return this.articleTypeList.map((item) => {
        return {
          ...item,
          selected: item.id === this.categoryId,
        };
      });
    },
  },
  methods: {
    listClick(item) {
      this.$router.push(`/article/cate/${item.id}`);
    },
    handlePageChange(newpage) {
      if (this.categoryId === -1) {
        this.$router.push(`/article?page=${newpage}&limit=${this.limit}`);
      } else {
        this.$router.push(
          `/article/cate/${this.categoryId}?page=${newpage}&limit=${this.limit}`
        );
      }
    },
  },

  async created() {
    this.articleTypeList = await getArticleType();
    this.articleList = await getArticleList(
      this.page,
      this.limit,
      this.categoryId
    );
  },

  watch: {
    $route: async function () {
      let ariticleList = await getArticleList(
        this.page,
        this.limit,
        this.categoryId
      );
      this.articleList = ariticleList;
    },
  },
};
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";

.Article-container {
  width: 100%;
  height: 100%;
  .list-container {
    width: 200px;
    height: 100%;
    text-align: center;
    border-left: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    padding-left: 1em;
    overflow-y: scroll;
    width: 100%;
    height: calc(100% - 50px);
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid @gray;
        border-radius: 10px;
        .thumb {
          flex: 0 0 auto;
          margin-right: 15px;
          img {
            display: block;
            max-width: 200px;
            border-radius: 5px;
          }
        }
        .main {
          flex: 1 1 auto;
          h2 {
            margin: 0;
          }
        }
        .aside {
          font-size: 12px;
          color: @gray;
          span {
            margin-right: 15px;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
        &:hover {
          box-shadow: 2px 2px 2px @gray, -2px -2px 2px @gray, 2px -2px 2px @gray,
            -2px 2px 2px @gray;
        }
      }
    }
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .pager {
    width: 570px;
    margin: 7px auto;
    box-shadow: 1px 1px 1px 1px @gray;
  }
}
</style>