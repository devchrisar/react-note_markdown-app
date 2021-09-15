export async function post(url,data){
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
}
export async function put(url,data){
    const response = await fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
}
export async function get(url){
    const response = await fetch(url);
    const json = await response.json();

    return json;
}