import { type FC, type ReactNode, useEffect } from 'react';

export type Props = {
  close: () => void;
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const Backdrop: FC<Props> = ({ close, isOpen, children, className, wrapperClassName }) => {
  useEffect(() => {
    const html = document.querySelector('html')!;
    html.style.overflowY = isOpen ? 'hidden' : 'auto';
    return () => {
      html.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed left-0 top-0 z-20 h-[100vh] w-[100vw] py-10 bg-black/40 overflow-auto ${
        isOpen ? 'animate-fade-in' : 'hidden'
      } ${wrapperClassName}`}
      onMouseDown={(e) => {
        e.stopPropagation();
        close();
      }}
    >
      <div className={`w-full h-full ${className}`}>{children}</div>
    </div>
  );
};

export default Backdrop;
