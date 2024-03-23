"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Checkout from "./Checkout";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  // State to manage ticket quantity
  const [ticketQuantity, setTicketQuantity] = useState(1);

  // Function to increment ticket quantity
  const incrementTicket = () => setTicketQuantity(ticketQuantity + 1);

  // Function to decrement ticket quantity
  const decrementTicket = () => {
    if (ticketQuantity > 1) setTicketQuantity(ticketQuantity - 1);
  };

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            {/* Buttons for increment and decrement */}
            <div className="flex items-center mx-2">
              <button
                className="p-1 bg-blue-600 hover:bg-blue-700 rounded"
                onClick={decrementTicket}
              >
                <CiCircleMinus className="w-6 h-6" />
              </button>
              <span className="m-4">{ticketQuantity}</span>
              <button
                className="p-1 bg-blue-600 hover:bg-blue-700 rounded"
                onClick={incrementTicket}
              >
                <CiCirclePlus className="w-6 h-6" />
              </button>
            </div>
            <Checkout
              event={event}
              userId={userId}
              ticketQuantity={ticketQuantity}
            />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
