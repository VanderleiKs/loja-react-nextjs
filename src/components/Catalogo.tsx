import { Item } from "@/types/Item"
import { ItemProduct } from "./ItemProduct"

interface ItensProps{
    itens: Item[]
    adicionar: (item: Item) => void
}

export function Catalago({itens, adicionar}: ItensProps){
    itens.map
    return (
        <div className="flex gap-5 flex-wrap p-5">
      {itens.map(item => {
        return (
                <ItemProduct key={item.id} item={item} adicionar={adicionar} />
                )
            })}
    </div>
    )
}