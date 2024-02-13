import Link from "next/link";
import { Carrinho } from "./Carrinho";

export function Navbar(){
    return (
        <div className="bg-zinc-900 w-full py-5">
            <div className="flex justify-between items-center px-5">
            <h1 className="text-white text-6xl">Loja</h1>
            <div className="flex gap-5">
                <Link className="link" href="/">Home</Link>
                <Link className="link" href="/produtos">Produtos</Link>
            </div>
            <div className="flex gap-2 items-center text-white text-2xl">Vanderlei 
            <Carrinho />
            </div>
            </div>
        </div>
    )
}