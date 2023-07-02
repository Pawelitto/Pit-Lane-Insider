<script setup>
const { kategoria } = useRoute().params;

useHead({
  title: kategoria,
});
</script>
<template>
  <StoreCategoryTop />
  <StoreCategoryContent />
</template>
