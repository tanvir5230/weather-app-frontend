import React from "react";
import { Header } from "./Header/index.js";
import { WeatherHeroSection } from "./WeatherHeroSection/index.js";
import { WeatherVisuals } from "./WeatherVisualization/index.js";

export const HomePage = () => {
  return (
    <>
      <Header />
      <WeatherHeroSection />
      <WeatherVisuals />
    </>
  );
};
