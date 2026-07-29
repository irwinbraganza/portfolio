export interface CaseStudyDto {
  id: string;
  title: string;
  context: string;
  challenge: string;
  role: string;
  technicalApproach: string;
  outcome: string;
  lessons: string[];
}

export interface ProjectsDto {
  caseStudies: CaseStudyDto[];
}
