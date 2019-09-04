<template>
  <li>{{content}}<span @click="handleDelete">&nbsp;&nbsp;&nbsp;&nbsp;x</span></li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete: function () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
