import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCards() {
  const items = [
    {
      title: "Bounsweet Gijinka",
      image: "/bounsweet.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      orientation: "vertical"
    },
    {
      title: "Miss Hina",
      image: "/hina.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      orientation: "vertical"
    },
    {
      title: "Bocchi and Ruby",
      image: "/bocchi_the_idol.PNG",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      orientation: "vertical"
    },
    {
      title: "Summer at the beach with wooper",
      image: "/wooper.PNG",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      orientation: "vertical"
    },
    {
      title: "Makima",
      image: "/makima.PNG",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      orientation: "vertical"
    },
    {
      title: "Maomao",
      image: "/maomao.PNG",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      orientation: "vertical"
    },
    {
      title: "Sylveon Anya",
      image: "/sylveon_anya.PNG",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      orientation: "vertical"
    },
    {
      title: "Pokemon picnic",
      image: "/pokemon_picnic.PNG",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      orientation: "horizontal"
    },
     {
      title: "Pokemon Anya",
      image: "/pokemon_anya.PNG",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      orientation: "horizontal"
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl md:text-4x">
        If you like what you see, check out my portfolio!
      </p>
      {items.map((item) => (
        <DraggableCardBody
          key={item.title}
          className={`${item.className} ${item.orientation === "horizontal" ? "w-[540px] h-[220px]" : "w-[320px] h-[340px]"}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`pointer-events-none relative z-10 object-cover w-full h-full`}
            onContextMenu={e => e.preventDefault()}
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
