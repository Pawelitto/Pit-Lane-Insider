<script setup>
import lewisH from "../../assets/img/blog_lewis.png";
</script>
<template>
  <div>
    <div class="flex flex-col md:flex-row m-auto xl:w-5/6 2xl:w2/6">
      <div class="md:mt-10 md:w-11/12">
        <div
          class="m-auto mt-4 w-5/6 sm:w-4/6 text-center flex flex-col md:text-left"
        >
          <span class="text-2xl">Pit Lane</span>
          <span class="bloghead">NEWS</span>
        </div>
        <div class="opis m-auto w-5/6 my-6 sm:w-4/6 lg:mt-20">
          Najnowszy wpis na blogu odnosi się do wywiadu z kierowcą
          <span class="text-red-700">F1</span> Lewisem Hamiltonem, pytaliśmy go
          o jego największe osiągnięcia w karierze, jakie były największe
          wyzwania i co planuje na przyszłość. Hamilton podzielił się swoimi
          przemyśleniami na temat ciężkiej pracy, poświęcenia i motywacji, które
          pomogły mu osiągnąć sukces.
        </div>
      </div>
      <div class="lewis w-full md:mr-5 md:w-4/6 m-auto xl:mt-10">
        <img
          class="m-auto sm:rounded md:rounded-2xl"
          :src="lewisH"
          alt="Lewis Hamilton"
        />
      </div>
    </div>
    <div class="w-full text-center">
      <button class="dvis m-5 hover:text-red-700 hover:font-medium">
        CZYTAJ CAŁOŚĆ
      </button>
    </div>
  </div>
</template>
