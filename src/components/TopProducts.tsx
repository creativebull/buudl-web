import React from "react";

const products = [
  {
    name: "Skirts",
    count: "4.5k",
    photo: "/img/top-product-1.jpg",
  },
  {
    name: "Dresses",
    count: "3.5k",
    photo: "/img/top-product-2.jpg",
  },
  {
    name: "Tops",
    count: "2.8k",
    photo: "/img/top-product-3.jpg",
  },
  {
    name: "Shoes",
    count: "2k",
    photo: "/img/top-product-4.jpg",
  },
];

function TopProducts() {
  return (
    <div className="px-4 lg:px-10 max-w-screen-2xl mx-auto my-8">
      <p className="text-xs lg:text-xl">People are talking about...</p>
      <div className="overflow-x-scroll mt-4">
        <div className="flex gap-x-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col justify-end py-8 h-[300px] lg:h-[470px] w-[226px] lg:w-full rounded-2xl text-center bg-cover"
              style={{
                backgroundImage: `url(${product.photo})`,
              }}
            >
              <p className="text-base lg:text-2xl text-white w-[226px]">{product.name}</p>
              <p className="text-xs lg:text-base text-white">
                {product.count} searches this week
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
