import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const SearchInfo = ({ item }) => {
  const { img, location, title, description, star, price, long, lat, total } =
    item;
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer
    hover:opacity-80 shadow-lg pr-4 transition duration-200 first:border-t "
    >
      <div className="relative h-30 w-40 md:h-42 md:w-72 lg:h-86 lg:w-92 flex-shrink-0">
        <Image src={img} alt="title" layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-500">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-lg">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between pt-5">
          <p className="felx items-center justify-between">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
