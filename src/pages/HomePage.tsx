import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProjectsGrid from "../components/home/ProjectsGrid";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProjectsGrid />
    </>
  );
};

export default HomePage;
