import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t ">
    <FooterTop />
      <Container>
        
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white underline">Vesoire</Logo>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex ad
              at vitae esse. Vero fuga laborum disti.
            </p>
            <SocialMedia
              className="text-white"
              iconClassName="border-white hover:border-gray-400 hover:text-gray-400"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinksData?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-white hover:text-gray-400 text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              {categoriesData?.map((item) => (
                <Link
                  key={item?.title}
                  href={`/category${item?.href}`}
                  className="text-white hover:text-gray-400 text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-white text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;