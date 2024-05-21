import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  position: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, position, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative ">
      <div className="absolute left-1/2  max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] -translate-x-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-sm lg:text-[28px] text-gray-500">
          Home {position}
        </h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        <h3 className="text-[24px] text-gray-500">
          {"Let’s design the place you always imagined."}
        </h3>
      </div>

      <div className="w-[100%] h-[300px]">
        <Image
          className=" md:h-auto  object-right object-cover"
          src={img}
          alt="banner"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Slide;
