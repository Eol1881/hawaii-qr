import { fireErrorToast } from '@/lib/fireErrorToast';

/**
 * Простая обертка для запуска тост уведомлений при ошибках API функций
 * @param apiFunction - API функция
 * @param errorMessage - Сообщение об ошибке
 * @returns API функция с тост уведомлением при ошибке
 */
export const withErrorToast = <TArgs extends unknown[], TResult>(
  apiFunction: (...args: TArgs) => Promise<TResult>,
  errorMessage: string = 'Произошла ошибка при загрузке данных',
  withArgs: boolean = false
) => {
  return async (...args: TArgs): Promise<TResult | null> => {
    try {
      return await apiFunction(...args);
    } catch (error) {
      const message = withArgs ? `${errorMessage} (${args.join(' ')})` : errorMessage;
      console.error('⚠️ API Error:', error);
      fireErrorToast(message);
      return null;
    }
  };
};
