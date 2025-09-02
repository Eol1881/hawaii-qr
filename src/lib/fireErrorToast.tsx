import { type ToastOptions, toast } from 'react-toastify';

import { ErrorToast } from '@components/toasts/ErrorToast';

export const fireErrorToast = (text: string, options?: ToastOptions) => {
  toast.error((props) => <ErrorToast {...props} text={text} />, {
    className: 'p-0 w-[30rem] overflow-hidden rounded-3xl bg-black3 shadow-xl',
    ...options
  });
};
