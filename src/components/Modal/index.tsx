import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image from 'next/image';
import { ReactNode } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ModalProps {
  children: ReactNode;
  text: string;
  imageUrl: string;
  price: number;
  originalprice: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function Modal({
  children,
  text,
  imageUrl,
  price,
  originalprice,
  isFavorite,
  toggleFavorite,
  onClose,
  onAddToCart,
}: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-2 left-2 flex p-2">
          <button onClick={toggleFavorite} className="text-gray-500 text-2xl">
            {isFavorite ? (
              <FavoriteIcon className="text-red-500" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full text-gray-500 transition"
        >
          <HighlightOffIcon className="w-6 h-6" />
        </button>

        <div className="w-[250px] h-[250px] flex items-center justify-center bg-white rounded-md">
          <Image
            src={imageUrl}
            alt="Imagem do produto"
            layout="intrinsic"
            width={250}
            height={250}
            objectFit="contain"
            className="p-2"
          />
        </div>

        <div className="flex flex-col gap-4 sm:w-2/3">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {children}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {text}
          </p>

          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col  justify-center items-center">
              {originalprice > 0 && (
                <span className="text-sm font-semibold text-red-400 line-through">
                  {Number(originalprice).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              )}
              <span className="text-lg font-bold text-green-500">
                {Number(price).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <button
              onClick={onAddToCart}
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-600"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
