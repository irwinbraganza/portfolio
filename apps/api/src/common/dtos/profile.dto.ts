export class ProfileDto {
  name!: string;
  title!: string;
  tagline!: string;
  secondaryTagline!: string;
  about!: string;
  leadershipThemes!: string[];
  leadershipRecognition!: string;
  languages!: string;
  location!: string;
  links!: {
    linkedin: string;
    github: string;
    email: string;
  };
}
