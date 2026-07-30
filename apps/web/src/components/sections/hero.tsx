import { Button } from '../ui/button';
import { Section } from '../ui/section';
import { RealTimeSystemsCard } from '../real-time-systems-card';

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
  const emailLink = links.email.startsWith('mailto:') ? links.email : `mailto:${links.email}`;

  return (
    <Section className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-start">
        <div>
          <p className="text-xs font-semibold tracking-widest text-blue-400 mb-4">
            ENGINEERING LEADERSHIP · DISTRIBUTED SYSTEMS
          </p>

          <h1 className="heading-1 mb-6 text-slate-50">
            {name}
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium mb-6 whitespace-nowrap">
            {title}
          </p>

          <blockquote className="mb-8 pl-6 border-l-4 border-blue-600">
            <p className="text-lg md:text-xl italic text-slate-300">
              {tagline}
            </p>
          </blockquote>

          <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
            {secondaryTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" href="#case-studies">
              View Case Studies
            </Button>
            <Button variant="secondary" href="/resume.pdf" download>
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={emailLink}
              className="text-slate-200 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <RealTimeSystemsCard />
        </div>
      </div>

      <div className="lg:hidden mt-12">
        <RealTimeSystemsCard />
      </div>
    </Section>
  );
};
