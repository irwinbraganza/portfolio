export interface ArchitectureDto {
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
