"use client";

import React from "react";
import { useState } from "react";

export const ProductControlPanel = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-row items-center gap-12">
      <div className="flex flex-row items-center">
        <button
          className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
          onClick={() => setAmount((prev) => prev - 1)}
        >
          -
        </button>
        <span className="py-4 px-6 rounded-lg">{amount}</span>
        <button
          className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
          onClick={() => setAmount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button className="bg-black text-white font-semibold py-3 px-16 rounded-xl h-full">
        Add to Cart
      </button>
    </div>
  );
};
