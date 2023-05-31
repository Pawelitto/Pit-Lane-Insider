<script setup>
import { useWindowScroll } from "@vueuse/core";
import { createWebHistory } from "vue-router";

const { x, y } = useWindowScroll();

const navbarElements = [
  {
    name: "Blog",
    path: "/blog",
    dropdown: false,
    children: [],
  },
  {
    name: "Wyniki",
    path: "/wyniki",
    dropdown: true,
    children: [
      { cname: "Klasyfikacja", cpath: "/klasyfikacja" },
      { cname: "Kierowcy", cpath: "/kierowcy" },
      { cname: "Zespoły", cpath: "/zespoly" },
      { cname: "Ranking", cpath: "/ranking" },
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
  <nav :class="y > 50 ? 'sticky-nav' : 'nav'" class="navbarback">
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
          <!-- <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-ddgray md:text-llgray rounded hover:text-llgray hover:bg-lgray md:hover:bg-transparent md:border-0 md:hover:text-dgray md:p-0"
              aria-current="page"
              >Blog</a
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ddgray rounded hover:bg-llgray md:hover:bg-transparent md:border-0 md:hover:text-dgray md:p-0 md:w-auto md:text-white"
            >
              Wyniki
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-llgray rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-dgray"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-llgray"
                    >Klasyfikacja</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-llgray"
                    >Kierowcy</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-llgray"
                    >Zespoły</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-llgray"
                    >Ranking</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-ddgray md:text-llgray rounded hover:text-llgray hover:bg-lgray md:hover:bg-transparent md:border-0 md:hover:text-dgray md:p-0"
              >Sklep</a
            >
          </li>
          <li>
            <NuxtLink
              href="/contact"
              class="block py-2 pl-3 pr-4 text-ddgray md:text-llgray rounded hover:text-llgray hover:bg-lgray md:hover:bg-transparent md:border-0 md:hover:text-dgray md:p-0"
              >Kontakt</NuxtLink
            >
          </li> -->
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
