'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat } from "lucide-react";
import Link from "next/link";

export default function HelmetSafetyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center">
        <HardHat className="mx-auto h-16 w-16 text-blue-500" />
        <h1 className="text-4xl font-bold mt-4">Helmet Safety Matters</h1>
        <p className="text-lg text-gray-600 mt-2">
          Protect your head, protect your future. Learn why helmets are essential for safety.
        </p>
        <Button asChild className="mt-6">
          <Link href="/shop">Get a Helmet</Link>
        </Button>
      </section>

      {/* Safety Information */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold">Why Helmets are Important</h2>
            <p className="text-gray-600 mt-2">
              Helmets reduce the risk of serious head injuries by absorbing impact forces during accidents.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold">How to Wear a Helmet Properly</h2>
            <p className="text-gray-600 mt-2">
              Ensure a snug fit, with the helmet sitting level on your head and the straps secured under your chin.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold">Stay Safe on the Road</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our collection of certified helmets for ultimate protection.
        </p>
        <Button asChild className="mt-6">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </section>
    </div>
  );
}
