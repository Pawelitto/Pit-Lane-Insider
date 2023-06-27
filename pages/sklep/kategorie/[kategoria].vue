<script setup>
const { kategoria } = useRoute().params;

useHead({
  title: kategoria,
});

if (kategoria === "ferrari") {
  throw createError({
    statusCode: 404,
    message: `Nie znaleziono takiego samochodu: ${kategoria}.`,
  });
}
</script>
<template>
  {{ kategoria }}
</template>
