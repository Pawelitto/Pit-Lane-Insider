<template>
  <section class="py-12 text-gray-700 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md text-center">
        <h2 class="font-serif text-2xl font-bold sm:text-3xl">
          Produkty na czasie {ikonka ognia}
        </h2>
      </div>

      <div
        class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 lg:mt-16 md:gap-6 lg:gap-10"
      >
        <StoreHeroCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const {
  data: products,
  pending,
  refresh,
  erro,
} = await useFetch("/api/products");
</script>
