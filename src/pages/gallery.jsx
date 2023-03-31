import Image from "next/image";
import React from "react";
import earth from "../../public/assets/images/earth.jpg";
import sun from "../../public/assets/images/sun.jpg";
import pluto from "../../public/assets/images/pluto.jpg";

export default function gallery() {
  return (
    <div>
      <Image src={earth} priority style={{width: "100%", height: "auto"}} placeholder="blur" alt="earth" />
      <Image src={sun} style={{width: "100%", height: "auto"}} alt="sun" />
      <Image src={pluto} style={{width: "100%", height: "auto"}} alt="pluto" />
    </div>
  );
}
