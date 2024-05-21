"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewProducts = () => {
  const [productsData, setProductsData] = useState<ProductResponse | null>(
    null
  );
  const [categories, setCategories] = useState<string[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const products = productsData?.products;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setProductsData);
  }, []);

  useEffect(() => {
    const url = selectedCategory
      ? `https://dummyjson.com/products/category/${selectedCategory}`
      : "https://dummyjson.com/products";
    fetch(url)
      .then((res) => res.json())
      .then(setProductsData);
  }, [selectedCategory]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <div>
      <div className="container py-16 ">
        <div className="flex gap-6">
          <div className="my-6">
            <h2 className="font-semibold text-base text-[#6C7275] m-1">
              CATEGORIES
            </h2>
            <Select onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger className="w-[260px] h-[48px] font-bold border-2 border-[#6C7275]">
                <SelectValue placeholder="All Products" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="my-6">
            <h2 className="font-semibold text-base text-[#6C7275] m-1">
              PRICE
            </h2>
            <Select>
              <SelectTrigger className="w-[260px] h-[48px] font-bold border-2 border-[#6C7275]">
                <SelectValue placeholder="All Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200-300">$200 - $300</SelectItem>
                <SelectItem value="300-400">$300 - $400</SelectItem>
                <SelectItem value="400-500">$400 - $500</SelectItem>
                <SelectItem value="500-10000">$500 - $10000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center lg:grid-col-3 xl:grid-cols-4 gap-1 xl:gap-x-2 xl:gap-y-5">
          {products &&
            products.map((item) => (
              <ProductCard
                id={item.id}
                key={item.id}
                img={item.images[0]}
                title={item.title}
                desc={item.description}
                rating={item.rating}
                discountPercentage={item.discountPercentage}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
