import React, { useState, useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import aqua from "../public/keychains/aqua.png";
import bocchi from "../public/keychains/bocchi.png";
import Chiori from "../public/keychains/Chiori.png";
import darkness from "../public/keychains/darkness.png";
import Freminet from "../public/keychains/Freminet.png";
import Furina from "../public/keychains/Furina.png";
import Hitagi from "../public/keychains/Hitagi.png";
import Kaji from "../public/keychains/Kaji.png";
import kazuma from "../public/keychains/kazuma.png";
import Lynette from "../public/keychains/Lynette.png";
import Lyney from "../public/keychains/Lyney.png";
import Mayoi from "../public/keychains/Mayoi.png";
import megumin from "../public/keychains/megumin.png";
import Navia from "../public/keychains/Navia.png";
import Ononoki from "../public/keychains/Ononoki.png";
import Sakura from "../public/keychains/Sakura.png";
import Shinobu from "../public/keychains/Shinobu.png";
import Suo from "../public/keychains/Suo.png";
import Togame from "../public/keychains/Togame.png";
import Tsubaki from "../public/keychains/Tsubaki.png";
import Tsubasa from "../public/keychains/Tsubasa.png";
import Tsukihi from "../public/keychains/Tsukihi.png";
import Umemiya from "../public/keychains/Umemiya.png";

const keychainGroups = [
  {
    title: "Konosuba",
    images: [
      "keychains/aqua.png",
      "keychains/megumin.png",
      "keychains/darkness.png",
      "keychains/kazuma.png"
    ]
  },
  {
    title: "Genchin Impact: Fontaine",
    images: [
      "keychains/Chiori.png",
      "keychains/Furina.png",
      "keychains/Navia.png",
      "keychains/Freminet.png",
      "keychains/Lynette.png",
      "keychains/Lyney.png"
    ]
  },
  {
    title: "Monogatari",
    images: [
      "keychains/Shinobu.png",
      "keychains/Hitagi.png",
      "keychains/Tsubasa.png",
      "keychains/Mayoi.png",
      "keychains/Ononoki.png",
      "keychains/Tsukihi.png"
    ]
  },
  {
    title: "Windbreaker",
    images: [
      "keychains/Suo.png",
      "keychains/Sakura.png",
      "keychains/Kaji.png",
      "keychains/Tsubaki.png",
      "keychains/Umemiya.png",
      "keychains/Togame.png"
    ]
  },
  {
    title: "Bocchi the Rock",
    images: [
      "keychains/bocchi.png",
    ]
  }
];

const Keychains = () => {
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
      <h2 className="text-xl font-bold mb-4">Keychain Art</h2>
      {keychainGroups.map((group) => (
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

export default Keychains;
