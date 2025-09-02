import type { FC } from 'react';

type Props = {
  className?: string;
};

export const FetchingIdicator: FC<Props> = ({ className }) => {
  return <div className={`absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full animate-pulse ${className}`} />;
};
