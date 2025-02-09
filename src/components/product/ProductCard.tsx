'use client';
import useCart from '@/data/hooks/useCart';
import Product from '@/data/model/Product';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Modal from '../Modal';

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    add(product);
  };

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <div className="w-56 md:w-60 bg-zinc-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-center p-2">
          <div className="w-[200px] h-[200px] relative bg-zinc-900 rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="p-2"
              onClick={handleOpenModal}
            />
          </div>
        </div>

        <div className="p-3 flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-white">{product.name}</h2>
          <p className="text-xs text-gray-400">{product.description}</p>

          <div className="flex justify-between items-center mt-1">
            <span className="text-base font-semibold text-green-400">
              {`R$ ${product.price?.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-blue-600"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>

      {isOpenModal && (
        <Modal
          text={product.fullDescription}
          imageUrl={product.image.src}
          price={product.price}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        >
          {product.name}
        </Modal>
      )}
    </>
  );
}
