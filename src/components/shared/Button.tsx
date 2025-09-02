import type { ButtonHTMLAttributes, FC } from 'react';

import { IconPlay } from '@components/icons/(music)/IconPlay';

type Props = {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <button
      className={`rounded-full px-12 h-24 text-3xl leading-3 font-bold border-4 border-orange2 hover:border-yellow1 transition-all duration-300 ${
        variant === 'primary' ? 'bg-orange2 text-black hover:bg-yellow1' : 'text-orange2 hover:text-yellow1'
      } flex items-center justify-center gap-4 pr-8 ${className}`}
      {...props}
    >
      {children} <IconPlay className={`${variant === 'secondary' && 'fill-orange2'} w-8 h-8 mt-[0.125rem]`} />
    </button>
  );
};
