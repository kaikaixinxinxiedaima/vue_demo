<template>
  <div class="gutter-example">
    <a-row :gutter="8" >
      <a-col class="gutter-row" :span="18" push="3" style="height: 200px">
        <div style="text-align: center;border-bottom:1px dashed #000000">
          <h1 style="margin-top: 100px">
            入门VUE
            <small>-- by xxxx</small>
          </h1>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="8"   >
      <a-col class="gutter-box-left" :span="12" style="height: 600px" push="3">
        <div style="text-align: center" v-for="(item, index) in dataList" :key="index">
          <h2>
            <router-link :to="{name: '/article/detail', params: {articleId: item.article_id}}">{{item.title}}</router-link>
          </h2>
          <p>
            {{item.content}}
          </p>
        </div>
        <div style="text-align: center">
          <a-pagination showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange" @change="change" :pageSizeOptions="pageSizeOptions" :total="totla" v-model="current"/>
        </div>
      </a-col>
      <a-col class="gutter-box-right" :span="6" style="height: 600px" push="4">
        <div style="text-align: center;border-left:1px dashed #000000" >
          <h2>最新文章</h2>
          <div style="text-align: center" v-for="(item, index) in dataListTop5" :key="index">
            <h4>
              <router-link :to="{name: '/article/detail', params: {articleId: item.article_id}}">{{item.title}}</router-link>
            </h4>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>

export default {
  data () {
    return {
      totla: 0,
      pageSize: 5,
      current: 1,
      pageSizeOptions: ['5', '10', '15', '30'],
      dataList: [],
      dataListTop5: []
    }
  },
  watch: {
    pageSize (val) {
    },
    current (val) {
    }
  },
  mounted () {
    this.getArticleList()
    this.getArticleListTop5()
  },
  methods: {
    onShowSizeChange (current, pageSize) {
      this.pageSize = pageSize
      this.getArticleList()
    },
    change (current, pageSize) {
      this.current = current
      this.getArticleList()
    },
    getArticleList () {
      this.axios({
        method: 'get',
        url: '/api/blog/article'
      }).then(resp => {
        const current = this.current
        const start = (current - 1) * this.pageSize
        const end = current * this.pageSize
        this.dataList = resp.data.slice(start, end)
        this.totla = resp.data.length
      })
    },
    getArticleListTop5 () {
      this.axios({
        method: 'get',
        url: '/api/blog/article'
      }).then(resp => {
        this.dataListTop5 = resp.data.slice(0, 5)
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
