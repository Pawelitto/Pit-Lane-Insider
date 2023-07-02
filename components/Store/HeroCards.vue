<script setup>
import { Icon } from "@iconify/vue";
const {
  data: products,
  pending,
  refresh,
  erro,
} = useFetch("/api/products?limit=4");
</script>
<template>
  <section class="bg-gray-100 py-12 text-gray-700 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md text-center">
        <h2 class="font-serif text-2xl font-bold sm:text-3xl">
          Produkty na czasie
          <!-- <Icon icon="mdi:fire" width="28" /> -->
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
