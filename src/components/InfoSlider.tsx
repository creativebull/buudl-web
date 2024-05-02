import React from "react";
import { Button } from "./ui/button";

const infos = [
  {
    title: "Join our community",
    buttonText: "Join",
    photo: "/img/info-slider-1.jpg",
  },
  {
    title: "Get inspired",
    buttonText: "Shop",
    photo: "/img/info-slider-1.jpg",
  },
  {
    title: "Share",
    buttonText: "Follow us",
    photo: "/img/info-slider-1.jpg",
  },
];

function InfoSlider() {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 my-8">
      <div className="overflow-x-scroll">
        <div className="flex gap-x-4">
          {infos.map((info) => (
            <div
              key={info.title}
              className="flex flex-col justify-end p-8 h-[500px] lg:h-[725px] w-full bg-cover"
              style={{
                backgroundImage: `url(${info.photo})`,
              }}
            >
              <p className="text-lg text-white mb-4">{info.title}</p>
              <Button className="bg-white text-primary w-fit">
                {info.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoSlider;
