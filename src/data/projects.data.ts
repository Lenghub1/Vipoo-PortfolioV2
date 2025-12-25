import type { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "billzone",
    active: false,
    title: "Centralize Profile in BillZone",
    client: "ABA Bank",
    date: "Jan 01, 2026",
    description:
      "System that unifies all merchant profiles such as Bill payment, Mex-map, Silverleaf, & Omnichannel into one streamlined platform.",
    image: "/projects/centralize/centralize.webp",
    badge: "UNLOCK SOON",
    color: "#2a2a2a",
    details: {
      role: "Product Designer",
      team: "FTTH & Cloud Service",
      duration: "2 months",
      overview:
        "A comprehensive platform to centralize merchant profiles across multiple payment systems.",
      challenge:
        "Multiple disconnected systems created inefficiencies and data inconsistencies across various merchant touchpoints.",
      solution:
        "Unified dashboard with real-time synchronization and intuitive management interface that streamlines operations.",
    },
  },
  {
    id: "smartnas",
    active: true,
    title: "SmartNas 4.0",
    client: "Smart Axiata",
    date: "Jan 01, 2026",
    description:
      "A ground-up redesign, crafted for users of all ages, combining accessibility, personalization, and ergonomic design.",
    image: "/projects/smartnas/smartnas.webp",
    color: "#0E2712",
    details: {
      role: "Lead Designer",
      team: "Mobile App Team",
      duration: "4 months",
      overview:
        "Complete redesign of SmartNas mobile application focusing on user experience and modern design principles.",
      challenge:
        "Previous version had poor accessibility, confusing navigation, and outdated visual design that frustrated users.",
      solution:
        "User-centered design with improved accessibility features, intuitive interface, and personalized user experiences.",
    },
  },
  {
    id: "eccc-website",
    active: true,
    title: "ECCC Website: Timeless Design",
    client: "Melon Rouge Agency",
    date: "Jan 01, 2026",
    description:
      "A platform for transparency, public awareness, and historical record of the ECCC's judicial process.",
    image: "/projects/eccc/thumbnail.webp",
    color: "#1e3a5f",
    details: {
      role: "Web Designer",
      team: "Government Projects",
      duration: "3 months",
      overview:
        "Official website for the Extraordinary Chambers in the Courts of Cambodia, providing public access to judicial records.",
      challenge:
        "Complex legal information needed to be accessible to the general public while maintaining professional credibility.",
      solution:
        "Clear information architecture with bilingual support, comprehensive document management, and accessible design.",
    },
  },
  {
    id: "filelog",
    active: true,
    title: "Filelog",
    client: "Ministry of Economy & Finance",
    date: "Jan 01, 2026",
    description:
      "System that unifies all merchant profiles such as Bill payment, Mex-map, Silverleaf, & Omnichannel into one streamlined platform.",
    image: "/projects/filelog/filelog.webp",
    color: "#4a1a4a",
    details: {
      role: "UX/UI Designer",
      team: "Government Digital Services",
      duration: "5 months",
      overview:
        "Centralized file management system for government operations with advanced tracking and collaboration features.",
      challenge:
        "Legacy systems with poor file tracking, no collaboration features, and inefficient document workflows.",
      solution:
        "Modern cloud-based solution with advanced search, version control, and seamless collaboration capabilities.",
    },
  },
];

export const clients = [
  { name: "ministry", logo: "company/mef.svg" },
  { name: "aba", logo: "company/aba.svg" },
  { name: "smart", logo: "company/smart.svg" },
  { name: "melonagency", logo: "company/mra.svg" },
  { name: "edemy", logo: "company/edemy.svg" },
];
