import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const menus = [
  {
    title: "Category",
    links: ["Womenswear", "Menswear", "Kids", "Everything", "Steal"],
  },
  {
    title: "Sell",
    links: ["Sell on Buudl", "Privacy and Terms"],
  },
  {
    title: "About buudl",
    links: ["About Us", "Blogs", "Contact", "FAQ", "Privacy Policy"],
  },
];
function Footer() {
  return (
    <div className="bg-orange bg-[url('/img/bg-footer.svg')] bg-cover py-4 lg:py-6">
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 pt-28 mb-10">
        <div>
          <p className="text-[128px]">buudl</p>
          <p className="text-base lg:text-lg max-w-[350px]">
            Discover your style. Share your story.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row gap-x-8 gap-y-4">
          {menus.map((menu) => (
            <div key={menu.title}>
              <p className="text-lg">{menu.title}</p>
              <ul>
                {menu.links.map((link) => (
                  <li
                    key={"footer" + menu.title + "-" + link}
                    className="font-sans"
                  >
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse gap-x-8 px-32">
        <Instagram size={80} />
        <Twitter size={80} />
        <Facebook size={80} />
      </div>
    </div>
  );
}

export default Footer;
