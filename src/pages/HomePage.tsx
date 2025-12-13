import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProjectsGrid from "../components/home/ProjectsGrid";
import Layout from "../components/layout/Layout";
const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsGrid />
    </Layout>
  );
};

export default HomePage;
