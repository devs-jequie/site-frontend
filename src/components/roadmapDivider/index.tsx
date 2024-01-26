import React from "react";
import svg from "./icon.svg";
import Image from "next/image";

export default function DividerRoadmap() {
  return (
    <Image
      src={svg}
      alt="divider"
      className="absolute w-screen -bottom-14 sm:-bottom-28 md:-bottom-24 lg:-bottom-32 xl:-bottom-44 2xl:-bottom-80 z-10"
    />
  );
}
