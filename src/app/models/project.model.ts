export interface Project {
  id: number;
  name: string;
  status: 'Terminado' | 'Idea / Prototipo' | 'En desarrollo';
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  icon: string;
  image: string;
  gallery: string[];
}