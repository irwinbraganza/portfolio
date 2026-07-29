import { Button } from '../ui/button';
import { Section } from '../ui/section';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  secondaryTagline: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export const Hero = ({ name, title, tagline, secondaryTagline, links }: HeroProps) => {
  return (
    <Section className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-sm md:text-base text-forest-700 dark:text-forest-400 font-semibold mb-4">
            Welcome
          </p>

          <h1 className="heading-1 mb-6 text-neutral-900 dark:text-neutral-50">
            {name}
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium mb-6">
            {title}
          </p>

          <blockquote className="mb-8 pl-6 border-l-4 border-forest-700 dark:border-forest-400">
            <p className="text-lg md:text-xl italic text-neutral-700 dark:text-neutral-300">
              "{tagline}"
            </p>
          </blockquote>

          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            {secondaryTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" href="#about">
              Explore My Work
            </Button>
            <Button variant="secondary" href="/resume.pdf">
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
              aria-label="GitHub"
            >
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={links.email}
              className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
              aria-label="Email"
            >
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-forest-100 dark:from-forest-900 to-neutral-100 dark:to-neutral-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-forest-700 dark:text-forest-400 opacity-10">
                {"</>"}
              </div>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-4">
                Engineering Leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
