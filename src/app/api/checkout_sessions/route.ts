import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  console.error("❌ STRIPE_SECRET_KEY is missing. Check your .env.local file.");
} else {
  console.log("✅ STRIPE_SECRET_KEY is loaded (masked for security):", secretKey.slice(0, 8) + "********");
}

const stripe = new Stripe(secretKey as string);

export async function POST(req: Request) {
  try {
    const { cart, email } = await req.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0 || !email) {
      console.error("❌ Invalid cart or email:", { cart, email });
      return NextResponse.json({ error: "Invalid cart or email" }, { status: 400 });
    }

    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    console.log("➡️ Creating Stripe session...");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${NEXT_PUBLIC_URL}/checkout`,
      customer_email: email,
      line_items: cart.map((item: any, index: number) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.title || `Session ${index + 1}`,
            description: `Date: ${
              item.date ? new Date(item.date).toLocaleDateString() : "N/A"
            }, Time: ${item.startTime || "N/A"} - ${item.endTime || "N/A"}`,
          },
          unit_amount: item.price ? Math.round(item.price * 100) : 0,
        },
        quantity: 1,
      })),
    });

    console.log("✅ Stripe session created:", session.url);
    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("❌ Stripe error:", error);
    return NextResponse.json({ error: error.message || "Failed to create Stripe session" }, { status: 500 });
  }
}
