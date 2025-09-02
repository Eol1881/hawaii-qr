import type { FC } from 'react';

type Props = {
  className?: string;
};

export const IconWarning: FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none" className={className}>
      <path
        d="M41 20.5C41 31.8218 31.8218 41 20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5Z"
        fill="#FFD7D7"
      />
      <path
        d="M18.8427 25.1438H22.9082V29.1316H18.8427V25.1438ZM22.7787 15.6145L21.7688 23.5901H19.9303L18.9463 15.6145V10.6427H22.7787V15.6145Z"
        fill="#282828"
      />
    </svg>
  );
};
