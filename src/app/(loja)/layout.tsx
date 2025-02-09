"use client";
import { CartProvider } from "@/data/contexts/CartContext";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <CartProvider>{children}</CartProvider>;
}
