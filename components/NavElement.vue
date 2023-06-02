<script setup>
const props = defineProps({ element: Object });
</script>
<template>
  <div>
    <li v-if="!element.dropdown">
      <NuxtLink
        :to="element.path"
        class="block py-2 pl-3 pr-4 text-ddgray md:text-llgray rounded hover:text-llgray hover:bg-lgray md:hover:bg-transparent md:border-0 md:hover:text-dgray md:p-0"
        aria-current="page"
        >{{ element.name }}</NuxtLink
      >
    </li>
    <li v-else>
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
          <li v-for="item in element.children">
            <NuxtLink
              :to="item.cpath"
              class="block px-4 py-2 hover:bg-llgray"
              >{{ item.cname }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </li>
  </div>
</template>
