<script setup>
import { Icon } from "@iconify/vue";

const hover = ref(true);
</script>
<template>
  <div
    @mouseover="hover = false"
    @mouseleave="hover = true"
    class="relative cursor-pointer"
  >
    <Icon
      :icon="
        hover ? 'ph:shopping-cart-simple-bold' : 'ph:shopping-cart-simple-fill'
      "
      width="28"
      class="text-black md:text-white"
    />

    <div class="text-black md:text-white absolute pos">5</div>
  </div>
</template>
<style scoped>
.pos {
  top: -12px;
  right: -12px;
}
</style>
