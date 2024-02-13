export async function getLista():Promise<Produto[]>{
    const data = await fetch('http://localhost:8080', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
            cache: "no-cache"
    })
    console.log(data)
    return await data.json()
}


interface Produto {
    id: number
    nome: string
    preco: number
}