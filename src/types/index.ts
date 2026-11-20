export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longerDescription: string;
  tech: string[];
  githubUrl: string; // May include TODO placeholder
  liveUrl?: string;
  image?: string;
  video?: string;
  featured: boolean;
  category: 'Full Stack' | 'Frontend / Dashboard' | 'AI / ML' | 'Systems';
  metrics?: string[];
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
  skills: string[];
  type: 'internship' | 'leadership';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialUrl?: string;
  type: 'certification' | 'award';
}

