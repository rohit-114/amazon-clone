import Header from "../components/Header";
import { HiCheckCircle } from "react-icons/hi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "../slices/basketSlice";
import { persistor } from "../store/store";

export default function Success() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
    dispatch(clearBasket());
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <HiCheckCircle color="#10b981" size={32} />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has been shipped, if you would like to check the status of
            order(s) please press the link below.
          </p>
          <button onClick={() => router.push("/orders")} className="btn mt-8">
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}
