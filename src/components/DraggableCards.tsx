import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function DraggableCards() {
  const items = [
    {
      title: "Animusic fantasy",
      image: "/animusic_fantasy.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      orientation: "horizontal"
    },
    {
      title: "Nessa",
      image: "/nessa.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      orientation: "vertical"
    },
    {
      title: "Animusic",
      image: "/animusic.png",
      className: "absolute top-32 left-[35%] rotate-[10deg]",
      orientation: "horizontal"
    },
    {
      title: "Anya hat",
      image: "/anya_hat.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      orientation: "vertical"
    },
    {
      title: "Anya shine",
      image: "/anya_shine.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      orientation: "vertical"
    },
    {
      title: "Bocchi glasses",
      image: "/bocchi_glasses.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      orientation: "vertical"
    },
    {
      title: "Bocchi turn",
      image: "/bocchi_turn.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      orientation: "vertical"
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
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 340px) 100vw, 340px"
                className="object-cover w-full h-full select-none z-10"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
              <div
                className="absolute inset-0 z-20 w-full h-full bg-transparent"
                style={{ pointerEvents: "auto", touchAction: "none" }}
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
