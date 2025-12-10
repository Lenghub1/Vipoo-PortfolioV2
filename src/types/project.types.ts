export interface Project {
  id: string;
  title: string;
  client: string;
  date: string;
  description: string;
  image: string;
  active?: boolean;
  badge?: string;
  color: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  role: string;
  team: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
}
