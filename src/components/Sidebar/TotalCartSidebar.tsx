import CartItem from '@/data/model/CartItem';
import Link from 'next/link';

export interface TotalCartSidebarProps {
  items: CartItem[];
}

export default function TotalCartSidebar(props: TotalCartSidebarProps) {
  const total = props.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow-md w-full flex flex-col gap-4">
      <div className="flex justify-between items-center text-white text-base md:text-lg font-semibold">
        <span>Total:</span>
        <span className="text-yellow-400 text-xl md:text-2xl font-bold">
          {`R$ ${total.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </span>
      </div>
      <Link
        href="/cart"
        className="text-center bg-zinc-700 w-full py-2 md:py-3 rounded-md text-base md:text-lg font-semibold text-white hover:bg-zinc-600 transition-all"
      >
        Ir para o Carrinho
      </Link>
    </div>
  );
}
