import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
      <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage your Money with AI-Driven Personal <br />
                <span className="text-4xl md:text-[4rem] text-green-800 font-bold mt-1 leading-none">
                  Finance Advisor
                </span>
              </h1>
          <Image
            src={`/background.svg`}
            alt="hero"
            height={720}
            width={800}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={Boolean(1)}
          />
      </div>
    </section>
  );
}

export default Hero;
