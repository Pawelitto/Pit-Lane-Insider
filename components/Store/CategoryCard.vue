<script setup>
const props = defineProps({ categoryCard: Object });
</script>
<template>
  <div class="group relative">
    <div
      class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
    >
      <img
        :src="categoryCard.imageSrc"
        :alt="categoryCard.imageAlt"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
      <a :href="categoryCard.href">
        <span class="absolute inset-0" />
        {{ categoryCard.name }}
      </a>
    </h3>
    <p class="text-base font-semibold text-gray-900">
      {{ categoryCard.description }}
    </p>
  </div>
</template>
