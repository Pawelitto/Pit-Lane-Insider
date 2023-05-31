<template>
  <div class="contact-container">
    <section
      class="text-gray-800 bg-white rounded-lg mx-3 mt-32 sm:p-6 lg:w-3/4 xl:w-2/4"
    >
      <div class="flex flex-wrap">
        <div
          class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full px-3 md:w-6/12 lg:px-6"
        >
          <h2 class="text-3xl font-bold mb-4 mt-2 text-green-500">
            Skontaktuj się z nami
          </h2>
          <p class="text-gray-500 mb-6">
            Chcesz poznać więcej szczegółów? Skontaktuj się z nami już teraz
            przez formularz na naszej stronie internetowej! Czekamy na Twój
            feedback i pytania. Dołącz do naszej społeczności już
            <span class="text-green-500 font-medium">dziś!</span>
          </p>
          <p class="text-gray-500 mb-2">New York, 94126, United States</p>
          <p class="text-gray-500 mb-2">+48 234 567 819</p>
          <p class="text-gray-500 mb-2">pit.insider@gmail.com</p>
        </div>
        <div
          class="grow-0 shrink-0 basis-auto mb-4 md:mb-0 w-full md:w-6/12 px-3 lg:px-6"
        >
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none focus:border-2"
                id="exampleInput7"
                placeholder="Imię"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none focus:border-2"
                id="exampleInput8"
                placeholder="Adres email"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none focus:border-2"
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Wiadomość..."
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer focus:border-2"
                id="exampleCheck87"
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck87"
                >Wyślij mi kopię wiadomości</label
              >
            </div>
            <button
              type="submit"
              class="w-full px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.contact-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(../../assets/img/mapka.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
