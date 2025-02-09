import React from 'react';
import { LoaderContainer, LoaderSquare } from './styles';

const Modal = () => {
  return (
    <LoaderContainer>
      <LoaderSquare delay="0s" />
      <LoaderSquare delay="-1.4285714286s" />
      <LoaderSquare delay="-2.8571428571s" />
      <LoaderSquare delay="-4.2857142857s" />
      <LoaderSquare delay="-5.7142857143s" />
      <LoaderSquare delay="-7.1428571429s" />
      <LoaderSquare delay="-8.5714285714s" />
    </LoaderContainer>
  );
};

export default Modal;
