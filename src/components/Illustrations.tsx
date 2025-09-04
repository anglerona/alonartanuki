import React, { useState, useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Illustrations = () => {
  const images = [
    { src: "/baking.png", alt: "baking", wide: true },
    { src: "/sleep.png", alt: "sleep", wide: false },
    { src: "/grass_maomao.PNG", alt: "grass_maomao", wide: false },
    { src: "/pokemon_anya.PNG", alt: "pokemon_anya", wide: true },
    { src: "/pokemon_picnic.PNG", alt: "pokemon_picnic", wide: true },
    { src: "/bounsweet.png", alt: "bounsweet", wide: false },
    { src: "/makima.PNG", alt: "makima", wide: false },
    { src: "/hina.png", alt: "hina", wide: false },
    { src: "/saba.png", alt: "saba", wide: false },
    { src: "/maomao.PNG", alt: "maomao", wide: false },
    { src: "/wooper.png", alt: "wooper", wide: false },
    { src: "/swablu.png", alt: "swablu", wide: false },
    { src: "/piplup.png", alt: "piplup", wide: false },
    { src: "/tsukihi.png", alt: "tsukihi", wide: false },
    { src: "/gojo.png", alt: "gojo", wide: false },
    { src: "/sylveon_anya.png", alt: "sylveon_anya", wide: false },
    { src: "/animusic.png", alt: "animusic", wide: true },
    { src: "/bocchi_the_idol.PNG", alt: "bocchi_the_idol", wide: false }
  ];

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselApiRef = useRef<any>(null);

  const handleImageClick = (idx: number) => {
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
      <h2 className="text-xl font-bold mb-4">Illustrations</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {images.map((img, idx) => (
          <div
            key={img.alt}
            className={`flex flex-col items-center ${img.wide ? "md:col-span-2" : ""}`}
          >
            <div className="relative w-full h-full ">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.wide ? 440 : 220}
                height={300}
                quality={40}
                className="rounded-lg w-full h-auto shadow-md border border-[#EAD7B7] bg-[#FDF6EC] transition-transform duration-200 cursor-pointer hover:-translate-y-2"
                onClick={() => handleImageClick(idx)}
                style={{ objectFit: "contain" }}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 w-full h-full bg-transparent z-20" style={{ pointerEvents: "none", touchAction: "none" }} onContextMenu={(e) => e.preventDefault()} />
            </div>
          </div>
        ))}
      </div>

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
                  {images.map((img) => (
                    <CarouselItem key={img.alt} className="relative flex flex-col items-center justify-center w-full h-screen">
                      <div className="relative w-full h-full">
                        <Image
                          src={img.src}
                          alt={img.alt}
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
                {/* Custom navigation buttons */}
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

export default Illustrations;
