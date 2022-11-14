<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }"> [CREATE] </router-link>
    <hr />
    <ArticleList />
    <hr />
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed: {},
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
    },
  },
}
</script>

<style></style>
