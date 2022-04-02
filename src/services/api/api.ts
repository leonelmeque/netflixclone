import { WEB_API } from "@/utilities/constants/constants";

export async function getMovieDetails(id: number) {
    const res = await fetch(`${WEB_API}/movie/${id}`)
    return await res.json()
}