import { type ToastContentProps } from 'react-toastify';

export type ConfirmationToastProps = ToastContentProps & { text: string };

export const InfoToast = ({ text }: ConfirmationToastProps) => {
  return (
    <div className="w-full !font-helvetica rounded-3xl">
      <div className="px-4 py-7 text-white text-lg leading-5 font-medium">{text}</div>
    </div>
  );
};
