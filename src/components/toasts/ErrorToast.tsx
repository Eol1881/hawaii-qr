import { type ToastContentProps } from 'react-toastify';

export type ErrorToastProps = ToastContentProps & { text: string };

export const ErrorToast = ({ text }: ErrorToastProps) => {
  return (
    <div className="w-full !font-helvetica rounded-3xl">
      <div className="px-4 py-7 text-white text-lg leading-5 font-medium">{text}</div>
    </div>
  );
};
