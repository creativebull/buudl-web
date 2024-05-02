import { ArrowUpRight } from "lucide-react";
import React from "react";

const categories = ["Women", "Men", "Kids", "Everything"];

function ShopInCategory() {
  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto px-10 my-8">
      <div>
        <div className="flex items-center justify-center w-[155px] h-[155px] bg-pink-300 rounded-full -rotate-12 shadow-lg">
          <p className="text-xl">buudl</p>
        </div>
        <div className="-mt-4 ml-8">
          <p className="text-2xl">Shop In</p>
          <p className="text-lg">Show are you shopping for?</p>
        </div>
      </div>
      <div className="max-w-[688px] w-full mr-[4vw]">
        {categories.map((category) => (
          <div
            key={category}
            className="w-full border-b-black hover:border-b-secondary border-b-2 pb-4 mb-2 cursor-pointer group"
          >
            <div className="flex justify-between items-end">
              <p className="text-xl group-hover:text-secondary">{category}</p>
              <ArrowUpRight className="text-secondary" size={60} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopInCategory;
