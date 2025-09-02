import { toast } from 'react-toastify';

import { ConfirmationToast } from '@components/toasts/ConfirmationToast';

export const fireConfirmationToast = (onClose: (reason?: string | boolean | undefined) => void, text: string) => {
  toast.warn((props) => <ConfirmationToast {...props} text={text} />, {
    className: 'p-0 w-[42rem] overflow-hidden rounded-3xl bg-black3 shadow-xl',
    onClose
  });
};
