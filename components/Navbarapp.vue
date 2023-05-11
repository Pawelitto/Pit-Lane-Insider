<template>
  <nav class="navbarback border-gray-200 bg-gray-50">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo" /> -->
        <span class="self-center text-2xl tracking-widest whitespace-nowrap"
          >Pit Lane Insider</span
        >
      </a>
      <div class="hidden md:block ml-auto flex space-x-12 tracking-widest">
        <a href="/">BLOG</a>
        <button
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          class="tracking-widest">
          WYNIKI
          <svg
            class="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          id="dropdownNavbar"
          class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Klasyfikacja</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Kierowcy</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Zespoły</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Statystyki</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Kalendarz</a
              >
            </li>
          </ul>
        </div>
        <a href="/">SKLEP</a>
        <a href="/">KONTAKT</a>
      </div>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        class="md:invisible inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2"
        aria-controls="navbar-hamburger"
        aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full" id="navbar-hamburger">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-200 active-element"
              aria-current="page"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-200"
              >Sklep</a
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 md:p-0 md:w-auto block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-200">
              Wyniki
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Klasyfikacja</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Kierowcy</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Zespoły</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Statystyki</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Kalendarz</a
                  >
                </li>
              </ul>
              <!-- <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Sign out</a
                >
              </div> -->
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-200"
              >Kontakt</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
