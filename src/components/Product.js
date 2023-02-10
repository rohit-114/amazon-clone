import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { NumericFormat } from "react-number-format";

const Product = ({ title, price, description, category, image, rating }) => {
  const ratingParsed = Array(Math.round(rating.rate)).fill();
  const [hasPrime, setIsPrimeEnabled] = useState();

  useEffect(() => {
    setIsPrimeEnabled(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col justify-between bg-white z-30 p-10 m-5">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </p>

      <div className="flex justify-center">
        <Image
          src={image}
          width={200}
          height={200}
          className="h-[200px] w-[200px] object-contain"
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {ratingParsed.map((_, i) => {
          return <HiStar key={i} size={18} color="#eab308" />;
        })}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <NumericFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/prime-tag.png" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="btn mt-auto">Add to Basket</button>
    </div>
  );
};

export default Product;
