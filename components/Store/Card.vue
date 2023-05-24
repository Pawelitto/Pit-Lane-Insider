<script setup>
const props = defineProps({ card: Object });
</script>
<template>
  <div
    class="card-item hidden lg:block rounded-2xl max-w-fit flex flex-col text-center my-10 cursor-pointer"
  >
    <img class="zdj m-auto" :src="card.img" alt="Tank Top Alpine F1" />
    <p class="pt-2">{{ card.type }}</p>
    <p class="font-semibold">{{ card.name }}</p>
    <p class="cena p-4">{{ card.price }}</p>
    <div class="guzik rounded-full">Dodaj do koszyka</div>
  </div>
</template>
