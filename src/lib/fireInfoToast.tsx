import { type ToastOptions, toast } from 'react-toastify';

import { InfoToast } from '@components/toasts/InfoToast';

export const fireInfoToast = (text: string, options?: ToastOptions) => {
  toast.info((props) => <InfoToast {...props} text={text} />, {
    className: 'p-0 w-[30rem] overflow-hidden rounded-3xl bg-black3 shadow-xl',
    ...options
  });
};
