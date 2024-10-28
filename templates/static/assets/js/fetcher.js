const BASE_API = "http://localhost:8000"

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
    } else {
        alert(response.detail)
    }

}