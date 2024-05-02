import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function SellingInfo() {
  return (
    <div className="my-8">
      <div className="h-[745px] hidden lg:flex">
        <div className="flex-1">
          <Image
            width={0}
            height={0}
            alt="selling-info-1"
            src="/img/selling-info-1.jpg"
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="flex-1 items-center h-[30vh] my-auto">
          <div className="w-[590px] mx-auto">
            <p className="text-[80px]">Selling is more fun!</p>
            <p className="my-8 text-opacity-75">
              Transform clutter into cash with our thrift app! Sell now and
              declutter effortlessly. Turn your pre-loved items into instant
              money with just a few taps. Join our community of savvy sellers
              today!
            </p>
            <Button
              variant={"outline-secondary"}
              size={"lg"}
              className="w-[400px]"
            >
              Start Selling
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[url('/img/bg-selling-info.svg')] bg-contain bg-no-repeat lg:my-24 lg:py-16">
        <Image
          alt="star"
          width={0}
          height={0}
          className="w-12 lg:w-[200px] h-12 lg:h-[200px]"
          src="/img/icons/ic-star-purple.svg"
        />
        <div className="px-10 max-w-screen-2xl mx-auto mb-10 text-center lg:w-[1100px]">
          <p className="lg:text-2xl mb-4">Sell anything. Sell to Anyone.</p>
          <p className="text-xs lg:text-base">
            Transform clutter into cash with our thrift app! Sell now and
            declutter effortlessly. Turn your pre-loved items into instant money
            with just a few taps. Join our community of savvy sellers today!
          </p>
          <p className="text-sm lg:text-xl mt-10 border-b pb-4 border-secondary w-fit mx-auto">
            Here’s how you can sell
          </p>
        </div>
        <div className="flex items-center justify-center w-12 lg:w-[155px] h-12 lg:h-[155px] bg-yellow-300 rounded-full rotate-12 shadow-lg float-right -mt-[80px] lg:-mt-[150px] lg:mr-10">
          <p className="text-xs lg:text-xl">buudl</p>
        </div>
      </div>

      <div className="hidden lg:flex h-[700px]">
        <div className="flex-1 items-center h-[30vh] my-auto">
          <div className="w-[590px] mx-auto">
            <p className="text-[80px]">Low prices</p>
            <p className="my-8 text-opacity-75">
              Transform clutter into cash with our thrift app! Sell now and
              declutter effortlessly. Turn your pre-loved items into instant
              money with just a few taps. Join our community of savvy sellers
              today!
            </p>
            <Button
              variant={"outline-secondary"}
              size={"lg"}
              className="w-[400px]"
            >
              Thrift
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            width={0}
            height={0}
            alt="selling-info-2"
            src="/img/selling-info-2.jpg"
            className="w-full h-full"
            unoptimized
          />
          <Image
            alt="star"
            width={0}
            height={0}
            className="w-[200px] h-[200px] -mt-[100px] -ml-16"
            src="/img/icons/ic-asterisk-green.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default SellingInfo;
