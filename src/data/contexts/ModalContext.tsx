'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '@/components/Modal';

interface ModalContextProps {
  openModal: (props: ModalProps) => void;
  closeModal: () => void;
}

export interface ModalProps {
  title: string;
  text: string;
  imageUrl: string;
  price: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
  onAddToCart: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (props: ModalProps) => {
    setModalProps(props);
  };

  const closeModal = () => {
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalProps && (
        <Modal
          {...modalProps}
          onClose={closeModal}
        >
          {modalProps.title}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export default ModalContext;