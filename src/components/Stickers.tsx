import React, { useState, useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Ayaka from "../public/stickers/Ayaka.png";
import Dysfunctional from "../public/stickers/Dysfunctional.png";
import Furina from "../public/stickers/Furina.png";
import Glitch from "../public/stickers/Glitch.png";
import Glock from "../public/stickers/Glock.png";
import Gorou from "../public/stickers/Gorou.png";
import Kirara from "../public/stickers/Kirara.png";
import Kokomi from "../public/stickers/Kokomi.png";
import Layla from "../public/stickers/Layla.png";
import Lynette from "../public/stickers/Lynette.png";
import Lyney from "../public/stickers/Lyney.png";
import Mango from "../public/stickers/Mango.png";
import Nahida from "../public/stickers/Nahida.png";
import Nilou from "../public/stickers/Nilou.png";
import Noelle from "../public/stickers/Noelle.png";
import Original from "../public/stickers/Original.png";
import Sayu from "../public/stickers/Sayu.png";
import Yaemiko from "../public/stickers/Yaemiko.png";
import Yoimiya from "../public/stickers/Yoimiya.png";

const stickerGroups = [
  {
    title: "Genshin Impact Specialty Dishes",
    images: [
        "stickers/Ayaka.png",
        "stickers/Furina.png",
        "stickers/Kokomi.png",
        "stickers/Lynette.png",
        "stickers/Lyney.png",
        "stickers/Layla.png",
        "stickers/Nahida.png",
        "stickers/Noelle.png",
        "stickers/Nilou.png",
        "stickers/Yoimiya.png",
        "stickers/Gorou.png",
        "stickers/Kirara.png",
        "stickers/Sayu.png",
        "stickers/Yaemiko.png",
    ]
  },
  {
    title: "Bocchi the Rock",
    images: [
      "stickers/Glitch.png",
      "stickers/Dysfunctional.png",
      "stickers/Mango.png",
      "stickers/Glock.png",
      "stickers/Original.png"
    ]
  }
];

const Stickers = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const carouselApiRef = useRef<any>(null);

  const handleImageClick = (images: string[], idx: number) => {
    setCarouselImages(images);
    setCarouselIndex(idx);
    setCarouselOpen(true);
  };

  const handlePrev = () => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollPrev();
    }
  };
  const handleNext = () => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollNext();
    }
  };

  return (
    <div className="p-6 rounded-lg text-[#2E1A0A] shadow">
      <h2 className="text-xl font-bold mb-4">Sticker Art</h2>
      {stickerGroups.map((group) => (
        <div key={group.title} className="mb-8">
          <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {group.images.map((img, idx) => (
              <div key={img} className="flex flex-col items-center">
                <div className="relative w-full h-auto">
                  <Image
                    src={`/${img}`}
                    alt={img.replace(/\.[^/.]+$/, "")}
                    width={220}
                    height={220}
                    quality={40}
                    className="rounded-lg w-full h-auto shadow-md border border-[#EAD7B7] bg-[#FDF6EC] transition-transform duration-200 cursor-pointer hover:-translate-y-2"
                    onClick={() => handleImageClick(group.images, idx)}
                    style={{ objectFit: "contain" }}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 w-full h-full bg-transparent z-20" style={{ pointerEvents: "none", touchAction: "none" }} onContextMenu={(e) => e.preventDefault()} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {carouselOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setCarouselOpen(false)}>
          <div className="absolute inset-0 flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <Carousel
              opts={{ startIndex: carouselIndex }}
              className="w-full h-full flex items-center justify-center"
              setApi={api => (carouselApiRef.current = api)}
            >
              <div className="relative h-screen w-full">
                <CarouselContent className="h-screen">
                  {carouselImages.map((img) => (
                    <CarouselItem key={img} className="relative flex flex-col items-center justify-center w-full h-screen">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/${img}`}
                          alt={img.replace(/\.[^/.]+$/, "")}
                          fill
                          quality={40}
                          className="rounded-lg object-contain max-h-screen"
                          style={{ objectFit: "contain" }}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute inset-0 w-full h-full bg-transparent z-20" style={{ pointerEvents: "none", touchAction: "none" }} onContextMenu={(e) => e.preventDefault()} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <button
                  className="absolute hover:cursor-pointer left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous"
                >
                  <ChevronLeft size={48} className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200" />
                </button>
                <button
                  className="absolute hover:cursor-pointer right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
                  onClick={handleNext}
                  type="button"
                  aria-label="Next"
                >
                  <ChevronRight size={48} className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200" />
                </button>
              </div>
            </Carousel>
            <button className="absolute hover:cursor-pointer top-8 right-8 text-[#EAD7B7] rounded-full shadow hover:text-white z-50 flex items-center justify-center size-12" onClick={() => setCarouselOpen(false)} aria-label="Close">
                <X size={48} className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stickers;
