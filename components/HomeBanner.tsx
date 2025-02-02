import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-[600px]">
        <img src="/model-grey.jpg"></img>
      </div>
      <Title className="text-white text-7xl md:text-4xl uppercase font-extrabold text-center italic">
        Trendy , Affordable ,Unstoppable !
      </Title>
      <p className="text-lg text-center text-white font-medium max-w-[480px]">
        Find everything you need to look and feel your best, unbox
        the extraordinary,your next find awaits!
      </p>
    </div>
  );
};

export default HomeBanner;
