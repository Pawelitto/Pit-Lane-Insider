export default defineEventHandler(async (event) => {
    let articles = await $fetch('/top-headlines', {
        method: 'GET',
        baseURL: useRuntimeConfig().newsApiUrl,
        params: {
            apiKey: useRuntimeConfig().newsApiKey,
            country: 'us',
            pageSize: 6,
            page: 1,
        },
    })
    return articles.articles;
});