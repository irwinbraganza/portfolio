import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, target, rel, download, children, ...props }, ref) => {
    const baseClass = variant === 'primary' ? 'button-primary' : 'button-secondary';

    if (href) {
      return (
        <a href={href} className={baseClass} target={target} rel={rel} download={download}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
