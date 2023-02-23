import { useSession, getSession } from "next-auth/react";
import db from "../../firebase";
import moment from "moment/moment";
import Header from "../components/Header";
import Order from "../components/Order";
import Head from "next/head";

export default function Orders({ orders }) {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Orders</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        <h2>
          {session
            ? `${orders.length} Orders`
            : "Please sign in to see your orders"}
        </h2>
        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, images, timestamp, items }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                images={images}
                timestamp={timestamp}
                items={items}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
