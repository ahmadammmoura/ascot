import React from "react";
import Navbar from "../component/navbar/Navbar";
import Overlaying_divs from "../component/careers/overlaying_divs/overlaying_divs";
import HeaderSection from "../sections/careers/header_section";
import HeroBanner from "../component/heroBanner";
import { OpenPositions } from "../sections/careers/openPositions";
import pic from "../assets/Images/careers_img.jpg";

function careers() {
  return (
    <>
      <Navbar />
      <HeroBanner title="CAREERS" />
      <HeaderSection />
      <OpenPositions />
    </>
  );
}

export default careers;
