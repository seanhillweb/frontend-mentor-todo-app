import Image from "next/image";
import mobileBackgroundLight from "@/public/bg-mobile-light.jpg";
import mobileBackgroundDark from "@/public/bg-mobile-dark.jpg";
import desktopBackgroundLight from "@/public/bg-desktop-light.jpg";
import desktopBackgroundDark from "@/public/bg-desktop-dark.jpg";

export default function Banner() {
  return (
    <div>
      <Image
        src={mobileBackgroundLight}
        alt=""
        width={375}
        height={200}
        className="absolute left-0 right-0 top-0 -z-10 mx-auto block w-full dark:hidden md:hidden"
      />
      <Image
        src={mobileBackgroundDark}
        alt=""
        width={375}
        height={200}
        className="absolute left-0 right-0 top-0 -z-10 mx-auto hidden w-full dark:block md:hidden dark:md:hidden"
      />
      <Image
        src={desktopBackgroundLight}
        alt=""
        width={1440}
        height={300}
        className="absolute left-0 right-0 top-0 -z-10 mx-auto hidden w-full md:block dark:md:hidden"
      />
      <Image
        src={desktopBackgroundDark}
        alt=""
        width={1440}
        height={300}
        className="absolute left-0 right-0 top-0 -z-10 mx-auto hidden w-full md:hidden dark:md:block"
      />
    </div>
  );
}
