import React, { useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Illustrations = () => {
  const images = [
    { src: "pokemon_anya.PNG", wide: true },
    { src: "pokemon_picnic.PNG", wide: true },
    { src: "bounsweet.png", wide: false },
    { src: "makima.png", wide: false },
    { src: "hina.png", wide: false },
    { src: "saba.png", wide: false },
    { src: "maomao.PNG", wide: false },
    { src: "wooper.PNG", wide: false },
    { src: "swablu.png", wide: false },
    { src: "piplup.png", wide: false },
    { src: "gojo.png", wide: false },
    { src: "sylveon_anya.PNG", wide: false },
    { src: "animusic.png", wide: true },
    { src: "bocchi_the_idol.PNG", wide: false }
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
            key={img.src}
            className={`flex flex-col items-center ${img.wide ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            <img
              src={`/${img.src}`}
              alt={img.src.replace(/\.[^/.]+$/, "")}
              className="rounded-lg w-full h-auto max-w-[440px] shadow-md border border-[#EAD7B7] bg-[#FDF6EC] transition-transform duration-200 cursor-pointer hover:-translate-y-2"
              onClick={() => handleImageClick(idx)}
            />
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
                    <CarouselItem key={img.src} className="flex flex-col items-center justify-center w-full h-screen">
                      <img src={`/${img.src}`} alt={img.src.replace(/\.[^/.]+$/, "")}
                        className="rounded-lg w-full h-full object-contain max-h-screen" />
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
