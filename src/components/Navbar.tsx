import React from "react";
import { Button } from "./ui/button";
import { Menu, Search, ShoppingBag } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 lg:px-10 py-4">
      <div className="flex items-center">
        <Menu size={24} />
        <p className="text-base lg:text-[64px] lg:ml-4">buudl</p>
      </div>
      <div className="flex items-center gap-x-4 text-primary">
        <Search className="w-6 lg:w-8" />
        <div className="lg:flex lg:gap-x-4 hidden">
          <Button>sell</Button>
          <Button>thrift</Button>
        </div>
        <ShoppingBag className="w-6 lg:w-8" />
        <div className="lg:hidden">
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
