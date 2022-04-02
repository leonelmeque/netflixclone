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

const _data:ExtractArrayElements<typeof elements> 

function something(){
    console.log(elements.map(({name})=>name))
}