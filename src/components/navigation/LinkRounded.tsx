import type { FC } from 'react';
import { Link, useLocation } from 'react-router';

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const LinkRounded: FC<Props> = ({ to, children, className }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={`h-full w-28 rounded-full flex items-center justify-center ${
        pathname === to
          ? 'bg-[#E5C081] !fill-[#1D1D1B] stroke-[#1D1D1B]'
          : 'bg-[#2A2A35] !fill-[#AAAAB9] !stroke-[#AAAAB9]'
      } ${className}`}
      draggable={false}
    >
      {children}
    </Link>
  );
};
