import { Section } from '../ui/section';
import { Button } from '../ui/button';

interface ContactProps {
  email: string;
}

export const Contact = ({ email }: ContactProps) => {
  const mailtoLink = email.startsWith('mailto:') ? email : `mailto:${email}`;

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-2 mb-6 text-slate-50">
          Let's Connect
        </h2>

        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          I am open to engineering leadership and senior technical opportunities, particularly within teams building distributed systems, operational platforms, and products that connect software with real-world processes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            href={mailtoLink}
          >
            Email Me
          </Button>
          <Button
            variant="secondary"
            href="https://linkedin.com/in/irwinbraganza"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </Button>
          <Button
            variant="secondary"
            href="https://github.com/irwinbraganza"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </Button>
          <Button
            variant="secondary"
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  );
};
