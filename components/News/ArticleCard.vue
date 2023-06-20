<script setup>
const props = defineProps({ article: Object });
</script>
<template>
  <div
    class="max-w-md m-5 sm:mx-auto overflow-hidden rounded-lg bg-llgray shadow relative hover:opacity-75 hover:cursor-pointer"
  >
    <NuxtLink :to="article.url" target="_blank">
      <img
        :src="article.urlToImage"
        class="aspect-video w-full object-cover"
        alt=""
      />
      <div class="p-4">
        <p class="mb-1 text-sm text-primary-500">
          {{ article.author }} •
          <time>{{ article.publishedAt.slice(0, 10) }}</time>
        </p>
        <h3 class="text-xl font-medium text-gray-900">
          {{ article.title }}
        </h3>
        <p class="mt-1 text-gray-500">
          {{ article.description }}
        </p>
        <div class="mt-4 flex gap-2 left-0 bottom-0">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600"
          >
            Design
          </span>
          <span
            class="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-600"
          >
            Product
          </span>
          <span
            class="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-600"
          >
            Develop
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
