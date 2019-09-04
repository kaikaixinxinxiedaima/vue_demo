<template>
  <div class="gutter-example">
    <a-row :gutter="8" >
      <a-col class="gutter-row" :span="18" push="3" style="height: 200px">
        <div style="text-align: center">
          <h1 style="margin-top: 100px">
            {{article.title}}
          </h1>
        </div>
        <div style="text-align: right;font-size: 20px;padding-bottom: 5px;border-bottom:1px dashed #000000">
          <router-link to="article/list">返回主页</router-link>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="8">
      <a-col class="gutter-box-left" :span="18" push="3" style="height: 600px">
        <div style="text-align: center" >
          <p>
            {{article.content}}
          </p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail () {
      this.axios({
        method: 'get',
        url: '/api/blog/article/' + this.$route.params.articleId
      }).then(resp => {
        this.article = resp.data
      })
    }
  }
}
</script>

<style scoped>
  .gutter-row{
    background: #ffffff;
    border: 0;
  }
  .gutter-box-left {
    background: #ffffff;
    padding: 5px 0;
  }
  .gutter-box-right {
    background: #ffffff;
    padding: 5px 0;
  }
</style>
