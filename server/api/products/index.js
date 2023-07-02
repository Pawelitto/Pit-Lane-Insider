export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    if(query.category){
        let articles = await $fetch(`/products/category/${query.category}`, {
            method: 'GET',
            baseURL: useRuntimeConfig().productsApiUrl,
            params: {
                limit: query.limit,
            },
        })

        return articles;
    } 

    let articles = await $fetch('/products', {
        method: 'GET',
        baseURL: useRuntimeConfig().productsApiUrl,
        params: {
            limit: query.limit,
        },
    })
    
    return articles;
});