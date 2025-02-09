import { StaticImageData } from "next/image";

export default interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: StaticImageData;
}
