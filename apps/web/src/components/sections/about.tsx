import { Section } from '../ui/section';

interface AboutProps {
  about: string;
  leadershipThemes: string[];
  performanceRating: string;
  performanceText: string;
}

export const About = ({ about, leadershipThemes, performanceRating, performanceText }: AboutProps) => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="heading-2 mb-8 text-neutral-900 dark:text-neutral-50">About</h2>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
            {about}
          </p>

          <h3 className="heading-3 text-lg md:text-xl mb-6 text-neutral-900 dark:text-neutral-50">
            Leadership Themes
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {leadershipThemes.map((theme, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-forest-700 dark:text-forest-400 font-bold mt-1">•</span>
                <span className="text-neutral-700 dark:text-neutral-300">{theme}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-forest-50 dark:bg-forest-950 border border-forest-200 dark:border-forest-900 rounded-lg p-8">
            <div className="text-sm font-semibold text-forest-700 dark:text-forest-400 mb-3">
              Performance Rating
            </div>
            <h3 className="heading-3 text-2xl text-forest-700 dark:text-forest-400 mb-4">
              {performanceRating}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {performanceText}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
