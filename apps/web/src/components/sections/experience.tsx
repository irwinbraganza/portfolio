import { Section } from '../ui/section';

export const Experience = () => {
  const events = [
    {
      period: 'Apr 2022 - Present',
      role: 'Acting Engineering Manager / Senior Software Engineer (IC3)',
      organization: 'Delivery Hero',
      location: 'Berlin, Germany',
      description: 'Lead planning and delivery for Partner Central, introducing structured product and technical refinement, epic-based roadmap planning, paired ownership, and parallel initiative execution while remaining hands-on with TypeScript, Node.js, React, GraphQL, GCP, MongoDB, and Redis.'
    },
    {
      period: 'Aug 2018 - Mar 2022',
      role: 'Senior Full Stack Developer',
      organization: 'Honest Food (Delivery Hero)',
      location: 'Goa, India / Berlin, Germany',
      description: 'Designed and delivered services for food-delivery logic, ERP, ordering, invoicing, and supply-chain operations using Node.js, React, GraphQL, MongoDB, MySQL, and GCP in a fast-growing scale-up.'
    },
    {
      period: 'Mar 2018 - Jul 2018',
      role: 'Full Stack Developer',
      organization: 'Kodework United LLP',
      location: 'Goa, India',
      description: 'Delivered custom web platforms and WordPress solutions from requirements and architecture through testing and production release.'
    },
    {
      period: 'Aug 2014 - Jan 2018',
      role: 'Full Stack Developer',
      organization: 'Diet Code Application Private Limited',
      location: 'Goa, India',
      description: 'Built full-stack e-commerce and product-discovery capabilities across backend services, frontend applications, SQL databases, integrations, and production operations.'
    }
  ];

  return (
    <Section id="experience">
      <h2 className="heading-2 mb-12 text-slate-50">
        Professional Experience
      </h2>

      <div className="space-y-12 max-w-4xl">
        {events.map((event, index) => (
          <div key={index} className="flex gap-8 md:gap-12">
            <div className="flex-shrink-0 w-32 md:w-40">
              <p className="text-sm font-semibold text-blue-600 leading-relaxed">
                {event.period}
              </p>
            </div>

            <div className="flex-grow border-l border-slate-700 pl-6 md:pl-8 pb-0 last:border-l-0">
              <h3 className="heading-3 text-xl md:text-2xl mb-3 text-slate-50">
                {event.role}
              </h3>

              <p className="text-base font-medium text-blue-600 mb-2">
                {event.organization}
              </p>

              {event.location && (
                <p className="text-sm text-slate-500 mb-4">
                  {event.location}
                </p>
              )}

              <p className="text-slate-400 leading-relaxed text-base">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
