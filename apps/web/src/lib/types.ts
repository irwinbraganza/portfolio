export interface Profile {
  name: string;
  title: string;
  tagline: string;
  secondaryTagline: string;
  about: string;
  leadershipThemes: string[];
  performanceRating: string;
  performanceText: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  challenge: string;
  role: string;
  technicalApproach: string;
  outcome: string;
  lessons: string[];
}

export interface Projects {
  caseStudies: CaseStudy[];
}

export interface Architecture {
  title: string;
  description: string;
  diagram: {
    stages: string[];
    explanation: string;
  };
  topics: string[];
  technologies: {
    leadership: string[];
    backend: string[];
    frontend: string[];
    cloud: string[];
  };
}
