import CartItem from '@/data/model/CartItem';

export interface TotalCartProps {
  items: CartItem[];
}

export default function TotalCart(props: TotalCartProps) {
  const total = props.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  return (
    <div
      className="flex items-center justify-between bg-zinc-900 rounded-md p-7 w-full 
      flex-col md:flex-row"
    >
      <div className="flex flex-col text-center md:text-left">
        <span className="text-zinc-500">Total</span>
        <span className="text-3xl font-bold text-yellow-500 my-3">
          {`R$ ${total.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </span>
      </div>

      <button className="bg-green-600 px-4 py-2 rounded-md text-xl mt-3 md:mt-0">
        Finalizar
      </button>
    </div>
  );
}
