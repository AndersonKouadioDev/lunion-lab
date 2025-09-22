import Image from "next/image";
import turboLogo from "@/assets/images/clients/logo turbo.webp";
import amenityLogo from "@/assets/images/clients/amenity logo.png";
import novisLogo from "@/assets/images/clients/logo novis.png";
import Marquee from "./magicui/marquee";

export default function LogoCarousel() {
  const logos = [
    { src: turboLogo, alt: "Turbo Delivery Logo", title: "Turbo Delivery" },
    { src: amenityLogo, alt: "Amenity Group Logo", title: "Amenity Group" },
    { src: novisLogo, alt: "Novis Coworking Logo", title: "Novis Coworking" },
  ];

  return (
    <div className="w-full cursor-pointer">
      <div className="hidden md:block overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="w-full flex items-center justify-center md:gap-4 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex transition-all ease-in-out grayscale hover:grayscale-0 w-fit gap-2 items-center"
            >
              <Image height={50} src={logo.src} alt={logo.alt} />
              <p className="text-2xl lg:text-3xl">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 md:hidden">
        <Marquee className="max-w-full [--duration:40s]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex transition-all ease-in-out grayscale hover:grayscale-0 w-fit gap-2 items-center"
            >
              <Image height={50} src={logo.src} alt={logo.alt} />
              <p className="text-3xl">{logo.title}</p>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </div>
  );
}
