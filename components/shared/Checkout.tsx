import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { checkoutOrder } from "@/lib/actions/order.actions";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({
  event,
  userId,
  ticketQuantity,
}: {
  event: IEvent;
  userId: string;
  ticketQuantity: number;
}) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const price = Number(event.price) * ticketQuantity;
    const newPrice = String(price);
    const ticQty = String(ticketQuantity);
    if (isNaN(price)) {
      console.error("Price is not a valid number");
      return;
    }

    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: newPrice,
      isFree: event.isFree,
      buyerId: userId,
      quantity: ticQty,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
