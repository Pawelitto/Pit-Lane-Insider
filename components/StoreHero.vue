<script setup>
import polo from "../assets/img/PoloAstonMartin.png";
import tanktop from "../assets/img/AlphaTauri.png";

const cards = [
  {
    price: 259,
    type: "Męska koszulka",
    name: "Aston Martin - Cognizant",
    img: polo,
  },
  {
    price: 139,
    type: "Męska koszulka Tank Top",
    name: "Alpine F1",
    img: tanktop,
  },
];
</script>
<template>
  <section class="flex flex-col md:flex-row">
    <div class="backgroundtheme md:w-4/6 lg:w-3/6">
      <div class="w-full m-auto text-center">
        <h3 class="text-2xl text-white pt-5">Pit Lane</h3>
        <h4 class="bloghead">Store</h4>
      </div>
      <div class="w-full p-8">
        <p class="text-right text-white sm:w-3/6 sm:ml-auto">
          W naszym sklepie znajdziesz wiele unikalnych produktów z motywem
          <span class="text-red-700 font-bold">F1</span> i naszej aplikacji Pit
          Lane Insider. Od koszulek i czapek po gadżety do samochodu, oferujemy
          szeroką gamę produktów, które pozwolą Ci wyrazić swoją miłość do
          wyścigów. Odwiedź nasz sklep już teraz i przekonaj się sam, dlaczego
          nasi fani uwielbiają nasze produkty!
        </p>
      </div>
    </div>
    <div class="tloskep flex justify-evenly md:w-2/6 lg:w-3/6">
      <StoreCard v-for="card in cards" :key="card.name" :card="card" />
    </div>
  </section>
</template>
