import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Subscribe() {
  return (
    <div className="my-24">
      <p className="lg:text-xl text-center">
        Discounts, promos, and free shipping
      </p>
      <div className="flex flex-col lg:flex-row gap-y-4 px-8 lg-:px-0 max-w-xl mx-auto mt-8">
        <Input className="mr-4" placeholder="example@gmail.com" />
        <Button variant={"secondary"}>Subscribe</Button>
      </div>
    </div>
  );
}

export default Subscribe;
