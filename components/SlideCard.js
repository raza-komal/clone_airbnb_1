import Image from "next/image";
import React from "react";

const SlideCard = ({ card }) => {
  const { img, title } = card;
  return (
    <div className="cursor-pointer hover:scale-105 transform transiton duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default SlideCard;
