<script setup>
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();

const navbarElements = [
  {
    name: "Aktualności",
    path: "/news",
    dropdown: false,
    children: [],
  },
  {
    name: "Wyniki",
    path: "/wyniki",
    dropdown: true,
    children: [
      { cname: "Klasyfikacja", cpath: "/wyniki/klasyfikacja" },
      { cname: "Kierowcy", cpath: "/wyniki/kierowcy" },
      { cname: "Zespoły", cpath: "/wyniki/zespoly" },
      { cname: "Ranking", cpath: "/wyniki/ranking" },
    ],
  },
  {
    name: "Sklep",
    path: "/sklep",
    dropdown: false,
    children: [],
  },
  {
    name: "Kontakt",
    path: "/contact",
    dropdown: false,
    children: [],
  },
];
</script>
<template>
  <nav :class="y > 50 ? 'sticky-nav' : 'nav'" class="navbarbackhero">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink href="/" class="flex items-center">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        /> -->
        <span
          class="self-center text-2xl text-llgray font-semibold whitespace-nowrap tracking-widest hover:text-dgray"
          >Pit Lane Insider</span
        >
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-lgray rounded-lg md:hidden hover:bg-llgray focus:outline-none focus:ring-2 focus:ring-llgray"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden w-full tracking-widest md:block md:w-auto"
        id="navbar-dropdown"
      >
        <ul
          class="text-xl flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent tracking-widest"
        >
          <NavElement
            v-for="element in navbarElements"
            :key="element.name"
            :element="element"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbarbackhero {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    linear-gradient(180deg, #000000 6.25%, rgba(0, 0, 0, 0) 100%);
}
</style>
