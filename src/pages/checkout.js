import Image from "next/image";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import {
  selectItems,
  selectTotalPrice,
  selectTotalQty,
} from "../slices/basketSlice";
import { NumericFormat } from "react-number-format";
import { useSession } from "next-auth/react";

export default function Checkout() {
  const items = useSelector(selectItems);
  const totalQty = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div>
            <Image
              loading="lazy"
              src="/prime-day-banner.png"
              width={1020}
              height={250}
              className="w-full h-full object-contain"
              alt="prime-day"
            />
          </div>

          <div className="flex flex-col bg-white space-y-10 p-5">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}
            </h1>
            {items?.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rating={item.ratingParsed}
                  hasPrime={item.hasPrime}
                  qty={item.qty}
                />
              );
            })}
          </div>
        </div>

        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap">
              Subtotal({totalQty} items):{" "}
              <NumericFormat
                className="font-bold"
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            </h2>
            <button
              disabled={!session}
              className={`mt-2 ${
                !session
                  ? "p-2 text-xs md:text-sm bg-gradient-to-b from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                  : "btn"
              }`}
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
