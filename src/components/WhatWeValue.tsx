import { Asterisk, Hash, Tag } from "lucide-react";
import React from "react";

function WhatWeValue() {
  return (
    <div className="bg-[url('/img/bg-what-we-value.svg')] bg-contain bg-no-repeat my-24 py-16">
      <div className="px-10 max-w-screen-2xl mx-auto my-10 text-center">
        <p className="text-2xl">What We Value</p>
        <div className="grid grid-cols-3 gap-x-4 mt-10">
          <div>
            <Asterisk size={80} className="mx-auto" />
            <p className="text-lg mb-8 mt-24">Empowered community</p>
            <p>
              In essence, our brand stands as a beacon of possibility, proving
              that style, sustainability, and savings can coexist harmoniously.{" "}
            </p>
          </div>
          <div>
            <Hash size={80} className="mx-auto" />
            <p className="text-lg mb-8 mt-24">Unique finds</p>
            <p>
              In essence, our brand stands as a beacon of possibility, proving
              that style, sustainability, and savings can coexist harmoniously.{" "}
            </p>
          </div>
          <div>
            <Tag size={80} className="mx-auto" />
            <p className="text-lg mb-8 mt-24">Affordability</p>
            <p>
              In essence, our brand stands as a beacon of possibility, proving
              that style, sustainability, and savings can coexist harmoniously.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeValue;
