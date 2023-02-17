import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const ratingParsed = Array(Math.round(rating.rate)).fill();
  const [hasPrime, setIsPrimeEnabled] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPrimeEnabled(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      ratingParsed,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

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
          className="w-[200px] h-[200px] object-contain"
          alt={title}
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
        <div className="relative flex items-center space-x-2 -mt-5 mb-1">
          <div className="w-12">
            <Image
              loading="lazy"
              width={169}
              height={169}
              className="object-contain"
              src="/prime-tag.png"
              alt="prime"
            />
          </div>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="btn mt-auto">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
