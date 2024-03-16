import { Button } from "@/components/ui/button";
import { getEventById } from "@/lib/actions/event.actions";
import { getOrderById } from "@/lib/actions/order.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode.react";

const EventTicketPage = async ({ params: { id } }: SearchParamProps) => {
  const order = await getOrderById(id);
  const event = await getEventById(order.event);
  // console.log(order);
  //   console.log(event);

  const imageUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/buyer/${order._id}`;
  return (
    <div className="container mx-auto py-[5%] mt-2">
      <div className="dark:bg-slate-900 border-2 border-slate-600 shadow-2xl rounded-2xl p-12">
        <h1 className="text-3xl font-bold mb-8 flex justify-center">
          Event Ticket
        </h1>
        <div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="text-lg flex flex-col gap-1">
              <p className="">Event Name: {event.title}</p>
              <p>Event Category: {event.category.name}</p>
              <p>Event Location: {event.location}</p>
              <p>
                Event StartDate and Time:{" "}
                {formatDateTime(event.startDateTime).dateOnly} -{" "}
                {formatDateTime(event.startDateTime).timeOnly}
              </p>
              <p>
                Event EndDate and Time:{" "}
                {formatDateTime(event.endDateTime).dateOnly} -{" "}
                {formatDateTime(event.endDateTime).timeOnly}
              </p>
              <p>Minimum Age: {event.age}</p>
              <p>Amount Paid: ${event.price}</p>
              <p>Gmaps-Address: {event.url}</p>
              <p>Payment At: {order.createdAt}</p>
              <p className="break-all flex flex-col">
                StripeId:
                <span className="inline-block max-w-[200px]">
                  {order.stripeId}
                </span>
              </p>
            </div>
            <Image
              src={event.imageUrl}
              alt="hero image"
              width={400}
              height={400}
              className="h-full min-h-[300px] hidden sm:flex object-cover object-center rounded-[30px]"
            />
          </div>
          <div className="mt-[10%] sm:mt-[3%] flex justify-center">
            {imageUrl && (
              <QRCode
                value={imageUrl}
                size={190} // Adjust size as needed
                renderAs={"svg"} // Render as SVG for better quality
              />
            )}
          </div>
          <div className="flex flex-row justify-center mx-2 mt-[3%]">
            {/* <Button
              asChild
              size="lg"
              className="mt-2 px-4 rounded-2xl hidden sm:flex"
            >
              <Link href={`/form/${order._id}`}>Get Email</Link>
            </Button> */}
            <Button
              asChild
              size="lg"
              className="sm:mt-2 px-4 rounded-2xl mt-5 bg-green-600 hover:bg-green-700"
            >
              <Link href={`/form/${order._id}`}>Get Email Notify</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicketPage;
