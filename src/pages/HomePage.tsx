import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProjectsGrid from "../components/home/ProjectsGrid";
import HomePageLayout from "../components/layout/HomePageLayout";
const HomePage: React.FC = () => {
  return (
    <HomePageLayout>
      <HeroSection />
      <ProjectsGrid />
    </HomePageLayout>
  );
};

export default HomePage;
