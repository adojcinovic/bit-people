

export const getData = () => {
    return fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(res => res.results)
}