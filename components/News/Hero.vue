<script setup>
const cards = [
  {
    topic: "Trening",
    days_since_publication: 2,
    main_theme: "5 najskuteczniejszych ćwiczeń na brzuch",
    content:
      "Ćwiczenia na brzuch mogą być kluczem do poprawy Twojej postawy, balansu i siły. W tym artykule podzielę się z Tobą 5 najskuteczniejszymi ćwiczeniami na brzuch, które możesz wykonywać w domu...",
    author: {
      first_name: "Jan",
      last_name: "Kowalski",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    topic_image:
      "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    topic: "Motywacja",
    days_since_publication: 10,
    main_theme: "Jak utrzymać motywację do regularnych treningów?",
    content:
      "Regularne ćwiczenia są kluczem do zdrowia i dobrego samopoczucia, ale utrzymanie motywacji może być wyzwaniem. W tym artykule podzielę się sprawdzonymi strategiami, które pomogą Ci utrzymać motywację do treningów...",
    author: {
      first_name: "Ania",
      last_name: "Janicka",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    topic_image:
      "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
</script>
<template>
  <section class="background">
    <div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-14 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white"
        >
          Witaj na Blogu
        </h2>
        <p class="font-light sm:text-xl text-gray-400">
          Jeżeli szukasz najświeższych informacji z branży fitness, doskonale
          trafiłeś! Ta zakładka jest stworzona dla Ciebie - byś mógł być na
          bieżąco z najnowszymi trendami, badaniami, poradami i inspiracjami ze
          świata fitnessu.
        </p>
        <h3
          class="mt-2 text-2xl lg:text-3xl tracking-tight font-bold text-white"
        >
          Najnowsze Wpisy
        </h3>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <NewsHeroCard v-for="card in cards" :key="card.topic" :artic="card" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url(../../assets/img/macbook.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
