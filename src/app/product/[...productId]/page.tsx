import ListPhoto from "@/components/ListPhoto";
import { ProductControlPanel } from "@/components/ProductControlPanel";
import React from "react";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const fetchProduct = async (productId: string) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();
  return product;
};

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const product: Product = await fetchProduct(productId);

  // return <div>{JSON.stringify(product)}</div>;

  return (
    <div className="flex flex-col py-5 justify-evenly lg:flex-row gap-2 lg:items-center">
      <ListPhoto listImages={product.images} />
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <p className="text-gray-700">{product.description}</p>
        <div className="text-2xl font-bold flex gap-4">
          ${(product.price * (1 - product.discountPercentage / 100)).toFixed(0)}
          <del className="text-gray-500 font-normal">${product.price}</del>
        </div>
        <ProductControlPanel />
      </div>
    </div>
  );
};

export default ProductPage;
