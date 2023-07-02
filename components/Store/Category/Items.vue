<script setup>
const { kategoria } = useRoute().params;

const {
  data: products,
  pending,
  refresh,
  erro,
} = useFetch(`/api/products?category=${kategoria}&limit=6`);

console.log(kategoria);
</script>
<template>
  <StoreCategoryItem
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
</template>
