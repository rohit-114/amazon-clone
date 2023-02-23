import React from "react";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import moment from "moment";

const Order = ({ id, amount, amountShipping, images, timestamp, items }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p className="text-sm sm:text-base">
            {moment.unix(timestamp).format("DD MMM YYYY")}
          </p>
        </div>

        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p className="text-sm sm:text-base">
            <NumericFormat
              value={amount}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              prefix={"$"}
            />{" "}
            - Next Day Delivery{" "}
            <NumericFormat
              value={amountShipping}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              prefix={"$"}
            />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-7 overflow-x-auto">
          {images.map((image, i) => (
            <Image
              key={i}
              className="h-20 w-auto sm:h-28 object-contain"
              height={200}
              width={100}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
