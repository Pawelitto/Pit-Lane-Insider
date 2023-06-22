<script setup>
const categories = [
  {
    name: "Technologia przyszłości",
    description: "Oferujemy najnowocześniejsze urządzenia elektroniczne",
    imageSrc:
      "https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2021/04/Screen-Shot-2021-04-26-at-3.27.29-PM.jpg",
    imageAlt: "Technologia",
    href: "#",
  },
  {
    name: "Moda w Twoim stylu",
    description: "Wyraź swoją indywidualność",
    imageSrc: "https://data.whicdn.com/images/348531482/original.jpg",
    imageAlt: "Ubrania.",
    href: "#",
  },
  {
    name: "Biżuteria",
    description: "Piękno w najdrobniejszych detalach",
    imageSrc:
      "https://i.etsystatic.com/34904176/r/il/5dd195/3791840565/il_570xN.3791840565_hyzr.jpg",
    imageAlt: "Biżuteria.",
    href: "#",
  },
];
</script>
<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">
          Co możesz znaleść w naszym sklepie
        </h2>
        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <StoreCategoryCard
            v-for="categorie in categories"
            :key="categorie.name"
            :categoryCard="categorie"
          />
        </div>
      </div>
    </div>
    <hr class="w-48 h-1 mx-auto border-0 rounded bg-gray-700" />
  </div>
</template>
