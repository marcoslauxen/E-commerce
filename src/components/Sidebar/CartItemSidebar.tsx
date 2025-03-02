import CartItem from '@/data/model/CartItem';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';

export interface CartItemSidebarProps {
  item: CartItem;
  add?: (item: CartItem) => void;
  remove?: (item: CartItem) => void;
}

export function CartItemSidebar(props: CartItemSidebarProps) {
  return (
    <div className="flex items-center justify-between bg-zinc-900 p-3 rounded-lg shadow-md w-full">
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] rounded-md overflow-hidden bg-zinc-700">
          <Image
            src={props.item.product.image}
            alt={props.item.product.name}
            width={50}
            height={50}
            objectFit="contain"
            className="p-1"
          />
        </div>
        <div className="flex flex-col text-white text-sm">
          <span className="font-semibold max-w-[120px] truncate">
            {props.item.product.name}
          </span>
          <span className="text-yellow-400 font-bold">
            {`R$ ${(
              props.item.product.price * props.item.quantity
            ).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-zinc-800 px-2 py-1 rounded-md">
        <button
          onClick={() => props.remove?.(props.item)}
          className="text-white p-1"
        >
          {props.item.quantity > 1 ? (
            <IconMinus size={16} />
          ) : (
            <IconTrash size={16} />
          )}
        </button>
        <span className="text-white font-bold text-sm">
          {props.item.quantity}
        </span>
        <button
          onClick={() => props.add?.(props.item)}
          className="text-white p-1"
        >
          <IconPlus size={16} />
        </button>
      </div>
    </div>
  );
}
