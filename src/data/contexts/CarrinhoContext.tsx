'use client'
import { Item } from "@/types/Item"
import { ItemCarrinho } from "@/types/ItemCarrinho"
import { createContext, useState } from "react"


interface CarrinhoContextProps{
    itens: ItemCarrinho[]
    adicionarItem: (item: Item) => void
    
  }

export const carrinhoContext = createContext<CarrinhoContextProps>({} as any)

export function CarrinhoProvider(props: any){
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarItem(item: Item) {
      const itemAtual = itens.find((i) => i.item.id === item.id) ?? { item: item,  quantidade: 0}
      const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
      const outrosItens = itens.filter((i) => i.item.id !== item.id)
      setItens([...outrosItens, novoItem])
      console.log(itens)
  }

  return (
    <carrinhoContext.Provider value={{
        itens, adicionarItem
    }}>
        {props.children}
    </carrinhoContext.Provider>
  )
}