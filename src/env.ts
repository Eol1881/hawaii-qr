export const validateEnv = (): void => {
  const requiredVars = ['VITE_USE_PROXY'];

  const missingVars = requiredVars.filter((varName) => !import.meta.env[varName as keyof ImportMetaEnv]);

  if (missingVars.length > 0) {
    throw new Error(`Отсутствуют обязательные переменные окружения: ${missingVars.join(', ')}`);
  }
};

// const USE_PROXY = import.meta.env.VITE_USE_PROXY === 'true';

export const env = {
  // Development
  DEV_MODE: import.meta.env.VITE_DEV_MODE === 'true'
} as const;
