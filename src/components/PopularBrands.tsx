import Image from "next/image";
import Link from "next/link";
import React from "react";
import Showcase from "./Showcase";
import { ItemProps } from "./ShowcaseItem";

const brands = [
  "/img/nike.jpg",
  "/img/ysl.jpeg",
  "/img/balenciaga.jpg",
  "/img/coach.jpeg",
];

const populars: ItemProps[] = [
  { name: "Denim Pants", price: 200, photo: "/img/denim.jpg" },
  { name: "Polo Shirt", price: 120, photo: "/img/polo-shirt.jpg" },
  { name: "Jorts", price: 80, photo: "/img/denim.jpg" },
  { name: "Shoes", price: 340, photo: "/img/adidas-shoes.avif" },
];

function PopularBrands() {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 my-8">
      <p className="lg:text-xl mb-4 lg:mb-8">Popular Brands</p>
      <div className="overflow-x-auto">
        <div className="flex gap-x-4 lg:gap-x-0 max-w-[1100px] mx-auto">
          {brands.map((brand) => (
            <Image
              key={brand}
              alt="brand"
              width={0}
              height={0}
              src={brand}
              className="w-24 lg:w-[250px] h-24 lg:h-[240px] rounded-full border border-black"
              unoptimized
            />
          ))}
        </div>
      </div>
      <Showcase title="" items={populars} className="my-6" />
    </div>
  );
}

export default PopularBrands;
