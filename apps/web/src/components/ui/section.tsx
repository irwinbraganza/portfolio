import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => (
    <section ref={ref} className={`section ${className || ''}`} {...props}>
      <div className="section-container">
        {children}
      </div>
    </section>
  )
);

Section.displayName = 'Section';
