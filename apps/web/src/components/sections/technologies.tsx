import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Architecture } from '@/lib/types';

interface TechnologiesSectionProps {
  technologies: Architecture['technologies'];
}

export const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
  const groups = [
    {
      title: 'Leadership & Delivery',
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
  ].filter(group => group.items.length > 0);

  return (
    <Section id="technologies">
      <h2 className="heading-2 mb-12 text-slate-50">
        Technologies & Capabilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        {groups.map((group, idx) => (
          <Card key={idx} className="hover:shadow-md hover:shadow-blue-500/20">
            <h3 className="heading-3 text-lg font-semibold mb-6 text-slate-50">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-900 text-blue-100 border border-blue-700"
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
