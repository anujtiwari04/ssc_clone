import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none text-sm',
  {
    variants: {
      variant: {
        default:
          'bg-maroon-800 text-white shadow-sm hover:bg-maroon-900 active:bg-maroon-950 border border-maroon-900',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800',
        outline:
          'border border-maroon-800 text-maroon-800 bg-white shadow-sm hover:bg-maroon-50 active:bg-maroon-100',
        outlineSlate:
          'border border-slate-300 text-slate-700 bg-white shadow-sm hover:bg-slate-50 active:bg-slate-100',
        secondary:
          'bg-slate-100 text-slate-800 shadow-sm hover:bg-slate-200 border border-slate-200',
        ghost:
          'text-slate-700 hover:bg-slate-100 hover:text-maroon-800',
        maroonGhost:
          'text-maroon-800 hover:bg-maroon-50',
        gold:
          'bg-amber-600 text-white hover:bg-amber-700 shadow-sm',
        link: 'text-maroon-800 underline-offset-4 hover:underline font-semibold',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-11 px-6 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
