import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={`card ${hover ? 'card-hover' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';
