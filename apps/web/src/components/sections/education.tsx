import { Section } from '../ui/section';

export const Education = () => {
  return (
    <Section id="education">
      <h2 className="heading-2 mb-8 text-slate-50">
        Education
      </h2>

      <div className="max-w-2xl">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-8">
          <h3 className="heading-3 text-lg font-semibold text-slate-50 mb-2">
            Bachelor of Engineering, Computer Engineering
          </h3>
          <p className="text-sm font-medium text-blue-600 mb-3">
            Padre Conceicao College of Engineering, Goa
          </p>
          <p className="text-slate-400">
            2010 - 2014
          </p>
        </div>
      </div>
    </Section>
  );
};
