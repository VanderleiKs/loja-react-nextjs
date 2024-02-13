import type { Metadata } from "next";
import "./globals.css";
import { CarrinhoProvider } from "@/data/contexts/CarrinhoContext";
import { Navbar } from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "next/head"



export const metadata: Metadata = {
  title: "Loja",
  description: "Loja de produtos variados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CarrinhoProvider>
      <html lang="pt-BR">
        <body className="bg-zinc-800">
            <Navbar />
            {children}
        </body>
      </html>
    </CarrinhoProvider>
  );
}
