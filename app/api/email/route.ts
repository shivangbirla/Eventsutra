import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "../../../components/shared/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, qrUrl } = await request.json();
  // try {
  //   await resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: email,
  //     subject: "Welcome to Resend!",
  //     react: WelcomeEmail({
  //       userFirstName: firstName,
  //       loginDate: new Date(2023, 0, 15, 14, 30),
  //       loginDevice: "Mobile",
  //       loginLocation: "San Francisco",
  //       loginIp: "203.0.113.1",
  //       qrUrl: qrUrl,
  //     }),
  //   });

  //   return NextResponse.json({ status: "ok" }, { status: 200 });
  // } catch (e: unknown) {
  //   if (e instanceof Error) {
  //     console.log(`Failed to send email: ${e.message}`);
  //   }
  //   return NextResponse.json(
  //     {
  //       error: "Internal server error.",
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // }
}
