import { baseImgUrl } from '@/Url';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  price: number;
  id?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc, price, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-[350px]">
      <img src={`${baseImgUrl}/${imageSrc}`} alt={title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold mb-1">
        <a href={"/product-detail?id=" + id} target="_blank">
          {title}
        </a>
      </h2>
      <p className="text-gray-600">{price}</p>
    </div >
  );
};

export default ProductCard;
