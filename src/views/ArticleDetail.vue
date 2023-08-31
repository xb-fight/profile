<template>
  <div class="ArticleDetail-container" v-if="detail">
    <Layout>
      <div class="main">
        <h1 class="title">{{ detail.title }}</h1>
        <div class="aside">
          <span>日期{{ detail.createDate }}</span>
          <span>浏览:{{ detail.scanNumber }}</span>
          <span
            ><a href="#comment">评论:{{ detail.commentNumber }}</a></span
          >
          <span
            ><router-link
              v-if="detail.category"
              :to="{
                name: 'ArticleCate',
                params: {
                  categoryId: detail.category.id,
                },
              }"
            >
              {{ detail.category.name }}</router-link
            ></span
          >
        </div>
        <div class="html markdown-body" v-html="detail.htmlContent"></div>

        <div class="conment-container" id="comment">
          <form class="postComment-container" @submit="handleSubmit">
            <div class="nick-name">
              <input
                type="text"
                maxlength="10"
                v-model.trim="formDate.nickname"
                placeholder="昵称"
              />
              <span class="info">{{ formDate.nickname.length }}/10</span>
              <div
                class="error-info"
                :style="{
                  opacity: isNicenameError ? 1 : 0,
                }"
              >
                昵称不能为空
              </div>
            </div>

            <div class="content">
              <textarea
                v-model.trim="formDate.content"
                placeholder="评论信息"
              ></textarea>
              <span class="info">{{ formDate.content.length }}/300</span>
              <div
                class="error-info"
                :style="{
                  opacity: isCommentError ? 1 : 0,
                }"
              >
                评论不能为空
              </div>
            </div>

            <button :disabled="isSubmmiting">
              {{ isSubmmiting ? "提交中" : "提交" }}
            </button>
          </form>
          <div class="comment-list" v-if="commentList.rows">
            <h2 class="title">
              评论列表：<span class="totle">({{ commentList.total }})</span>
            </h2>
            <ul>
              <li
                v-for="item in commentList.rows"
                :key="item.id"
                class="comment-item"
              >
                <avatar :url="item.avatar" :size="50" />
                <div class="item-main">
                  <p class="name">{{ item.nickname }}</p>
                  <p class="contend">{{ item.content }}</p>
                  <div class="time">{{ item.createDate }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <template v-slot:right>
        <div class="toc">
          <ListLayout :listData="list" @select="handleClick" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import { getArticleDetail } from "@/api/article";
import { postComment } from "@/api/article";
import { getComment } from "@/api/article";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout.vue";
import Avatar from "@/components/Avatar";
export default {
  components: {
    Layout,
    ListLayout,
    Avatar,
  },
  data() {
    return {
      detail: {},
      toc: [],
      commentList: [],
      formDate: { nickname: "", content: "" },
      isNicenameError: false,
      isCommentError: false,
      isSubmmiting: false,
    };
  },
  methods: {
    handleClick(item) {
      location.hash = "#" + item.anchor;
    },
    async handleSubmit() {
      const body = {
        ...this.formDate,
        articleId: this.$route.params.articleId,
      };
      this.isNicenameError = !body.nickname;
      this.isCommentError = !body.content;
      if (this.isCommentError || this.isNicenameError) {
        return;
      }

      this.isSubmmiting = true;
      const data = await postComment(body);
      this.$Message({
        message: "评论成功",
        type: "success",
      });
      this.isSubmmiting = false;
      this.isNicenameError = false;
      this.isCommentError = false;
      this.formDate = { nickname: "", content: "" };

      this.commentList.rows.unshift(data);
      this.commentList.total++;
    },

    updateToc(toc) {
      return toc.map((item) => {
        if (item.children) {
          item.children = this.updateToc(item.children);
        }
        return {
          ...item,
          selected: this.$route.hash === "#" + item.anchor,
        };
      });
    },
  },

  computed: {
    list() {
      return this.updateToc(this.toc);
    },
  },

  async created() {
    this.detail = await getArticleDetail(this.$route.params.articleId);
    this.toc = this.detail.toc;
    this.commentList = await getComment();
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/markdown.css";
.ArticleDetail-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  .toc {
    width: 300px;
    height: 100%;
    overflow-y: aiuto;
    border-left: 1px solid @gray;
  }

  .main {
    height: 100%;
    overflow-y: scroll;
    .title {
      text-indent: 1em;
    }
    .aside {
      color: @gray;
      font-size: 14px;
      margin-left: 3em;
      span {
        margin-right: 10px;
      }
    }
    .html {
      padding: 0 1em;
      margin: 20px;
      box-shadow: 0 2px 2px @gray;
    }

    .conment-container {
      margin: 20px 20px;
      input {
        width: 400px;
        height: 30px;
        border: 1px dashed @gray;
        border-radius: 5px;
        margin-left: 20px;
        padding-left: 1em;
        color: darken(@words, 30%);
        &:focus {
          border: 1px dashed @dark;
          outline: none;
        }
      }
      .error-info {
        margin: 5px 30px;
        color: @danger;
      }
      textarea {
        width: 400px;
        height: 200px;
        margin-left: 20px;
        border-radius: 5px;
        margin-left: 20px;
        padding-left: 1em;
        padding-top: 0.5em;
        border: 1px dashed @gray;
        resize: none;
        color: darken(@words, 30%);
        &:focus {
          border: 1px dashed @dark;
          outline: none;
        }
      }
      .nick-name {
        position: relative;
      }
      .content {
        position: relative;
      }
      .info {
        color: lighten(@words, 50%);
        font-size: 12px;
        position: absolute;
        bottom: 35px;
        left: 400px;
      }
      button {
        margin-left: 20px;
        cursor: pointer;
        border: none;
        outline: none;
        width: 100px;
        height: 34px;
        color: #fff;
        border-radius: 4px;
        background: @primary;
        &:hover {
          background: darken(@primary, 10%);
        }
        &:disabled {
          background: lighten(@primary, 20%);
          cursor: not-allowed;
        }
      }
      .comment-list {
        margin-left: 10px;
        .title {
          text-indent: 0;
          font-size: 20px;
          color: @words;
          .totle {
            font-size: 14px;
            color: @gray;
          }
        }
        .comment-item {
          margin-top: 10px;
          width: 80%;
          display: flex;
          margin-left: 40px;
          border-top: 1px solid lighten(@gray, 20%);
          padding-top: 5p;
          position: relative;
          .item-main {
            margin-left: 10px;
          }
          .name {
            font-weight: bold;
            font-size: 24px;
          }
          .time {
            font-size: 14px;
            color: @gray;
            position: absolute;
            top: 5px;
            right: 0;
          }
        }
      }
    }
  }
}
</style>