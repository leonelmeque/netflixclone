import { API_KEY, WEB_API } from "-utilities/constants/constants";
import axios from "axios";

export async function getMovieDetails(id: number | string) {
    try {
        const response = await axios.get(`${WEB_API}/movie/${id}`)
        const data = await response.data
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getMovies(resource:string) {
    try {
        const response = await axios.get(`${WEB_API}/movie/${resource}?api_key=${API_KEY}`)
        const data = await response.data
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

