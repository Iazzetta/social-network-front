// const BASE_API = "http://localhost:8000"
const BASE_API = "https://api.xera.com.br"

export const CachedFetcher = async (configFetch) => {

    const cachedResult = localStorage.getItem(`${configFetch.cache.key}-${configFetch.cache.id}`)
    if (cachedResult) {
        return JSON.parse(cachedResult)
    }

    const response = await Fetcher(configFetch);

    localStorage.setItem(`${configFetch.cache.key}-${configFetch.cache.id}`, JSON.stringify(response))

    return response
}

export const Fetcher = async (configFetch) => {
    const r = await fetch(BASE_API + configFetch.url, {
        method: configFetch.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('__token'),
        },
        body: configFetch.data ? JSON.stringify(configFetch.data):null
    })

    const response = await r.json();

    if (r.status == 200) {
        return response
    } else if (r.status == 401) {
        window.location.href = '/login'
    } else {
        alert(response.detail)
    }

}