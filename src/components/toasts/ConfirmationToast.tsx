import { type ToastContentProps } from 'react-toastify';

export type ConfirmationToastProps = ToastContentProps & { text: string };

export const ConfirmationToast = ({ closeToast, text }: ConfirmationToastProps) => {
  return (
    <div className="grid grid-cols-[1fr_9rem] w-full !font-helvetica rounded-3xl">
      <div className="px-4 py-5 text-white text-lg leading-5 font-medium">{text}</div>

      <div className="grid grid-rows-[1fr_1fr] h-full gap-3 pr-4 py-5 font-bold">
        <button
          className="bg-red1 text-black rounded-full py-2 hover:scale-95 transition-all"
          onClick={() => closeToast('reject')}
        >
          Отмена
        </button>
        <button
          className="bg-green1 text-black rounded-full py-2 hover:scale-95 transition-all"
          onClick={() => closeToast('accept')}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};
