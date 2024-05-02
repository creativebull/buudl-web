import Image from "next/image";
import React from "react";

export interface ItemProps {
  name: string;
  price: number;
  photo: string;
}

function ShowcaseItem({ name, price, photo }: ItemProps) {
  return (
    <div className="cursor-pointer hover:-mt-2 transition-all duration-100 ease-in-out">
      <Image
        src={photo}
        alt="showcase-item"
        width={0}
        height={0}
        className="w-[150px] md:w-[250px] lg:w-[450px] h-[180px] lg:h-[450px]"
        unoptimized
      />
      <p className="text-xs lg:text-base">{name}</p>
      <p className="text-xs lg:text-base">PHP {price}</p>
    </div>
  );
}

export default ShowcaseItem;
