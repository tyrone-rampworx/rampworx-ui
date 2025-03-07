import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  

export async function POST(req: Request) {
  try {
    const { cart, email } = await req.json(); // Get cart items and user email

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
      customer_email: email,
      line_items: cart.map((item: any) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.title,
            description: `Date: ${item.date}, Time: ${item.startTime} - ${item.endTime}`,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: 1,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Failed to create Stripe session" }, { status: 500 });
  }
}
