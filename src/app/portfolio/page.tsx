"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Illustrations from "@/components/Illustrations";
import Keychains from "@/components/Keychains";
import Stickers from "@/components/Stickers";

const PortfolioPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#FDF6EC] text-[#4B2E19] p-4">
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
      <div className="w-full max-w-2xl flex justify-center items-center">
        <Tabs defaultValue="illustrations">
          <TabsList className="mb-4 flex justify-center w-full min-w-[300px]">
            <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
            <TabsTrigger value="keychain">Keychain Art</TabsTrigger>
            <TabsTrigger value="sticker">Sticker Art</TabsTrigger>
          </TabsList>
          <TabsContent value="illustrations">
            <Illustrations />
          </TabsContent>
          <TabsContent value="keychain">
            <Keychains />
          </TabsContent>
          <TabsContent value="sticker">
            <Stickers />
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full flex justify-center mt-12">
        <Button variant="ghost" size="lg" asChild className="flex items-center gap-2">
          <Link href="/">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PortfolioPage;