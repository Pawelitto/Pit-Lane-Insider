<script setup>
import lewisH from '../assets/img/blog_lewis.png';
</script>
<template>
  <div>
    <div class="m-auto mt-4 w-5/6 text-center flex flex-col">
      <span class="text-2xl">Pit Lane</span>
      <span class="bloghead">BLOG</span>
    </div>
    <div class="opis w-5/6 m-6">
      Najnowszy wpis na blogu odnosi się do wywiadu z kierowcą
      <span class="text-red-700">F1</span> Lewisem Hamiltonem, pytaliśmy go o
      jego największe osiągnięcia w karierze, jakie były największe wyzwania i
      co planuje na przyszłość. Hamilton podzielił się swoimi przemyśleniami na
      temat ciężkiej pracy, poświęcenia i motywacji, które pomogły mu osiągnąć
      sukces.
    </div>
    <div class="lewis w-full">
      <img class="m-auto rounded" :src="lewisH" alt="Lewis Hamilton" />
    </div>
  </div>
</template>
