import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage"));

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.FC>;
  title: string;
  protected?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    title: "Home - Viphou Portfolio",
  },
  {
    path: "/project/:id",
    element: ProjectDetailPage,
    title: "Project Details - Viphou Portfolio",
  },
];

export interface NavigationLink {
  label: string;
  sectionId: string;
  locked?: boolean;
}

export const navigationLinks: NavigationLink[] = [
  {
    label: "Project",
    sectionId: "projects-section",
  },
  {
    label: "Showcase",
    sectionId: "showcase-section",
    locked: true,
  },
  {
    label: "Blog",
    sectionId: "blog-section",
    locked: true,
  },
];
