<template>
    <div style="text-align: center">
      <h1>count的值：{{this.$store.state.count}}</h1>
      <h1>{{dataType}}</h1>
      <h1 v-if="yesorno">😁😁</h1>
      <h1 v-else>😢😢</h1>
      <button @click="add">+</button>
      <button @click="reduce"> - </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dataType: '',
      yesorno: ''
    }
  },
  methods: {
    add () {
      // this.$store.commit('add')
      this.$store.dispatch('add')
      const count = this.$store.state.count

      if (count % 2 === 0) {
        this.dataType = '偶数'
        this.yesorno = true
      } else {
        this.dataType = '奇数'
        this.yesorno = false
      }
    },
    reduce () {
      // this.$store.commit('reduce')
      this.$store.dispatch('reduce')
      const count = this.$store.state.count

      if (count % 2 === 0) {
        this.dataType = '偶数'
        this.yesorno = true
      } else {
        this.dataType = '奇数'
        this.yesorno = false
      }
    }
  }
}
</script>

<style scoped>

</style>
