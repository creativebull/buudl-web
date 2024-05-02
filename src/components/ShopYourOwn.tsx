import Image from "next/image";
import React from "react";

function ShopYourOwn() {
  return (
    <div className="mb-8 mt-32">
      <div className="grid grid-cols-3 gap-4">
        <Image
          src="/img/shop-your-own-1.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
        <Image
          src="/img/shop-your-own-2.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
        <Image
          src="/img/shop-your-own-1.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
      </div>
      <p className="text-[102px] text-center my-16">Shop your own style</p>
      <div className="grid grid-cols-3 gap-4">
        <Image
          src="/img/shop-your-own-3.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
        <Image
          src="/img/top-product-3.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
        <Image
          src="/img/top-product-4.jpg"
          alt="showcase-item"
          width={0}
          height={450}
          className="w-full h-[440px]"
          unoptimized
        />
      </div>
    </div>
  );
}

export default ShopYourOwn;
