import queryString from 'query-string'

export function get(path, queryInfo) {
    const query = queryString.stringify(queryInfo);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3${path}?${query}`, {
        headers: {
            Authorization: `Bearer UoVuxCIjdE75eyQkrqWZl8nXNygmmjhkiLy9DS_0bVyWgAWVWO22z6uUcflyyEALSH8Cs1EOvyGemb4FzuMUfoTC1aGYrarIrDkMvEZAhEQv9BAv54XGqB3L7tRaXnYx`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}