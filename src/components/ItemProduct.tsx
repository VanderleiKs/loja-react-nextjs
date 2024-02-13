import { Item } from "@/types/Item";
import { Moeda } from "@/utils/Moeda";
import { ShoppingBasket, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ItemProps{
    item : Item
    adicionar: (item: Item) => void
}

export function ItemProduct({item, adicionar}: ItemProps){
    return (
        <div className={`
        flex flex-col gap-3
        overflow-hidden
        border border-zinc-500
        p-1
        bg-zinc-900 rounded-md
        text-zinc-100
        pb-2
        `}>
            <Image className="rounded-md" src={item.imgUrl} width={300} height={200} alt={item.name} unoptimized/>
            <div className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-green-400 font-bold">{Moeda.format(item.price)}</span>
            </div>
            <span>{item.descrition}</span>
            <button 
                className="flex justify-center items-center gap-2 py-2 rounded-md w-full bg-blue-500 hover:bg-blue-600"
                onClick={() => adicionar(item)}>
                <ShoppingCart/>Adicionar ao carrinho
            </button>
        </div>
    )
}