"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Optional Badge - can uncomment to place left later */}
          {/* <div className="flex justify-start">
            <span className="text-sm bg-muted text-primary px-3 py-1 rounded-full font-medium">
              👋 Hey there
            </span>
          </div> */}

          {/* 🔥 Hero Headings */}
          <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              Creativity and Innovation <br />
              Cell In Electronics
            </h1>

            {/* Gradient 'CICE' */}
            <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary text-transparent bg-clip-text mt-4 mb-4">
              CICE
            </h2>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
              We’re more than just a hub — we’re a community of passionate people.
              Get access to exclusive events, projects and support 🚀
            </p>
          </div>
        </div>

        {/* 🔽 Hero Image */}
        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative border border-t-2 border-secondary border-t-primary/30"
            src={theme === "light" ? "/cice.png" : "/cice.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
