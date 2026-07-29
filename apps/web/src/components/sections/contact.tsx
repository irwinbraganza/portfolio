import { Section } from '../ui/section';
import { Button } from '../ui/button';

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-2 mb-6 text-neutral-900 dark:text-neutral-50">
          Get in Touch
        </h2>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
          I'm interested in engineering leadership opportunities, technical speaking engagements, and conversations about building reliable distributed systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="primary"
            href="mailto:irwin.braganza@deliveryhero.com"
          >
            Send an Email
          </Button>
          <Button
            variant="secondary"
            href="https://linkedin.com/in/irwinbraganza"
            target="_blank"
          >
            Connect on LinkedIn
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
            <p className="text-sm font-semibold text-forest-700 dark:text-forest-400 mb-2">
              Email
            </p>
            <a
              href="mailto:irwin.braganza@deliveryhero.com"
              className="text-neutral-900 dark:text-neutral-50 font-medium break-all hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
            >
              irwin.braganza@deliveryhero.com
            </a>
          </div>

          <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
            <p className="text-sm font-semibold text-forest-700 dark:text-forest-400 mb-2">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/irwinbraganza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-50 font-medium hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
            >
              irwinbraganza
            </a>
          </div>

          <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
            <p className="text-sm font-semibold text-forest-700 dark:text-forest-400 mb-2">
              GitHub
            </p>
            <a
              href="https://github.com/irwinbraganza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-50 font-medium hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
            >
              irwinbraganza
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
