export async function graphqlRequest(query) {
    const url = process.env.URL
    const headers = { 'Content-Type' : ' application/json'}

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query),
        cache: 'no-store'
    })
    
    const resJson = await res.json()
    return resJson
}

