export type Project = {
  id: string;
  title: string;
  short: string;
  image: string;
  tags?: string[];
  releaseDate?: string;
  trailerUrl?: string;
  projectWebsiteUrl?: string;
  details?: string[];
  basics?: string[];
  client?: string[];
};
