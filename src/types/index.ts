import { bool } from "prop-types"

export type IconNames<T> = keyof T


const elements = [
    {
        name: "Leo",
        age: 12
    },
    {
        name: "Marta",
        age: 19
    },
    {
        name: "Puko",
        age: 32
    }
]

type ExtractArrayElements<T> = T extends (infer R)[] ? R : T

// const _data:ExtractArrayElements<typeof elements> 

function something(){
    console.log(elements.map(({name})=>name))
}


export interface MovieMetadata {
    adult: boolean
    backdrop_path: string | string[]
    genre_ids: number[]
    id: number
    original_title: string
    overview: string
    poster_path: string
    popularity: number
    release_date: string
    title: string
    video: boolean
}
export interface MovieInterface {
    cast: string
    genres: string
    movieType: string
    description: string
    match: number
    year: number | string
    rated: string | number
    duration: string
    mini: boolean
}

