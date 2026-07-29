import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Architecture } from '@/lib/types';

interface TechnologiesSectionProps {
  technologies: Architecture['technologies'];
}

export const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
  const groups = [
    {
      title: 'Leadership & Product',
      items: technologies.leadership,
      color: 'forest'
    },
    {
      title: 'Backend & Architecture',
      items: technologies.backend,
      color: 'forest'
    },
    {
      title: 'Frontend',
      items: technologies.frontend,
      color: 'forest'
    },
    {
      title: 'Cloud & Platform',
      items: technologies.cloud,
      color: 'forest'
    }
  ];

  return (
    <Section id="technologies">
      <h2 className="heading-2 mb-12 text-neutral-900 dark:text-neutral-50">
        Technologies & Capabilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        {groups.map((group, idx) => (
          <Card key={idx} className="hover:shadow-md dark:hover:shadow-xl">
            <h3 className="heading-3 text-lg font-semibold mb-6 text-neutral-900 dark:text-neutral-50">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-forest-100 dark:bg-forest-900 text-forest-700 dark:text-forest-300 border border-forest-200 dark:border-forest-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
