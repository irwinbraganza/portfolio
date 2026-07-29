export class CaseStudyDto {
  id: string;
  title: string;
  context: string;
  challenge: string;
  role: string;
  technicalApproach: string;
  outcome: string;
  lessons: string[];
}

export class ProjectsDto {
  caseStudies: CaseStudyDto[];
}
