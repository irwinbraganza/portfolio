import { Section } from '../ui/section';

export const Timeline = () => {
  const events = [
    {
      period: '2024 - Present',
      role: 'Acting Engineering Manager',
      organization: 'Delivery Hero',
      description: 'Leading cross-functional engineering teams, defining technical strategy, and enabling steady delivery across operational platforms.'
    },
    {
      period: '2022 - 2024',
      role: 'Senior Software Engineer',
      organization: 'Delivery Hero',
      description: 'Architected event-driven systems, mentored junior engineers, and established patterns for distributed systems reliability.'
    },
    {
      period: '2018 - 2022',
      role: 'Full-Stack Engineer',
      organization: 'Various Scale-ups',
      description: 'Built production systems across multiple domains, owned end-to-end delivery, and established engineering practices.'
    },
    {
      period: '2015 - 2018',
      role: 'Software Engineer',
      organization: 'Early-stage Startups',
      description: 'Learned systems thinking, experienced MVP development, and built foundational technical skills.'
    }
  ];

  return (
    <Section id="timeline">
      <h2 className="heading-2 mb-12 text-neutral-900 dark:text-neutral-50">
        Career Timeline
      </h2>

      <div className="space-y-8 max-w-3xl">
        {events.map((event, index) => (
          <div key={index} className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-24 md:w-32">
              <p className="text-sm font-semibold text-forest-700 dark:text-forest-400">
                {event.period}
              </p>
            </div>

            <div className="flex-grow border-l border-neutral-200 dark:border-neutral-800 pl-6 md:pl-8 pb-8 md:pb-12 last:border-l-0 last:pb-0">
              <h3 className="heading-3 text-lg md:text-xl mb-2 text-neutral-900 dark:text-neutral-50">
                {event.role}
              </h3>

              <p className="text-sm font-medium text-forest-700 dark:text-forest-400 mb-3">
                {event.organization}
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
