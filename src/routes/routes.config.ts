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

export const navigationLinks = [
  {
    label: "Project",
    path: "/",
  },
  {
    label: "Showcase",
    path: "/showcase",
    icon: "/hello/lock.svg",
  },
  {
    label: "Blog",
    path: "/blog",
    icon: "/hello/lock.svg",
  },
];
