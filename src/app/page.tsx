'use client'
import { Catalago } from "@/components/Catalogo";
import { produtos } from "@/constants/produtos";
import { carrinhoContext } from "@/data/contexts/CarrinhoContext";
import { useContext } from "react";


export default function Home() {
  const {adicionarItem} = useContext(carrinhoContext)

  return (
    <div className="">
      <Catalago adicionar={adicionarItem} itens={produtos} />
    </div>
  );
}
