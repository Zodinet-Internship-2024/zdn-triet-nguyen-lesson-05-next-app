import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  id: number;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
  discountPercentage: number;
}

const ProductCard: React.FC<propsType> = ({
  id,
  img,
  title,
  desc,
  rating,
  discountPercentage,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-base ">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-base ">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-base ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-base ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-base ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Link href={`/product/${id}`} className="max-w-[400px]">
      <div>
        <Image
          className="w-full h-[250px] "
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <div>{generateRating(Math.round(rating))}</div>
        <h2 className="font-semibold text-base uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px] hidden">{desc}</p>

        <div className="font-bold flex gap-4">
          ${(price * (1 - discountPercentage / 100)).toFixed(0)}
          <del className="text-gray-500 font-normal">${price}</del>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
