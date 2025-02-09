"use client";
import CartItemArea from "@/components/cart/CartItemArea";
import EmptyCart from "@/components/cart/EmptyCart";
import TotalCart from "@/components/cart/TotalCart";
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
  const { items, add, remove } = useCart();
  return (
    <Page className="flex flex-col gap-10">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <CartItemArea
                key={item.product.id}
                item={item}
                add={(item) => add(item.product)}
                remove={(item) => remove(item.product)}
              />
            ))}
          </div>
          <TotalCart items={items} />
        </>
      )}
    </Page>
  );
}
