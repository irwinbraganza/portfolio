import { Section } from '../ui/section';
import { Architecture } from '@/lib/types';

interface ArchitectureSectionProps {
  data: Architecture;
}

export const ArchitectureSection = ({ data }: ArchitectureSectionProps) => {
  return (
    <Section id="architecture">
      <div className="mb-16">
        <h2 className="heading-2 mb-4 text-slate-50">
          {data.title}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <article className="lg:col-span-2 rounded-2xl border border-slate-700 bg-slate-800/80 p-6 lg:p-8 shadow-xl backdrop-blur-sm motion-safe:transition-transform motion-safe:hover:-translate-y-1">
          <header className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-blue-400 mb-2">
              SYSTEMS THINKING
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-50">
              System Architecture Flow
            </h3>
          </header>

          <ol className="space-y-6 mb-8">
            {data.diagram.stages.map((stage, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex flex-col items-center gap-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-400 text-xs font-semibold">
                    {index + 1}
                  </div>
                  {index < data.diagram.stages.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400/70 to-slate-600/30 mt-0"></div>
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {stage}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-xs md:text-sm text-slate-400 italic">
              {data.diagram.explanation}
            </p>
          </div>
        </article>

        <div>
          <h3 className="heading-3 text-lg md:text-xl mb-6 text-slate-50">
            Key Topics
          </h3>
          <div className="space-y-3">
            {data.topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">●</span>
                <span className="text-slate-400">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
