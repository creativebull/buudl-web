"use client";
import InfoSlider from "@/components/InfoSlider";
import Jumbotron from "@/components/Jumbotron";
import PopularBrands from "@/components/PopularBrands";
import SellingInfo from "@/components/SellingInfo";
import ShopInCategory from "@/components/ShopInCategory";
import ShopSpotlight from "@/components/ShopSpotlight";
import ShopYourOwn from "@/components/ShopYourOwn";
import Showcase from "@/components/Showcase";
import { ItemProps } from "@/components/ShowcaseItem";
import Steals from "@/components/Steals";
import Subscribe from "@/components/Subscribe";
import TopProducts from "@/components/TopProducts";
import WhatWeValue from "@/components/WhatWeValue";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const populars: ItemProps[] = [
  { name: "Denim Pants", price: 200, photo: "/img/denim.jpg" },
  { name: "Polo Shirt", price: 120, photo: "/img/polo-shirt.jpg" },
  { name: "Jorts", price: 80, photo: "/img/denim.jpg" },
  { name: "Shoes", price: 340, photo: "/img/adidas-shoes.avif" },
];

export default function Home() {
  const [popularItems, setPopularItems] = useState([]);
  const [shopSpotlights, setShopSpotlights] = useState([]);

  const fetchPopularItems = async () => {
    try {
      const res = await axios.get("/landing-page/getPopularItem");
      setPopularItems(
        res.data.data.map((item: any) => ({
          name: item.product_name,
          price: +item.price,
          photo: item.image,
        }))
      );
    } catch (error) {
      console.log("🚀 ~ fetchPopularItems ~ error:", error);
    }
  };

  const fetchShopSpotlights = async () => {
    try {
      const res = await axios.get("/landing-page/shopSpotlight");
      setShopSpotlights(res.data.data.map((item: any) => ({
        name: item.shop_name
      })));
    } catch (error) {
      console.log("🚀 ~ fetchShopSpotlights ~ error:", error);
    }
  };

  useEffect(() => {
    fetchPopularItems();
    fetchShopSpotlights();
  }, []);

  return (
    <main className="">
      <Jumbotron />
      <Showcase title="Popular Now" items={popularItems} className="my-6" />
      <div className="hidden lg:block">
        <ShopInCategory />
      </div>
      <TopProducts />
      <div className="hidden lg:block">
        <ShopYourOwn />
      </div>
      <div className="block lg:hidden">
        <SellingInfo />
      </div>
      <Steals />
      <PopularBrands />
      <ShopSpotlight spotlights={shopSpotlights} />
      <div className="hidden lg:block">
        <SellingInfo />
      </div>
      <Showcase
        title="Featured Items"
        items={populars}
        className="mb-6 mt-24"
      />
      <InfoSlider />
      <div className="hidden lg:block">
        <WhatWeValue />
      </div>
      <Subscribe />
    </main>
  );
}
