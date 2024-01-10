import React from "react";
import HomeSlider from "./Home-slider";
import HomeWIM from "./Home-WIM";
import HomeWINEM from "./Home-WINEM";
import HomeLocation from "./Home-Location";
import HomePhotos from "./Home-Photos";
import HomeContact from "./Home-Contact";

function home() {
  return (
    <div>
      <HomeSlider />
      | <HomeWIM />
      <HomeWINEM />
      <HomeLocation/>
      <HomePhotos/>
      <HomeContact/>
    </div>
  );
}

export default home;
