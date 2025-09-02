import { withErrorToast } from '@api/aspects/withErrorToast';

import { env } from '@/env';

export type PunchingBagHealth = {
  id: string;
  isWorking: boolean;
};

type Response = {
  mac: string;
  punchbag: string;
  mass: number;
  isWorking: boolean;
}[];

export const getPunchingBagHealth = withErrorToast(async (): Promise<PunchingBagHealth[]> => {
  const response = await fetch(`${env.LOCAL_API_BASE_URL}/controllers`);

  const result: Response = await response.json();

  return result.map(({ punchbag, isWorking }) => ({
    id: punchbag,
    isWorking
  }));
}, 'Не удалось получить состояние груш');
