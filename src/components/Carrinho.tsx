'use client'

import { carrinhoContext } from "@/data/contexts/CarrinhoContext";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Router } from "next/router";
import { useContext, useState } from "react";

interface Carrinho{
    item : string
    quantidade: number
}

export function Carrinho(){
    const {itens, adicionarItem} = useContext(carrinhoContext)
   // const [itens, setItens] = useState<Carrinho[]>([{item: 'camisa', quantidade: 2}])

    function carrinho(){
        console.log(itens)
    }

    return (
        <Link className='flex cursor-pointer' href='/carrinho'>
            <ShoppingCartIcon size={32} className='text-green-400'/>
            {itens.length > 0 &&
            (
            <div className='relative right-3 bottom-1'>
                <div className='flex justify-center items-center bg-red-900 size-[1.1rem] p-1 rounded-full text-green-100 text-sm'>
                    {itens.length}
                </div>
            </div>
            )}
            </Link>
    )
}