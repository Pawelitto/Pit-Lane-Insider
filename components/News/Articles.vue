<script setup>
// const {
//   data: articles,
//   pending,
//   refresh,
//   erro,
// } = await useFetch("/api/articles");

const { data: articles } = await useAsyncData("articles", () =>
  $fetch("/api/articles")
);

// console.log(articles.value);
</script>
<template>
  <div>
    <div class="my-10 lg:flex lg:flex-wrap">
      <NewsArticleCard
        v-for="article in articles || []"
        :key="article.author"
        :article="article"
      />
    </div>
  </div>
</template>
