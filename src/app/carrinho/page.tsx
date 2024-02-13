'use client'
import { CarrinhoItens } from "@/components/CarrinhoItens"
import { carrinhoContext } from "@/data/contexts/CarrinhoContext"
import { Moeda } from "@/utils/Moeda"
import { Trash2Icon, TrashIcon } from "lucide-react"
import { useContext } from "react"

export default async function CarrinhoPage(){
    const {itens, removerItem} = useContext(carrinhoContext)

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className=" text-green-400 text-3xl font-bold">Carrinho</h1>
            {itens.length === 0 ? <p className="text-red-400">Nenhum item no carrinho</p>
            :    
            <table className="border border-x-2 border-slate-500 bg-white">
                <thead>
                    <tr className="text-purple-400 font-bold border *:py-2">
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    {itens.map(item => (
                        <tr className="border *:py-5 *:px-12" key={item.item.id}>
                            <td>{item.item.name}</td>
                            <td>{Moeda.format(item.item.price)}</td>
                            <td>{item.quantidade}</td>
                            <td><Trash2Icon className="text-red-400 cursor-pointer" onClick={() => {removerItem(item.item)}} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
            {/* <CarrinhoItens /> */}
        </div>
    )
}