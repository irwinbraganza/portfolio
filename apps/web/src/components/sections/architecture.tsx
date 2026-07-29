import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Architecture } from '@/lib/types';

interface ArchitectureSectionProps {
  data: Architecture;
}

export const ArchitectureSection = ({ data }: ArchitectureSectionProps) => {
  return (
    <Section id="architecture">
      <div className="mb-16">
        <h2 className="heading-2 mb-4 text-neutral-900 dark:text-neutral-50">
          {data.title}
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <Card className="lg:col-span-2">
          <h3 className="heading-3 text-lg md:text-xl mb-6 text-neutral-900 dark:text-neutral-50">
            System Architecture Flow
          </h3>

          <div className="space-y-4">
            {data.diagram.stages.map((stage, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-700 dark:bg-forest-400 flex items-center justify-center text-white dark:text-neutral-950 text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    {stage}
                  </p>
                </div>
                {index < data.diagram.stages.length - 1 && (
                  <div className="hidden md:block text-forest-700 dark:text-forest-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
            {data.diagram.explanation}
          </p>
        </Card>

        <div>
          <h3 className="heading-3 text-lg md:text-xl mb-6 text-neutral-900 dark:text-neutral-50">
            Key Topics
          </h3>
          <div className="space-y-3">
            {data.topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-forest-700 dark:text-forest-400 font-bold">●</span>
                <span className="text-neutral-700 dark:text-neutral-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
