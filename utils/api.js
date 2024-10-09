import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

async function fetchGames() {
    const endpoint = `${BASE_URL}/games`

    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (err) { throw err }
}

async function fetchGameById(id) {
    const endpoint = `${BASE_URL}/games/${id}`

    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (err) { throw err }
}

async function createGame(game) {
    const endpoint = `${BASE_URL}/games`

    try {
        const response = await axios.post(endpoint, game)
        return response.data
    } catch (err) { throw err }
}

async function updateGame(id, game) {
    const endpoint = `${BASE_URL}/games/${id}`

    try {
        const response = await axios.put(endpoint, game)
        return response.data
    } catch (err) { throw err }
}

async function deleteGame(id) {
    const endpoint = `${BASE_URL}/games/${id}`

    try {
        const response = await axios.delete(endpoint)
        return response.data
    } catch (err) { throw err }
}

export { fetchGames, fetchGameById, createGame, updateGame, deleteGame }