"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Store } from "lucide-react";
import { DraggableCards } from "@/components/DraggableCards";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-center gap-4 md:gap-8 flex px-4 flex-col items-center justify-center bg-[#FDF6EC] text-[#4B2E19] mt-12">
            <Image
              src="/profile.png"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full border-4 border-[#EAD7B7] shadow-lg mb-6"
              onContextMenu={e => e.preventDefault()}
            />
      <h1 className="mt-8 font-bold text-3xl">Hi, I'm alonartanuki!</h1>
      <p>You can view my portfolio and socials with the buttons or see a snapshot of what I've worked on below.</p>
    
        <Link href="/portfolio">
        <Button
        variant="default"
        size="lg"
      >
        View Portfolio

        </Button>
        </Link>
    

      <div className="flex flex-col md:flex-row gap-4">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => window.open("https://instagram.com/alonartanuki", "_blank")}
          className="flex items-center gap-2"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </Button>
        <Button
          variant="ghost"
          size="lg"
          onClick={() => window.open("https://youtube.com/@alonartanuki", "_blank")}
          className="flex items-center gap-2"
        >
          <Youtube className="w-5 h-5" />
          YouTube
        </Button>
        <Button
          variant="ghost"
          size="lg"
          onClick={() => window.open("https://www.etsy.com/ca/shop/alonartanuki", "_blank")}
          className="flex items-center gap-2"
          disabled
        >
          <Store className="w-5 h-5" />
          Etsy (Coming Soon)
        </Button>
      </div>
      <DraggableCards />
    </div>
  );
}
