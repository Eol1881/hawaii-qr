import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const PalmsBackground: FC<Props> = ({ children }) => {
  return (
    <div className="h-full w-full relative bg-[#101012] bg-palms bg-bottom bg-no-repeat bg-[length:95%] bg-fixed">
      <div className="absolute inset-0 opacity-10 bg-noise bg-cover bg-no-repeat bg-fixed"></div>
      <div className="absolute inset-0 opacity-10 bg-gradient bg-cover bg-no-repeat mix-blend-color-burn bg-fixed"></div>
      {children}
    </div>
  );
};
