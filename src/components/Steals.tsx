import React from "react";

function Steals() {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 mb-8 mt-12">
      <p className="lg:text-xl mb-4 lg:mb-8">Steals</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8">
        <div className="flex items-center justify-center lg:h-[280px] bg-gradient-to-b from-[#FFDB66] to-[#FFBFD3] lg:rounded-md">
          <p className="lg:text-lg text-center">
            Jeans <br /> P100
          </p>
        </div>
        <div className="flex items-center justify-center lg:h-[280px] bg-gradient-to-b from-[#FB9EBB] to-[#E2D3FF] lg:rounded-md">
          <p className="lg:text-lg text-center">
            Shirts <br /> Under P500
          </p>
        </div>
        <div className="flex items-center justify-center lg:h-[280px] bg-gradient-to-b from-[#CBB3F8] to-[#F9FBA0] lg:rounded-md">
          <p className="lg:text-lg text-center">
            Dresses <br /> Under P100
          </p>
        </div>
        <div className="flex items-center justify-center lg:h-[280px] bg-gradient-to-b from-[#FFDB66] to-[#FFBFD3] lg:rounded-md">
          <p className="lg:text-lg text-center">
            Jeans <br /> P100
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steals;
