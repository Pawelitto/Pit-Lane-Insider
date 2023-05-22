<script setup>
import polo from '../assets/img/PoloAstonMartin.png';
import tanktop from '../assets/img/AlphaTauri.png';
</script>
<template>
  <section class="flex flex-col md:flex-row">
    <div class="backgroundtheme md:w-4/6 lg:w-3/6">
      <div class="w-full m-auto text-center">
        <h3 class="text-2xl text-slate-100 pt-5">Pit Lane</h3>
        <h4 class="bloghead">Store</h4>
      </div>
      <div class="w-full p-8">
        <p class="text-right text-slate-100 sm:w-3/6 sm:ml-auto">
          W naszym sklepie znajdziesz wiele unikalnych produktów z motywem
          <span class="text-red-700 font-bold">F1</span> i naszej aplikacji Pit
          Lane Insider. Od koszulek i czapek po gadżety do samochodu, oferujemy
          szeroką gamę produktów, które pozwolą Ci wyrazić swoją miłość do
          wyścigów. Odwiedź nasz sklep już teraz i przekonaj się sam, dlaczego
          nasi fani uwielbiają nasze produkty!
        </p>
      </div>
    </div>
    <div class="tloskep flex justify-evenly md:w-2/6 lg:w-3/6  ">
      <div
        class="card-item rounded-2xl max-w-fit flex flex-col text-center my-10">
        <img class="zdj m-auto" :src="polo" alt="Polo Aston Martin" />
        <p class="pt-2">Męska koszulka</p>
        <p class="font-semibold">Aston Martin - Cognizant</p>
        <p class="cena p-4">259 zł</p>
        <div class="guzik rounded-full">Dodaj do koszyka</div>
      </div>
      <div
        class="card-item hidden lg:block  rounded-2xl max-w-fit flex flex-col text-center my-10 ">
        <img class="zdj m-auto" :src="tanktop" alt="Tank Top Alpine F1" />
        <p class="pt-2">Męska koszulka Tank Top</p>
        <p class="font-semibold">Alpine F1</p>
        <p class="cena p-4">259 zł</p>
        <div class="guzik rounded-full">Dodaj do koszyka</div>
      </div>
    </div>
  </section>
</template>
