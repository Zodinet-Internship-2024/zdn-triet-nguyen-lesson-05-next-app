'use client';

import React from "react";
import { useState } from "react";

interface ListPhotoProps {
    listImages: string[];
}


const ListPhoto: React.FC<ListPhotoProps> = ({
    listImages
  }) => {
  const [activeImg, setActiveImage] = useState(listImages[0]);

  const [amount, setAmount] = useState(1);
  return (
    <div className="flex flex-col gap-6 lg:w-1/3">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          {listImages.map((img) => (
            <img
              src={img}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>
  );
};

export default ListPhoto;
