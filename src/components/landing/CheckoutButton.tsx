"use client";

import { Button } from "@/components/ui/button";

export function CheckoutButton() {
    return (
        <a
            href="https://pay.mundpay.com/01997cb3-78e8-7291-b9d5-b4a27fc0f595?ref="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[320px] mx-auto block my-5"
        >
            <Button
                className="w-full text-base h-auto py-4 px-6 font-bold font-body btn-glow btn-gradient-2 rounded-full"
            >
                QUIERO ESCUCHAR LA MELODÍA
            </Button>
        </a>
    )
}
