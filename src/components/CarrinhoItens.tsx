import { getLista } from "@/api/lista"

export async function CarrinhoItens() {
    const result = await getLista()
    return (
        <div>
            {result.length > 0 && result.map(l => (
                <div className="flex justify-center gap-3 items-center" key={l.id}>
                <p className="flex justify-center items-center text-blue-400 text-2xl">{l.id}</p>
                <p className="flex justify-center items-center text-red-400 text-2xl">{l.nome}</p>
                <p className="flex justify-center items-center text-red-400 text-2xl">{l.preco}</p>
                </div>
            ))}
        </div>
    )
  }