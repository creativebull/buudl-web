import Image from "next/image";
import React from "react";

const Spotlight = ({ spotlight }: { spotlight: string }) => {
  return (
    <div className="bg-gray-300 min-w-[350px] min-h-[320px] rounded-lg relative">
      <div className="w-full bg-yellow-100 bottom-0 absolute py-6 px-4 flex">
        <div className="w-[150px] h-[150px] rounded-full bg-primary -mt-[100px]"></div>
        <p className="text-lg text-opacity-70">{spotlight}</p>
      </div>
    </div>
  );
};

type ShopSpotlightProps = {
  spotlights: { name: string }[];
};

function ShopSpotlight({ spotlights }: ShopSpotlightProps) {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 my-8">
      <div className="flex justify-between">
        <p className="lg:text-xl mb-4 lg:mb-8">Shop Spotlight</p>
        <Image
          alt="star"
          width={0}
          height={0}
          className="w-8 lg:w-[100px] h-8 lg:h-[100px] lg:-mt-10"
          src="/img/icons/ic-star-yellow.svg"
        />
      </div>
      <div className="overflow-x-scroll">
        <div className="flex gap-x-4 w-[600px] md:w-[800px] lg:w-[1000px]">
          {spotlights.map((spotlight) => (
            <Spotlight key={spotlight.name} spotlight={spotlight.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopSpotlight;
