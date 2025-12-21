
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Database' | 'Security';
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
