import Link from "next/link";
import React from "react";
import ShowcaseItem, { ItemProps } from "./ShowcaseItem";
import clsx from "clsx";

interface ShowcaseProps {
  title: string;
  items: ItemProps[];
  className?: string;
}

function Showcase({ title, items, className }: ShowcaseProps) {
  return (
    <div className={clsx("px-4 lg:px-10 max-w-screen-2xl mx-auto", className)}>
      <div className="flex justify-between items-end">
        <p className="lg:text-xl">{title}</p>
        <Link href="#">
          <p className="lg:text-lg">More</p>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-x-4 py-6 w-[600px] md:w-[800px] lg:w-[1800px]">
          {items.map((item) => (
            <ShowcaseItem
              key={item.name}
              name={item.name}
              price={item.price}
              photo={item.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
