import { useCallback, useEffect, useRef } from 'react';

type AutoScrollOptions = ScrollIntoViewOptions & {
  enabled?: boolean;
};

const defaultOptions: AutoScrollOptions = {
  behavior: 'smooth',
  block: 'center',
  inline: 'nearest',
  enabled: true
};

/**
 * Автоскролл к элементу списка по его идентификатору.
 * Возвращает функции для привязки ref к элементам и ручного скролла по id.
 */
export const useAutoScrollToTargetById = <T extends HTMLElement>(
  activeId: number | null | undefined,
  options: AutoScrollOptions = defaultOptions
) => {
  const elementsByIdRef = useRef<Record<number, T | null>>({});
  const refCallbacksRef = useRef<Record<number, (el: T | null) => void>>({});

  const getItemRefCallback = useCallback((id: number) => {
    if (!refCallbacksRef.current[id]) {
      refCallbacksRef.current[id] = (el: T | null) => {
        elementsByIdRef.current[id] = el;
      };
    }
    return refCallbacksRef.current[id];
  }, []);

  const scrollToId = useCallback(
    (id: number) => {
      const el = elementsByIdRef.current[id];
      const { enabled = true, ...scrollOptions } = options;
      if (enabled && el) {
        el.scrollIntoView(scrollOptions);
      }
    },
    [options]
  );

  useEffect(() => {
    if (activeId != null) {
      scrollToId(activeId);
    }
  }, [activeId, scrollToId]);

  return {
    getItemRefCallback,
    scrollToId
  } as const;
};
