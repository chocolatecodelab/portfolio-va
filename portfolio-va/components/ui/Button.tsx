import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium transition-all duration-150 focus-visible:ring-2 focus-visible:ring-focus focus:outline-none rounded-[2px] cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent text-accent-ink border border-ink shadow-brutal hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed',
    secondary:
      'bg-paper-raised text-ink border border-ink shadow-brutal-sm hover:bg-paper active:translate-x-[1px] active:translate-y-[1px] active:shadow-brutal-pressed',
    ghost:
      'bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-paper-raised active:bg-paper-raised/80',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
