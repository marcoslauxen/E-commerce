import useCart from '@/data/hooks/useCart';
import { IconShoppingCart, IconHeart } from '@tabler/icons-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import EmptyCart from '../cart/EmptyCart';
import { CartItemSidebar } from '../../components/Sidebar/CartItemSidebar';
import TotalCartSidebar from '../Sidebar/TotalCartSidebar';

export default function Cart() {
  const { quantityOfItems } = useCart();
  const { items, add, remove } = useCart();

  return (
    <div className="flex space-x-4">
      <div className="cursor-pointer">
        <IconHeart size={32} stroke={1} />
      </div>

      <Sheet>
        <SheetTrigger>
          <div className="flex relative">
            <IconShoppingCart size={32} stroke={1} />
            <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-600 rounded-full flex justify-center items-center text-xs">
              {quantityOfItems}
            </div>
          </div>
        </SheetTrigger>
        <SheetTitle>
          <SheetContent className="bg-zinc-900 text-white flex flex-col h-screen max-h-screen">
            <SheetHeader className="text-xl font-bold text-center border-b border-zinc-700 pb-3">
              Seu Carrinho
            </SheetHeader>
            <SheetDescription className="mt-4 text-zinc-400 flex-1 overflow-y-auto pr-2">
              {items.length === 0 ? (
                <EmptyCart />
              ) : (
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <CartItemSidebar
                      key={item.product.id}
                      item={item}
                      add={(item) => add(item.product)}
                      remove={(item) => remove(item.product)}
                    />
                  ))}
                </div>
              )}
            </SheetDescription>
            {items.length === 0 ? null : (
              <SheetFooter className="bg-zinc-800 p-4 rounded-b-lg shadow-md w-full mt-auto">
                <TotalCartSidebar items={items} />
              </SheetFooter>
            )}
          </SheetContent>
        </SheetTitle>
      </Sheet>
    </div>
  );
}
