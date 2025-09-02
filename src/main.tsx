import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@styles/index.css';

import App from '@/App.tsx';
import { validateEnv } from '@/env';

validateEnv();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      retry: 3, // TODO: tweak this in production
      retryDelay: 2000, // TODO: tweak this in production
      gcTime: 10 * 60 * 1000,
      placeholderData: (previousData: unknown) => previousData
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
