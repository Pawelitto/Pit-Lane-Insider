export default defineEventHandler(async (event) => {
    let articles = await $fetch('/products', {
        method: 'GET',
        baseURL: useRuntimeConfig().productsApiUrl,
        params: {
            limit: 4,
        },
    })
    return articles;
});