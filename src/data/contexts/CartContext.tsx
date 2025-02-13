import { createContext, useEffect, useState } from 'react';
import CartItem from '../model/CartItem';
import useLocalStorage from '../hooks/useLocalStorage';
import Product from '../model/Product';

interface CartContextProps {
  items: CartItem[];
  quantityOfItems: number;
  add: (item: Product) => void;
  remove: (item: Product) => void;
  search: string;
  setSearch: (value: string) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export function CartProvider(props: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [search, setSearch] = useState('');
  const { set, get } = useLocalStorage();

  useEffect(() => {
    const cart = get('cart');
    if (cart) {
      setItems(cart);
    }
  }, [get]);

  function add(product: Product) {
    const index = items.findIndex((i) => i.product.id === product.id);

    if (index === -1) {
      changeItems([...items, { product, quantity: 1 }]);
    } else {
      const newItems = [...items];
      newItems[index].quantity++;
      changeItems(newItems);
    }
  }

  function remove(product: Product) {
    const newItems = items
      .map((i) => {
        if (i.product.id === product.id) {
          i.quantity--;
        }
        return i;
      })
      .filter((i) => i.quantity > 0);
    changeItems(newItems);
  }

  function changeItems(newItems: CartItem[]) {
    setItems(newItems);
    set('cart', newItems);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        remove,
        search,
        setSearch,
        get quantityOfItems() {
          return items.reduce((total, item) => total + item.quantity, 0);
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
