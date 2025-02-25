'use client';

import useCart from '@/data/hooks/useCart';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useLocalStorage from '@/data/hooks/useLocalStorage';
import Product from '@/data/model/Product';

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const { get, set } = useLocalStorage();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites: string[] = get('favorites') || [];
    setIsFavorite(storedFavorites.includes(product.id.toString()));
  }, [get, product.id]);

  const handleAddToCart = () => {
    add(product);
  };

  const toggleFavorite = () => {
    let storedFavorites: string[] = get('favorites') || [];

    if (storedFavorites.includes(product.id.toString())) {
      storedFavorites = storedFavorites.filter(
        (id) => id !== product.id.toString()
      );
      setIsFavorite(false);
    } else {
      storedFavorites.push(product.id.toString());
      setIsFavorite(true);
    }

    set('favorites', storedFavorites);
  };

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <div className="w-56 md:w-60 bg-zinc-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
        {product.id === 2 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold p-1">
            Promoção
          </div>
        )}
        <div className="flex justify-between p-2">
          <button
            onClick={toggleFavorite}
            className="text-white text-2xl cursor-pointer"
          >
            {isFavorite ? (
              <FavoriteIcon className="text-red-500" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </button>
        </div>

        <div className="flex justify-center p-2">
          <div className="w-[200px] h-[200px] relative bg-zinc-900 rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
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
            <div className="flex flex-col gap-1">
              {product.originalprice > 0 && (
                <span className="text-sm font-semibold text-red-400 line-through">
                  {`R$ ${product.originalprice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                </span>
              )}
              <span className="text-base font-semibold text-green-400">
                {`R$ ${product.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </span>
            </div>
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
          text={product.fulldescription}
          imageUrl={product.image}
          price={product.price}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        >
          {product.name}
        </Modal>
      )}
    </>
  );
}
