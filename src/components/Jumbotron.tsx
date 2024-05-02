import React from "react";
import { Button } from "./ui/button";

const categories = ["womenswear", "menswear", "kids", "steals"];
function Jumbotron() {
  return (
    <div className="w-full min-h-screen bg-[url('/img/hero.jpg')] bg-cover py-8 text-center">
      <div className="hidden lg:flex justify-around">
        {categories.map((category) => (
          <p key={category} className="text-white text-lg drop-shadow-lg">
            {category}
          </p>
        ))}
      </div>
      <h1 className="text-white text-lg lg:text-[128px] mt-[35vh] mb-[5vh]">
        Space for everyone
      </h1>
      <p className="text-white text-xs lg:text-base max-w-[965px] mx-auto drop-shadow-lg">
        Be part of our community. Thrift. Shop. Circular fashion. Save earth. be
        part of our community. Thrift. Shop. Circular fashion. Save earth. be
        part of our community. Thrift. Shop. Circular fashion. Save earth.
      </p>
      <Button variant={"outline-white"} className="w-[400px] mt-8">
        Let's go!
      </Button>
    </div>
  );
}

export default Jumbotron;
