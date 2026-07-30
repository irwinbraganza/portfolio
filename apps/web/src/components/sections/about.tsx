import { Section } from '../ui/section';

interface AboutProps {
  about: string;
  leadershipThemes: string[];
  leadershipRecognition: string;
}

export const About = ({ about, leadershipThemes, leadershipRecognition }: AboutProps) => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="heading-2 mb-8 text-slate-50">About</h2>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            {about}
          </p>

          <h3 className="heading-3 text-lg md:text-xl mb-6 text-slate-50">
            Leadership Themes
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {leadershipThemes.map((theme, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-slate-400">{theme}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="heading-3 text-lg mb-4 text-slate-50">
              Leadership Recognition
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {leadershipRecognition}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
