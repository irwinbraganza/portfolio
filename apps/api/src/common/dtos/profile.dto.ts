export class ProfileDto {
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
