import useCart from '@/data/hooks/useCart';
import {
  IconShoppingCart,
  IconHeart,
  // IconHeartFilled,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Cart() {
  const { quantityOfItems } = useCart();

  return (
    <div className="flex space-x-4">
      <div className="cursor-pointer">
        <IconHeart size={32} stroke={1} />
      </div>
      <Link href="/cart">
        <div className="flex relative">
          <IconShoppingCart size={32} stroke={1} />
          <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-600 rounded-full flex justify-center items-center text-xs">
            {quantityOfItems}
          </div>
        </div>
      </Link>
    </div>
  );
}
