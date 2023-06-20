<template>
  <div>
    <div class="my-10 lg:flex lg:flex-wrap">
      <NewsArticleCard
        v-for="article in articles.articles"
        :key="article.author"
        :article="article"
      />
    </div>
  </div>
</template>
<script setup>
const {
  data: articles,
  pending,
  refresh,
  erro,
} = await useFetch("/api/articles");

// console.log(articles.value);
</script>
