import CartItem from '@/data/model/CartItem';
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react';
import Image from 'next/image';

export interface CartItemAreaProps {
  item: CartItem;
  add?: (item: CartItem) => void;
  remove?: (item: CartItem) => void;
}

export default function CartItemArea(props: CartItemAreaProps) {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden p-4">
      <div className="w-[100px] h-[100px] flex items-center justify-cente rounded-md">
        <Image
          src={props.item.product.image}
          alt={props.item.product.name}
          width={100}
          height={100}
          objectFit="contain"
          className="p-2"
        />
      </div>

      <div className="flex flex-col justify-center flex-1">
        <span className="text-xl font-bold">{props.item.product.name}</span>
        <span className="text-sm text-zinc-400">
          {props.item.product.description}
        </span>
        <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
          <span>{`R$ ${props.item.product.price?.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}</span>
          <IconX size={20} />
          <span>{props.item.quantity}</span>
          <span>=</span>
          <span className="text-yellow-500">
            {`R$ ${(
              props.item.quantity * (props.item.product.price ?? 0)
            ).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center px-5">
        <button onClick={() => props.remove?.(props.item)}>
          <IconMinus />
        </button>
        <span className="flex px-4 py-2 rounded-md bg-black">
          {props.item.quantity}
        </span>
        <button onClick={() => props.add?.(props.item)}>
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
