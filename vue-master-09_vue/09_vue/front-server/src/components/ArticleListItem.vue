<template>
  <div>
    <router-link
      :to="{
        name: 'DetailView',
        params: { id: article.id },
      }"
    >
      {{ article.title }}
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: {
      type: Object,
    },
  },
}
</script>

<style></style>
