import Image from "next/image";
import React from "react";
import { HiMinus, HiPlus, HiStar } from "react-icons/hi";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromBasket,
} from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
  qty,
}) => {
  const dispatch = useDispatch();
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime,
    qty,
  };

  const incQty = () => {
    dispatch(increaseQty(product));
  };
  const decQty = () => {
    dispatch(decreaseQty(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(product.id));
  };

  return (
    <div className="grid grid-cols-5">
      <div className="">
        <Image
          src={image}
          width={200}
          height={200}
          className="w-[200px] h-full sm:h-[200px] object-contain"
          alt={title}
        />
      </div>
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {rating.map((_, i) => {
            return <HiStar key={i} size={18} color="#eab308" />;
          })}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

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
                width={169}
                height={169}
                className="w-full h-full object-contain"
                src="/prime-tag.png"
                alt="prime"
              />
            </div>
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={decQty}
            className={`flex items-center p-1 font-bold focus:outline-none border border-slate-900 rounded-sm ${
              !(qty > 1) && "border-gray-400 cursor-not-allowed"
            }`}
            disabled={!(qty > 1)}
          >
            <HiMinus color={qty > 1 ? "#0f172a" : "#9ca3af"} size={15} />
          </button>

          <p>{qty}</p>

          <button
            onClick={incQty}
            className="flex items-center p-1 font-bold focus:outline-none border border-slate-900 rounded-sm"
          >
            <HiPlus size={15} />
          </button>
        </div>

        <button onClick={removeItemFromBasket} className="btn">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
