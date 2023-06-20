<script setup>
import { Icon } from "@iconify/vue";
// import cartIcon from "@iconify/icons-fa-solid/shopping-cart";
// import cartIconFilled from "@iconify/icons-fa-solid/shopping-cart-filled";

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
      color="#000"
    />
    <!-- <Icon icon="" width="28" color="#fff" /> -->
    <!-- <icon-base class="icon" :icon="hover ? cartIconFilled : cartIcon" /> -->

    <div class="text-black sm:text-white absolute pos">5</div>
  </div>
</template>
<style scoped>
.pos {
  top: -12px;
  right: -12px;
}
</style>
